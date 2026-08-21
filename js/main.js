/* ===== main.js – Lazer Recreações ===== */
'use strict';

/* ---------- helpers ---------- */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

/* ---------- NAVBAR ---------- */
const navbar    = $('#navbar');
const navToggle = $('#navToggle');
const navMenu   = $('#navMenu');

/* ---------- REDUCED MOTION --- (verificar ANTES de qualquer animação) --- */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

navMenu.addEventListener('click', e => {
  if (e.target.classList.contains('nav-link')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  }
});

/* ---------- SMOOTH SCROLL com offset para navbar fixa ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar ? navbar.offsetHeight : 0;
    const offset    = 24; // breathing room
    const targetY   = target.getBoundingClientRect().top + window.scrollY - navHeight - offset;
    window.scrollTo({ top: targetY, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

/* ---------- REVEAL ON SCROLL ---------- */
const revealEls = $$('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('revealed');
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ---------- COUNTER ANIMATION ---------- */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString('pt-BR');
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statNums = $$('.snum');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      if (!prefersReducedMotion) animateCounter(en.target);
      else en.target.textContent = en.target.dataset.target; // exibe valor final direto
      counterObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => counterObserver.observe(el));

/* ---------- CONFETTI ---------- */
(function spawnConfetti() {
  if (prefersReducedMotion) return; // respeita preferência do sistema
  const wrap = $('#confettiWrap');
  if (!wrap) return;
  const colors = ['#F5C518', '#fff', '#ffaaaa', '#fff5cc'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.style.cssText = `
      position:absolute;
      width:${6 + Math.random() * 8}px;
      height:${6 + Math.random() * 8}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:${Math.random() > .5 ? '50%' : '2px'};
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      opacity:${.4 + Math.random() * .5};
      animation: confettiFall ${4 + Math.random() * 6}s linear ${Math.random() * 4}s infinite;
    `;
    wrap.appendChild(c);
  }
  if (!document.querySelector('#confetti-kf')) {
    const style = document.createElement('style');
    style.id = 'confetti-kf';
    style.textContent = `
      @keyframes confettiFall {
        0%   { transform: translateY(-20px) rotate(0deg); opacity: .8; }
        100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
})();

/* ---------- AVATAR COLORS ---------- */
const avatarColors = [
  '#CC1F1F','#9b0000','#d4520a','#c4770a','#6b3d9a','#1a7abf','#178a4f','#b5361e','#8b4513'
];
function getColor(i) { return avatarColors[i % avatarColors.length]; }
function initials(nome) { return nome.split(' ').slice(0,2).map(n=>n[0]).join('').toUpperCase(); }

/* ---------- RECREADORES ---------- */
const VISIBLE_START = 10;
let expanded = false;

function buildRecreadores() {
  const grid = $('#recreGrid');
  if (!grid) return;
  grid.innerHTML = '';
  RECREADORES.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'rec-card reveal' + (i >= VISIBLE_START ? ' hidden' : '');
    card.dataset.index = i;
    card.innerHTML = `
      <div class="rec-avatar" style="background:${getColor(i)}">${initials(r.nome)}</div>
      <div class="rec-apelido">${r.apelido}</div>
      <div class="rec-nome">${r.nome}</div>
      <div class="rec-esp">${r.esp}</div>
    `;
    card.addEventListener('click', () => openRecreadorModal(r, i));
    grid.appendChild(card);
  });
  observeNewCards();
}

$('#verMaisBtn').addEventListener('click', () => {
  expanded = !expanded;
  $$('.rec-card.hidden').forEach(c => c.classList.remove('hidden'));
  if (expanded) {
    $('#verMaisBtn').textContent = 'Ver menos ↑';
    observeNewCards();
  } else {
    $$('#recreGrid .rec-card').forEach((c, i) => {
      if (i >= VISIBLE_START) c.classList.add('hidden');
    });
    $('#verMaisBtn').textContent = 'Ver todos os recreadores ↓';
  }
});

function observeNewCards() {
  $$('.rec-card.reveal:not(.observed)').forEach(el => {
    el.classList.add('observed');
    revealObserver.observe(el);
  });
}

/* ---------- MODAL RECREADOR ---------- */
const modalOverlay = $('#modalOverlay');
const modalClose  = $('#modalClose');
const modalContent= $('#modalContent');

function openRecreadorModal(r, i) {
  modalContent.innerHTML = `
    <div class="modal-av" style="background:${getColor(i)}">${initials(r.nome)}</div>
    <div class="modal-apelido">${r.apelido}</div>
    <div class="modal-nome">${r.nome}</div>
    <div class="modal-esp">✨ ${r.esp}</div>
    <div class="modal-video">
      <div class="play-circle">
        <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <p>Vídeo em breve</p>
    </div>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- SERVIÇOS ---------- */
function buildServicos() {
  const grid = $('#servicosGrid');
  if (!grid) return;
  grid.innerHTML = ''; // limpa skeletons
  SERVICOS.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'serv-card reveal';
    el.style.transitionDelay = (i * 0.1) + 's';
    el.innerHTML = `
      <div class="serv-icon">${s.icon}</div>
      <div class="serv-title">${s.titulo}</div>
      <div class="serv-desc">${s.desc}</div>
    `;
    grid.appendChild(el);
    revealObserver.observe(el);
  });
}

/* ---------- BRINCADEIRAS ---------- */
function buildBrincadeiras() {
  const grid = $('#brincGrid');
  if (!grid) return;
  grid.innerHTML = ''; // limpa skeletons
  BRINCADEIRAS.forEach((b, i) => {
    const el = document.createElement('div');
    el.className = 'brinc-card reveal';
    el.style.transitionDelay = (i * 0.05) + 's';
    el.innerHTML = `
      <div class="brinc-icon">${b.icon}</div>
      <div class="brinc-info">
        <strong>${b.nome}</strong>
        <span>${b.cat}</span>
      </div>
    `;
    grid.appendChild(el);
    revealObserver.observe(el);
  });
}

/* ---------- GALERIA ---------- */
const galeriaItems = [
  { type:'foto', emoji:'🎂', label:'Festas de Aniversário', bg:'linear-gradient(135deg,#CC1F1F,#8a0000)' },
  { type:'video',emoji:'🎬', label:'Colônia de Férias',    bg:'linear-gradient(135deg,#F5C518,#d4a90f)' },
  { type:'foto', emoji:'🎪', label:'Eventos Especiais',    bg:'linear-gradient(135deg,#6b3d9a,#3d1f6b)' },
  { type:'foto', emoji:'🏠', label:'Dia de Brincadeiras',  bg:'linear-gradient(135deg,#178a4f,#0d5230)' },
  { type:'video',emoji:'💃', label:'Danças e Gincanas',    bg:'linear-gradient(135deg,#d4520a,#8a2f00)' },
  { type:'foto', emoji:'🎨', label:'Pintura Facial',       bg:'linear-gradient(135deg,#1a7abf,#0d4580)' },
  { type:'video',emoji:'🎭', label:'Teatro',               bg:'linear-gradient(135deg,#CC1F1F,#F5C518)' },
  { type:'foto', emoji:'⭐', label:'Momentos Especiais',   bg:'linear-gradient(135deg,#F5C518,#CC1F1F)' },
];

const playIcon = `<svg viewBox="0 0 24 24" fill="#fff" width="36" height="36"><path d="M8 5v14l11-7z"/></svg>`;

function buildGaleria(filter = 'all') {
  const grid = $('#galeriaGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = filter === 'all' ? galeriaItems : galeriaItems.filter(g => g.type === filter);
  items.forEach((g, i) => {
    const el = document.createElement('div');
    el.className = 'gal-item reveal';
    el.dataset.type = g.type;
    el.style.background = g.bg;
    el.style.transitionDelay = (i * 0.08) + 's';
    el.innerHTML = `
      <div class="gal-inner">
        <span style="font-size:${i===0?'4rem':'2.5rem'}">${g.emoji}</span>
        <div class="gal-overlay">
          ${g.type === 'video' ? playIcon : '<svg viewBox="0 0 24 24" fill="#fff" width="36" height="36"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>'}
          <span>${g.label}</span>
        </div>
      </div>
    `;
    grid.appendChild(el);
    revealObserver.observe(el);
  });
}

$$('.gtab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.gtab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    buildGaleria(tab.dataset.filter);
  });
});

/* ---------- DEPOIMENTOS ---------- */
function buildDepoimentos() {
  const grid = $('#depoGrid');
  if (!grid) return;
  grid.innerHTML = ''; // limpa skeletons
  DEPOIMENTOS.forEach((d, i) => {
    const el = document.createElement('div');
    el.className = 'depo-card reveal';
    el.style.transitionDelay = (i * 0.1) + 's';
    el.innerHTML = `
      <div class="depo-stars">★★★★★</div>
      <p class="depo-text">"${d.texto}"</p>
      <div class="depo-author">
        <div class="depo-av">${d.avatar}</div>
        <div>
          <div class="depo-name">${d.nome}</div>
          <div class="depo-evento">${d.evento}</div>
        </div>
      </div>
    `;
    grid.appendChild(el);
    revealObserver.observe(el);
  });
}

/* ---------- MICRO-INTERAÇÕES — RIPPLE EFFECT ---------- */
function addRipple(e) {
  const btn  = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    position:absolute;
    border-radius:50%;
    width:${size}px;height:${size}px;
    left:${e.clientX - rect.left - size / 2}px;
    top:${e.clientY - rect.top - size / 2}px;
    background:rgba(255,255,255,0.3);
    transform:scale(0);
    animation:ripple-effect 600ms ease-out forwards;
    pointer-events:none;
  `;
  btn.style.position = 'relative';
  btn.style.overflow  = 'hidden';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}
if (!prefersReducedMotion) {
  document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', addRipple));
}

/* ---------- MICRO-INTERAÇÕES — TILT 3D (desktop only) ---------- */
function addTiltEffect(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
      card.style.transition = 'transform 100ms ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = '';
    });
  });
}
if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
  // aplicado após build nas seções dinâmicas — veja initTilts()
}

function initTilts() {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;
  addTiltEffect('.rec-card');
  addTiltEffect('.serv-card');
  addTiltEffect('.depo-card');
}

/* ---------- SKELETON SCREENS ---------- */
function skeletonRecreador() {
  return `
    <div class="rec-card-skeleton">
      <div class="skeleton sk-avatar"></div>
      <div class="skeleton sk-line sk-w60"></div>
      <div class="skeleton sk-line sk-w80"></div>
      <div class="skeleton sk-line sk-w50"></div>
    </div>`;
}
function skeletonServico() {
  return `
    <div class="serv-card-skeleton">
      <div class="skeleton sk-icon"></div>
      <div class="skeleton sk-title"></div>
      <div class="skeleton sk-desc-line sk-w80"></div>
      <div class="skeleton sk-desc-line sk-w60"></div>
      <div class="skeleton sk-desc-line sk-w70"></div>
    </div>`;
}
function skeletonDepoimento() {
  return `
    <div class="depo-card-skeleton">
      <div class="skeleton sk-stars"></div>
      <div class="skeleton sk-text-line sk-w80"></div>
      <div class="skeleton sk-text-line sk-w80"></div>
      <div class="skeleton sk-text-line sk-w60"></div>
      <div class="depo-card-skeleton sk-author">
        <div class="skeleton sk-av"></div>
        <div style="flex:1">
          <div class="skeleton sk-line sk-w80" style="height:12px;margin-bottom:6px"></div>
          <div class="skeleton sk-line sk-w60" style="height:10px"></div>
        </div>
      </div>
    </div>`;
}

function showSkeletons() {
  const recreGrid = $('#recreGrid');
  const servicosGrid = $('#servicosGrid');
  const depoGrid  = $('#depoGrid');
  if (recreGrid)    recreGrid.innerHTML   = Array(10).fill(skeletonRecreador()).join('');
  if (servicosGrid) servicosGrid.innerHTML = Array(6).fill(skeletonServico()).join('');
  if (depoGrid)     depoGrid.innerHTML    = Array(3).fill(skeletonDepoimento()).join('');
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  showSkeletons();
  // Pequeno delay para garantir shimmer visível antes do conteúdo
  setTimeout(() => {
    buildRecreadores();
    buildServicos();
    buildBrincadeiras();
    buildGaleria();
    buildDepoimentos();
    initTilts(); // ativar tilt depois que cards existem no DOM
  }, 350);
});
