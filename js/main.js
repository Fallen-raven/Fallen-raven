// main.js - handles animations, theme, language, GitHub widget, and small UX
const SELECTORS = {
  langBtn: '#lang-btn',
  themeBtn: '#theme-btn',
  skillsGrid: '#skills-grid',
  projectsGrid: '#projects-grid',
  sampleCode: '#sample-code',
  copyCode: '#copy-code',
  refreshRepos: '#refresh-repos',
  liveResult: '#live-result',
  year: '#year'
};

const STORE = {
  LANG: 'frv_lang_v2',
  THEME: 'frv_theme_v2',
  GH_CACHE: 'frv_gh_v2'
};

// --- translations ---
const T = {
  en: {
    langBtn: 'EN / عربي',
    heroHi: "Hi — I'm",
    heroTitle: 'FALLEN RAVEN',
    heroSub: 'Full-stack developer — I build fast, resilient and delightful web apps.',
    btnProjects: 'See case studies',
    btnHire: 'Hire me',
    btnResume: 'Download resume',
    expLabel: 'Years',
    projLabel: 'Projects',
    stackLabel: 'Frontend → Backend',
    skillsTitle: 'Skills & Technologies',
    skillsSub: 'From UI to backend, infra & CI/CD',
    projectsTitle: 'Featured Case Studies',
    viewGithub: 'View all on GitHub →',
    githubTitle: 'Top GitHub repositories',
    archTitle: 'Architecture example',
    codeTitle: 'Code sample & playground',
    contactTitle: "Let's build something",
    contactDesc: 'Fast responses. Remote work welcome.'
  },
  ar: {
    langBtn: 'عربي / EN',
    heroHi: 'مرحبًا — أنا',
    heroTitle: 'ريفن',
    heroSub: 'مطور Full Stack — أبني تطبيقات ويب سريعة ومحمية وجذابة.',
    btnProjects: 'عرض دراسات الحالة',
    btnHire: 'توظيفي',
    btnResume: 'تحميل السيرة الذاتية',
    expLabel: 'سنوات',
    projLabel: 'مشاريع',
    stackLabel: 'الواجهة → الخادم',
    skillsTitle: 'المهارات والتقنيات',
    skillsSub: 'من واجهة المستخدم إلى الخادم والبنية التحتية وCI/CD',
    projectsTitle: 'مشاريع مختارة',
    viewGithub: 'عرض الكل على GitHub →',
    githubTitle: 'أفضل مستودعات GitHub',
    archTitle: 'مثال على البنية',
    codeTitle: 'عينة كود وتجربة',
    contactTitle: 'لننشئ شيئًا معًا',
    contactDesc: 'سأرد بسرعة. العمل عن بعد متاح.'
  }
};

// --- initial state and helpers ---
let lang = localStorage.getItem(STORE.LANG) || 'en';
let theme = localStorage.getItem(STORE.THEME) || 'raven';

function $(s){ return document.querySelector(s) }
function $all(s){ return Array.from(document.querySelectorAll(s)) }

// apply translations
function applyLang(l){
  lang = l;
  localStorage.setItem(STORE.LANG, l);
  const dict = T[l] || T.en;
  $('#lang-btn').textContent = dict.langBtn;
  $('#hero-hi').textContent = dict.heroHi;
  $('#hero-title').textContent = dict.heroTitle;
  $('#hero-sub').textContent = dict.heroSub;
  $('#btn-projects').textContent = dict.btnProjects;
  $('#btn-hire').textContent = dict.btnHire;
  $('#btn-resume').textContent = dict.btnResume;
  $('#exp-label').textContent = dict.expLabel;
  $('#proj-label').textContent = dict.projLabel;
  $('#stack-label').textContent = dict.stackLabel;
  $('#skills-title').textContent = dict.skillsTitle;
  $('#skills-sub').textContent = dict.skillsSub;
  $('#projects-title').textContent = dict.projectsTitle;
  $('#view-github').textContent = dict.viewGithub;
  $('#arch-title').textContent = dict.archTitle;
  $('#code-title').textContent = dict.codeTitle;
  $('#contact-title').textContent = dict.contactTitle;
  $('#contact-desc').textContent = dict.contactDesc;

  document.documentElement.lang = (l === 'ar') ? 'ar' : 'en';
  document.documentElement.dir = (l === 'ar') ? 'rtl' : 'ltr';
}

// apply theme
function applyTheme(t){
  theme = t;
  localStorage.setItem(STORE.THEME, t);
  if(t === 'golden'){
    document.body.classList.add('golden-theme');
    document.body.classList.remove('raven-theme');
    $('#theme-btn').textContent = '🪶 Raven';
  } else {
    document.body.classList.add('raven-theme');
    document.body.classList.remove('golden-theme');
    $('#theme-btn').textContent = '🌟 Golden';
  }
}

// --- animate hero typewriter for subtitle ---
function typewriter(el, text, delay=30){
  el.textContent = '';
  let i=0;
  function step(){
    if(i<=text.length){ el.textContent = text.slice(0,i); i++; requestAnimationFrame(step) }
  }
  setTimeout(step, delay);
}

// --- simple particle background (lightweight) ---
function initParticles(){
  const canvas = $('#bg-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  const particles = [];
  const count = Math.max(40, Math.min(120, Math.floor((W*H)/150000)));

  function rand(min,max){ return Math.random()*(max-min)+min }
  for(let i=0;i<count;i++){
    particles.push({
      x: Math.random()*W,
      y: Math.random()*H,
      r: rand(0.6,2.6),
      vx: rand(-0.2,0.4),
      vy: rand(-0.1,0.4),
      hue: 250 + Math.random()*30
    });
  }

  function resize(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight }
  addEventListener('resize', resize);

  function tick(){
    ctx.clearRect(0,0,W,H);
    for(const p of particles){
      p.x += p.vx;
      p.y += p.vy;
      if(p.x > W+20) p.x = -20;
      if(p.x < -20) p.x = W+20;
      if(p.y > H+20) p.y = -20;
      if(p.y < -20) p.y = H+20;

      ctx.beginPath();
      if(theme === 'golden'){
        ctx.fillStyle = `rgba(210,150,50,0.07)`;
      } else {
        ctx.fillStyle = `rgba(124,58,237,0.07)`;
      }
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
}

// --- load projects (from JSON) ---
async function loadProjects(){
  try {
    const res = await fetch('data/projects.json');
    const projects = await res.json();
    const grid = $('#projects-grid');
    grid.innerHTML = '';
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card card';
      card.innerHTML = `
        <div class="project-thumb">${p.icon || '📦'}</div>
        <div class="project-body">
          <div class="project-title">${p.title}</div>
          <div class="muted small">${p.desc}</div>
          <div class="project-tags">${p.tech.map(t => `<span class="skill">${t}</span>`).join('')}</div>
          <div style="margin-top:10px">
            ${p.demo ? `<a class="btn small" href="${p.demo}" target="_blank">Live</a>` : ''}
            ${p.repo ? `<a class="btn small ghost" href="${p.repo}" target="_blank">Repo</a>` : ''}
          </div>
        </div>
      `;
      // tilt on mouse move
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const mx = (e.clientX - rect.left - rect.width/2) / rect.width;
        const my = (e.clientY - rect.top - rect.height/2) / rect.height;
        card.style.transform = `perspective(800px) rotateY(${mx*6}deg) rotateX(${ -my*6 }deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => card.style.transform = '');
      grid.appendChild(card);
    });
  } catch (e) {
    console.error('projects load failed', e);
  }
}

// --- skills render ---
function renderSkills(){
  const skills = ["HTML5","CSS3","JavaScript (ES6+)","TypeScript","React","Next.js","Node.js","Express","Laravel","Postgres","MongoDB","Docker","CI/CD","Testing","GraphQL"];
  const grid = $('#skills-grid');
  grid.innerHTML = '';
  skills.forEach(s => {
    const el = document.createElement('span');
    el.className = 'skill';
    el.textContent = s;
    grid.appendChild(el);
  });
}

// --- GitHub widget: cached fetch ---
async function fetchWithCache(key, url, ttl=15*60*1000){
  try {
    const cached = localStorage.getItem(key);
    if(cached){
      const obj = JSON.parse(cached);
      if(Date.now()-obj.t < ttl) return obj.v;
    }
  } catch(e){}
  const res = await fetch(url);
  if(!res.ok) throw new Error('Fetch failed');
  const data = await res.json();
  try { localStorage.setItem(key, JSON.stringify({t:Date.now(),v:data})); } catch(e){}
  return data;
}

async function loadGithubRepos(username='Fallen-raven'){
  const container = $('#live-result');
  container.textContent = 'Loading…';
  try {
    const repos = await fetchWithCache(STORE.GH_CACHE, `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`);
    const top = repos.sort((a,b)=>b.stargazers_count - a.stargazers_count).slice(0,6);
    container.innerHTML = top.map(r => `<div class="repo-row"><a href="${r.html_url}" target="_blank">${r.name}</a> — <span class="muted">${r.description||''}</span></div>`).join('');
  } catch(e){
    container.textContent = 'Unable to load repos (rate limit or network).';
  }
}

// --- small UI: copy code ---
$('#copy-code').addEventListener('click', async () => {
  const code = $('#sample-code').textContent;
  try {
    await navigator.clipboard.writeText(code);
    $('#copy-code').textContent = (lang==='ar') ? 'تم النسخ' : 'Copied!';
    setTimeout(()=> $('#copy-code').textContent = (lang==='ar') ? 'نسخ' :'Copy', 1200);
  } catch(e){
    alert((lang==='ar') ? 'فشل النسخ — انسخ يدوياً.' : 'Copy failed — select & copy manually.');
  }
});

// --- cache controls ---
$('#refresh-repos').addEventListener('click', () => {
  localStorage.removeItem(STORE.GH_CACHE);
  loadGithubRepos();
});
$('#clear-cache').addEventListener('click', () => {
  localStorage.removeItem(STORE.GH_CACHE);
  alert((lang==='ar') ? 'تم مسح ذاكرة التخزين المؤقت' : 'Cache cleared');
});

// --- small scroll reveal (intersection observer) ---
function initScrollReveal(){
  const els = document.querySelectorAll('.panel, .project-card, .code-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('reveal'); io.unobserve(e.target) }
    });
  }, {threshold:0.12});
  els.forEach(el => io.observe(el));
}

// --- startup ---
(async function init(){
  // apply saved language and theme
  applyLang(lang);
  applyTheme(theme);

  // animate hero subtitle with typewriter
  typewriter($('#hero-sub'), T[lang].heroSub, 12);

  // render simple UI pieces
  renderSkills();
  await loadProjects();
  loadGithubRepos();
  initParticles();
  initScrollReveal();

  // wire language & theme buttons
  $('#lang-btn').addEventListener('click', ()=> applyLang(lang === 'en' ? 'ar' : 'en'));
  $('#theme-btn').addEventListener('click', ()=> applyTheme(theme === 'raven' ? 'golden' : 'raven'));

  // year in footer
  $('#year').textContent = new Date().getFullYear();

  // keyboard shortcut: Alt/Meta + M to jump main
  window.addEventListener('keydown', e => {
    if((e.altKey || e.metaKey) && e.key.toLowerCase() === 'm') {
      $('#main').scrollIntoView({behavior:'smooth'});
    }
  });
})();
