/* Institutional chrome, translated with the course's existing language state. */
(() => {
  const root = document.documentElement;
  const panel = document.getElementById('accessPanel');
  const trigger = document.getElementById('accessToggle');
  let scale = Number(stored('unal-reading-scale', 1));
  if (!Number.isFinite(scale) || scale < 1 || scale > 1.3) scale = 1;
  let highContrast = stored('unal-high-contrast', false) === true;
  function applyReading() {
    root.style.setProperty('--read-scale', scale);
    document.body.classList.toggle('high-contrast', highContrast);
    document.getElementById('contrastToggle').setAttribute('aria-pressed', String(highContrast));
    document.getElementById('fontMinus').disabled = scale <= 1;
    document.getElementById('fontPlus').disabled = scale >= 1.3;
    save('unal-reading-scale', scale);
    save('unal-high-contrast', highContrast);
  }
  function translateChrome() {
    const en = root.lang === 'en';
    document.querySelectorAll('[data-es][data-en]').forEach(el => { el.textContent = en ? el.dataset.en : el.dataset.es; });
    document.getElementById('brandSub').textContent = en ? 'Engineering classroom' : 'Aula de ingeniería';
    document.getElementById('fontMinus').setAttribute('aria-label', en ? 'Decrease lesson text size' : 'Reducir tamaño del texto de la lección');
    document.getElementById('fontPlus').setAttribute('aria-label', en ? 'Increase lesson text size' : 'Aumentar tamaño del texto de la lección');
    panel.setAttribute('aria-label', en ? 'Accessibility' : 'Accesibilidad');
    document.querySelector('.unal-course-nav').setAttribute('aria-label', en ? 'Course navigation' : 'Navegación del curso');
    document.title = en ? 'Power distribution systems | UNAL classroom' : 'Sistemas de distribución | Aula UNAL';
  }
  trigger.addEventListener('click', () => { panel.hidden = !panel.hidden; trigger.setAttribute('aria-expanded', String(!panel.hidden)); });
  panel.addEventListener('keydown', e => { if (e.key === 'Escape') { panel.hidden = true; trigger.setAttribute('aria-expanded', 'false'); trigger.focus(); } });
  document.getElementById('fontPlus').addEventListener('click', () => { scale = Math.min(1.3, Math.round((scale + .1) * 10) / 10); applyReading(); });
  document.getElementById('fontMinus').addEventListener('click', () => { scale = Math.max(1, Math.round((scale - .1) * 10) / 10); applyReading(); });
  document.getElementById('contrastToggle').addEventListener('click', () => { highContrast = !highContrast; applyReading(); });
  document.getElementById('accessReset').addEventListener('click', () => { scale = 1; highContrast = false; applyReading(); });
  new MutationObserver(translateChrome).observe(root, { attributes: true, attributeFilter: ['lang'] });
  window.addEventListener('hashchange', translateChrome);
  translateChrome(); applyReading();
})();
