// Saumya Singh — Brand Book. Small, dependency-free interactions.
document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Mobile nav ----------
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// ---------- Flavour (accent colour) picker ----------
const swatches = document.querySelectorAll('.swatch');
function setFlavour(name) {
  if (name === 'tomato') document.documentElement.removeAttribute('data-flavour');
  else document.documentElement.setAttribute('data-flavour', name);
  swatches.forEach(s => s.setAttribute('aria-pressed', String(s.dataset.flavour === name)));
  try { localStorage.setItem('ss-flavour', name); } catch (e) {}
}
let saved = 'tomato';
try { saved = localStorage.getItem('ss-flavour') || 'tomato'; } catch (e) {}
setFlavour(saved);
swatches.forEach(s => s.addEventListener('click', () => setFlavour(s.dataset.flavour)));

// ---------- Count-up numbers ----------
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const sep = el.dataset.sep === 'true';
  const fmt = v => {
    let s = v.toFixed(decimals);
    if (sep) s = Number(s).toLocaleString('en-IN');
    return s + suffix;
  };
  if (reduceMotion) { el.textContent = fmt(target); return; }
  const dur = 1400;
  const start = performance.now();
  const tick = now => {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = fmt(target * eased);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ---------- Reveal on scroll ----------
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  // small stagger for items in the same grid
  document.querySelectorAll('.reveal').forEach(el => {
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    const i = siblings.indexOf(el);
    if (i > 0) el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// ---------- Draggable hero stickers ----------
document.querySelectorAll('.draggable').forEach(el => {
  let startX, startY, baseX = 0, baseY = 0;
  const baseTransform = getComputedStyle(el).transform === 'none' ? '' : getComputedStyle(el).transform;

  el.addEventListener('pointerdown', e => {
    el.setPointerCapture(e.pointerId);
    el.classList.add('dragging');
    startX = e.clientX - baseX;
    startY = e.clientY - baseY;
  });
  el.addEventListener('pointermove', e => {
    if (!el.classList.contains('dragging')) return;
    baseX = e.clientX - startX;
    baseY = e.clientY - startY;
    el.style.transform = `translate(${baseX}px, ${baseY}px) ${baseTransform}`;
  });
  const end = () => el.classList.remove('dragging');
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
});

// ---------- Footer year ----------
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
