import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import settings from '../src/data/site-settings.json' assert { type: 'json' };

const scholarId = settings.scholarId;
const scholarUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en`;
const outputPath = new URL('../public/data/scholar-stats.json', import.meta.url);

async function readExistingCache() {
  try {
    const cached = JSON.parse(await readFile(outputPath, 'utf-8'));
    return {
      citations: cached?.citations ?? '',
      hIndex: cached?.hIndex ?? '',
      updatedAt: cached?.updatedAt ?? '',
    };
  } catch {
    return {
      citations: '',
      hIndex: '',
      updatedAt: '',
    };
  }
}

async function main() {
  const fallback = await readExistingCache();
  let nextCache = { ...fallback };

  try {
    const response = await fetch(scholarUrl, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    if (response.ok) {
      const html = await response.text();
      const stats = [...html.matchAll(/<td class="gsc_rsb_std">(\d+)<\/td>/g)].map((match) => match[1]);
      if (stats.length >= 3) {
        nextCache = {
          citations: stats[0],
          hIndex: stats[2],
          updatedAt: new Date().toISOString(),
        };
        console.log(`Updated Scholar cache from ${scholarUrl}`);
      } else {
        console.warn('Scholar HTML did not contain expected stats; keeping existing cache.');
      }
    } else {
      console.warn(`Scholar request failed with status ${response.status}; keeping existing cache.`);
    }
  } catch (error) {
    console.warn(`Scholar request failed: ${error instanceof Error ? error.message : String(error)}; keeping existing cache.`);
  }

  await mkdir(new URL('../public/data/', import.meta.url), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(nextCache, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
