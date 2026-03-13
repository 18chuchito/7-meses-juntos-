// ─────────────────────────────
// CORAZONES FLOTANTES DE FONDO
// ─────────────────────────────
const contenedorFondo = document.getElementById('fondo-corazones');

const emojis = ['💕','💗','💓','💖','❤️','🌸','✨','💫','🌹','🥰'];

// Crear 28 corazones flotando de fondo
for (let i = 0; i < 28; i++) {
  const el = document.createElement('div');
  el.classList.add('corazon-fondo');

  el.textContent              = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left               = Math.random() * 100 + '%';
  el.style.fontSize           = (1 + Math.random() * 1.6) + 'rem';
  el.style.animationDuration  = (9  + Math.random() * 13) + 's';
  el.style.animationDelay     = (-Math.random() * 13) + 's';

  contenedorFondo.appendChild(el);
}


// ─────────────────────────────
// GUARDAR TEXTO (persiste al cerrar)
// ─────────────────────────────
const carta1 = document.getElementById('carta1');
const carta2 = document.getElementById('carta2');

// Cargar lo que había guardado
carta1.value = localStorage.getItem('carta1') || '';
carta2.value = localStorage.getItem('carta2') || '';

// Guardar cada vez que escriben
carta1.addEventListener('input', () => {
  localStorage.setItem('carta1', carta1.value);
});

carta2.addEventListener('input', () => {
  localStorage.setItem('carta2', carta2.value);
});