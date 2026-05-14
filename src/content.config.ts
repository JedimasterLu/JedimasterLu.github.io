import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const site = defineCollection({
  loader: glob({ base: "./src/content/site", pattern: "**/*.md" }),
  schema: z.discriminatedUnion("section", [
    z.object({
      section: z.literal("meta"),
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
      robots: z.string(),
      googleSiteVerification: z.string(),
      favicon: z.string(),
    }),
    z.object({
      section: z.literal("brand"),
      header: z.string(),
      footer: z.string(),
    }),
    z.object({
      section: z.literal("header"),
      kicker: z.string(),
      linkText: z.string(),
    }),
    z.object({
      section: z.literal("hero"),
      name: z.string(),
      subtitle: z.string(),
    }),
    z.object({
      section: z.literal("contact"),
      addressLines: z.array(z.string()),
      emailLabel: z.string(),
      lastUpdatedLabel: z.string(),
    }),
    z.object({
      section: z.literal("about"),
      paragraphs: z.array(z.string()),
    }),
    z.object({
      section: z.literal("publications"),
      bibFileName: z.string(),
      authorName: z.string(),
    }),
    z.object({
      section: z.literal("skills"),
      caption: z.string(),
      rows: z.array(
        z.object({
          category: z.string(),
          details: z.string(),
        })
      ),
    }),
    z.object({
      section: z.literal("interests"),
      intro: z.string(),
      items: z.array(z.string()),
    }),
    z.object({
      section: z.literal("footer"),
      brand: z.string(),
    }),
    z.object({
      section: z.literal("schema"),
      jobTitle: z.string(),
      affiliation: z.string(),
      alumniOf: z.string(),
      knowsAbout: z.array(z.string()),
    }),
    z.object({
      section: z.literal("profile"),
      authorName: z.string(),
      email: z.string(),
      github: z.string(),
      linkedin: z.string(),
    }),
    z.object({
      section: z.literal("portrait"),
      imageName: z.string(),
      caption: z.string(),
    }),
  ]),
});

const news = defineCollection({
  loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
  schema: z.object({
    date: z.string(),
    displayDate: z.string(),
    text: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    paragraphs: z.array(z.string()),
    figure: z
      .object({
        imageName: z.string(),
        caption: z.string(),
      })
      .optional(),
  }),
});

const education = defineCollection({
  loader: glob({ base: "./src/content/education", pattern: "**/*.md" }),
  schema: z.object({
    order: z.number(),
    degree: z.string(),
    time: z.string(),
    major: z.string(),
    school: z.string(),
    bullets: z.array(z.string()),
  }),
});

const additional = defineCollection({
  loader: glob({ base: "./src/content/additional", pattern: "**/*.md" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    body: z.string(),
  }),
});

export const collections = {
  site,
  news,
  projects,
  education,
  additional,
};
