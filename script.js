// Skills
const skills = [
  "HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Next.js",
  "Tailwind CSS", "Node.js", "Express.js", "Laravel",
  "PHP", "MySQL", "MongoDB", "Git & GitHub"
];

// Projects
const projects = [
  { title: "Modern Company Dashboard", desc: "Responsive website with advanced admin panel and analytics.", color: "from-blue-500 to-cyan-500" },
  { title: "Corporate Business Website", desc: "Elegant multi-page site with booking and blog system.", color: "from-amber-500 to-orange-500" },
  { title: "Premium E-commerce Store", desc: "Full online shop with payment integration and cart.", color: "from-pink-500 to-rose-500" },
  { title: "Multi-Vendor Marketplace", desc: "Advanced platform with seller dashboard and payments.", color: "from-emerald-500 to-teal-500" }
];

// Render Skills & Projects
function renderSkills() {
  document.getElementById("skills-grid").innerHTML = skills.map(skill => `
    <div class="bg-white dark:bg-zinc-800 p-6 rounded-3xl card text-center font-medium border border-zinc-200 dark:border-zinc-700">
      ${skill}
    </div>
  `).join('');
}

function renderProjects() {
  document.getElementById("projects-grid").innerHTML = projects.map(p => `
    <div class="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden card border border-zinc-200 dark:border-zinc-700">
      <div class="h-64 bg-gradient-to-br ${p.color} flex items-center justify-center text-7xl text-white">
        🚀
      </div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
        <p class="text-zinc-600 dark:text-zinc-400">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

// Theme Toggle
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const icon = document.getElementById('theme-icon');
  if (document.documentElement.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

// Language Toggle
let isArabic = false;
function toggleLanguage() {
  isArabic = !isArabic;
  const btn = document.getElementById('lang-btn');

  if (isArabic) {
    btn.textContent = "عربي / EN";
    document.getElementById('hero-title').textContent = "مطور Full Stack";
    document.getElementById('hero-desc').textContent = "أبني تطبيقات ويب سريعة وجميلة وقابلة للتوسع تساعد الأعمال على النمو.";
    document.getElementById('about-title').textContent = "من أنا";
    document.getElementById('about-text').innerHTML = `<p>أنا ريفن، مطور Full-Stack من اليمن بخبرة تزيد عن 4 سنوات في بناء مواقع وتطبيقات ويب حديثة.</p><p>أساعد العملاء على تحويل أفكارهم إلى منتجات رقمية احترافية وعالية الأداء.</p>`;
    document.getElementById('skills-title').textContent = "المهارات والتقنيات";
    document.getElementById('projects-title').textContent = "مشاريع مختارة";
    document.getElementById('contact-title').textContent = "هيا نعمل معاً";
  } else {
    btn.textContent = "EN / عربي";
    document.getElementById('hero-title').textContent = "Full Stack Developer";
    document.getElementById('hero-desc').textContent = "I build fast, beautiful, and scalable web applications that help businesses grow.";
    document.getElementById('about-title').textContent = "About Me";
    document.getElementById('about-text').innerHTML = `<p>I am a passionate Full-Stack Developer from Yemen with 4+ years of experience building modern websites and web applications.</p><p>I help clients turn their ideas into professional, high-performance digital products.</p>`;
    document.getElementById('skills-title').textContent = "Skills & Technologies";
    document.getElementById('projects-title').textContent = "Featured Projects";
    document.getElementById('contact-title').textContent = "Let's Work Together";
  }
}

// Initialize
window.onload = () => {
  renderSkills();
  renderProjects();
  document.getElementById('theme-icon').classList.add('fa-moon');
};
