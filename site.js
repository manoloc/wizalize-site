// Local language toggle only: no storage, analytics or external requests.
const button = document.getElementById('language');
const nodes = [...document.querySelectorAll('[data-es]')];
const originals = nodes.map(node => [...node.childNodes].map(child => child.cloneNode(true)));
let spanish = false;
button?.addEventListener('click', () => {
  spanish = !spanish;
  document.documentElement.lang = spanish ? 'es' : 'en';
  nodes.forEach((node, index) => {
    if (spanish) node.textContent = node.dataset.es;
    else node.replaceChildren(...originals[index].map(child => child.cloneNode(true)));
  });
  button.textContent = spanish ? 'EN' : 'ES';
  button.setAttribute('aria-label', spanish ? 'Switch to English' : 'Cambiar a español');
  document.title = spanish ? 'Wizalize — Tu mazo. Tu siguiente paso.' : 'Wizalize — Your Deck. Your Next Move.';
});
