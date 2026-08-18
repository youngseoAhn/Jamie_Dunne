const languageButtons = document.querySelectorAll('[data-lang-button]');
const translatedElements = document.querySelectorAll('[data-en][data-ko]');

function setLanguage(language) {
  const korean = language === 'ko';
  document.documentElement.lang = korean ? 'ko' : 'en';
  translatedElements.forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.langButton === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('jamie-language', language);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langButton));
});

setLanguage(localStorage.getItem('jamie-language') === 'ko' ? 'ko' : 'en');
