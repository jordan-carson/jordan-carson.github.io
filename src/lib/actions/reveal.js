export function reveal(node, { delay = 0, y = 48, duration = 700 } = {}) {
  node.style.setProperty('--reveal-delay', `${delay}ms`);
  node.style.setProperty('--reveal-y', `${y}px`);
  node.style.setProperty('--reveal-duration', `${duration}ms`);
  node.classList.add('reveal-hidden');

  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      node.classList.add('reveal-visible');
      obs.disconnect();
    }
  }, { threshold: 0.08 });

  obs.observe(node);
  return { destroy: () => obs.disconnect() };
}
