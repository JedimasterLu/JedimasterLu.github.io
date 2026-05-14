const bodyGrid = document.querySelector<HTMLElement>(".body-grid");

if (bodyGrid) {
  const root = document.documentElement;
  let frameId = 0;

  const updateBodyGridMaxHeight = () => {
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(() => {
      const styles = getComputedStyle(bodyGrid);
      const columnGap = parseFloat(styles.columnGap || "0") || 0;
      const columnWidth = Math.max(0, (bodyGrid.clientWidth - columnGap) / 2);
      const probe = bodyGrid.cloneNode(true) as HTMLElement;

      probe.style.position = "absolute";
      probe.style.left = "-99999px";
      probe.style.top = "0";
      probe.style.visibility = "hidden";
      probe.style.pointerEvents = "none";
      probe.style.width = `${columnWidth}px`;
      probe.style.height = "auto";
      probe.style.maxHeight = "none";
      probe.style.columnCount = "1";
      probe.style.columnGap = "0";
      probe.style.margin = "0";
      probe.style.overflow = "visible";

      document.body.appendChild(probe);

      const nextValue = `${Math.ceil(probe.scrollHeight + 48)}px`;
      probe.remove();

      if (root.style.getPropertyValue("--body-grid-max-height") !== nextValue) {
        bodyGrid.classList.add("is-relayout");
        root.style.setProperty("--body-grid-max-height", nextValue);
        window.setTimeout(() => {
          bodyGrid.classList.remove("is-relayout");
        }, 220);
      }
    });
  };

  const resizeObserver = new ResizeObserver(updateBodyGridMaxHeight);

  updateBodyGridMaxHeight();
  resizeObserver.observe(bodyGrid);
  window.addEventListener("load", updateBodyGridMaxHeight, { once: true });
  window.addEventListener("resize", updateBodyGridMaxHeight);
  document.fonts?.ready?.then(updateBodyGridMaxHeight);
}
