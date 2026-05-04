const skills = [
  "HTML5 • CSS3", "JavaScript ES6+", "React & Next.js", "Tailwind CSS",
  "Node.js • Express", "PHP • Laravel", "MySQL • MongoDB",
  "Payment Gateways", "RESTful APIs", "Git & GitHub", "UI/UX Design",
  "Performance Tuning"
];

const projects = [
  {
    title: "Modern Company Dashboard",
    desc: "Professional company website with advanced admin panel, analytics, and user management system.",
    icon: "🌐"
  },
  {
    title: "Corporate Business Site",
    desc: "Elegant multi-page website with booking system, blog, and lead generation features.",
    icon: "🏢"
  },
  {
    title: "Premium Fashion Store",
    desc: "Full e-commerce platform with cart, secure payments, order tracking and wishlist.",
    icon: "🛍️"
  },
  {
    title: "Multi-Vendor Marketplace",
    desc: "Advanced online shop supporting multiple sellers with complete admin dashboard.",
    icon: "🏪"
  }
];

// Render Functions
function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = skills.map(skill => `
    <div class="bg-zinc-900 light:bg-slate-200 p-8 rounded-3xl card-hover text-center font-medium border border-purple-900/30">
      ${skill}
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = projects.map(p => `
    <div class="bg-zinc-900 light:bg-slate-100 rounded-3xl overflow-hidden card-hover border border-purple-900/30">
      <div class="h-72 bg-gradient-to-br from-purple-700 to-violet-700 flex items-center justify-center text-8xl">
        ${p.icon}
      </div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
        <p class="text-zinc-400 light:text-slate-600">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

// Theme
function toggleTheme() {
  document.documentElement.classList.toggle('light');
  const icon = document.getElementById('theme-icon');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

// Language
let isArabic = false;
function toggleLanguage() {
  isArabic = !isArabic;
  const btn = document.getElementById('lang-btn');

  if (isArabic) {
    btn.textContent = "عربي / EN";
    document.documentElement.setAttribute('dir', 'rtl');
    
    document.getElementById('hero-subtitle').textContent = "مطور Full Stack من اليمن";
    document.getElementById('about-title').textContent = "من أنا";
    document.getElementById('about-text').innerHTML = `
      <p>أنا ريفن، مطور Full-Stack شغوف مقيم في اليمن، لدي أكثر من 4 سنوات خبرة في صناعة تجارب رقمية استثنائية.</p>
      <p>أتخصص في بناء مواقع وتطبيقات ويب سريعة، آمنة وجذابة بصرياً. هدفي دائماً تحويل رؤيتك إلى منتج قوي وأنيق وقابل للتوسع.</p>
    `;
    document.getElementById('skills-title').textContent = "المهارات والتقنيات";
    document.getElementById('projects-title').textContent = "مشاريع مختارة";
    document.getElementById('contact-title').textContent = "هل أنت جاهز لنصنع شيئاً أسطورياً؟";
  } else {
    btn.textContent = "EN / عربي";
    document.documentElement.setAttribute('dir', 'ltr');
    
    document.getElementById('hero-subtitle').textContent = "Full Stack Developer from Yemen";
    document.getElementById('about-title').textContent = "About Me";
    document.getElementById('about-text').innerHTML = `
      <p>I am Fallen Raven, a passionate Full-Stack Developer based in Yemen with more than 4 years of experience crafting exceptional digital experiences.</p>
      <p>I specialize in building fast, secure, and visually stunning websites and web applications. My goal is always the same: transform your vision into a powerful, elegant, and scalable product.</p>
    `;
    document.getElementById('skills-title').textContent = "Skills & Technologies";
    document.getElementById('projects-title').textContent = "Featured Projects";
    document.getElementById('contact-title').textContent = "Let's Create Something Legendary";
  }
}

// Init
window.onload = () => {
  renderSkills();
  renderProjects();
  document.getElementById('theme-icon').classList.add('fa-moon');
};
