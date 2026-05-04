// Tailwind Script
function initTailwind() {
  const script = document.createElement('script');
  script.src = "https://cdn.tailwindcss.com";
  document.head.appendChild(script);
}

// Skills Data
const skills = [
  "HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Next.js", 
  "Tailwind CSS", "Node.js & Express", "PHP & Laravel", 
  "MySQL & MongoDB", "REST APIs", "Git & GitHub", 
  "Payment Integration", "UI/UX Design", "Performance Optimization"
];

// Projects Data
const projects = [
  {
    title: "Modern Company Dashboard",
    desc: "Complete responsive company website with powerful admin panel, real-time analytics, user management and dark mode.",
    icon: "🌐"
  },
  {
    title: "Corporate Business Website",
    desc: "Elegant multi-page corporate website with booking system, blog, and lead generation features.",
    icon: "🏢"
  },
  {
    title: "Premium Fashion E-commerce",
    desc: "Full-featured online store with cart, secure payment gateway, order tracking and wishlist.",
    icon: "🛍️"
  },
  {
    title: "Multi-Vendor Marketplace",
    desc: "Advanced e-commerce platform supporting multiple sellers, admin dashboard and secure transactions.",
    icon: "🏪"
  }
];

// Render Skills
function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = skills.map(skill => `
    <div class="bg-zinc-900 light:bg-slate-200 p-6 rounded-2xl card-hover text-center font-medium">
      ${skill}
    </div>
  `).join('');
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = projects.map(project => `
    <div class="bg-zinc-900 light:bg-slate-100 rounded-3xl overflow-hidden card-hover">
      <div class="h-64 bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-7xl">
        ${project.icon}
      </div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
        <p class="text-zinc-400 light:text-slate-600 leading-relaxed">${project.desc}</p>
      </div>
    </div>
  `).join('');
}

// Theme Toggle
function toggleTheme() {
  document.documentElement.classList.toggle('light');
  const icon = document.getElementById('theme-icon');
  if (document.documentElement.classList.contains('light')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

// Language Toggle
let isArabic = false;

function toggleLanguage() {
  isArabic = !isArabic;
  const langBtn = document.getElementById('lang-btn');
  const aboutText = document.getElementById('about-text');

  if (isArabic) {
    langBtn.textContent = "عربي / EN";
    document.documentElement.setAttribute('dir', 'rtl');
    aboutText.innerHTML = `
      <p>أنا ريفن، مطور Full-Stack شغوف مقيم في اليمن. لدي أكثر من 4 سنوات خبرة في بناء مواقع وتطبيقات ويب سريعة، آمنة وجذابة بصرياً.</p>
      <p>أحب تحويل المشاكل المعقدة إلى حلول بسيطة وجميلة. سواء كنت بحاجة إلى موقع احترافيconst skills = [
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
      <p>أنا فالن رافن، مطور Full-Stack شغوف مقيم في اليمن، لدي أكثر من 4 سنوات خبرة في صناعة تجارب رقمية استثنائية.</p>
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
};، متجر إلكتروني قوي، أو تطبيق ويب مخصص — أقدم جودة تفوق التوقعات.</p>
    `;
  } else {
    langBtn.textContent = "EN / عربي";
    document.documentElement.setAttribute('dir', 'ltr');
    aboutText.innerHTML = `
      <p>I am Fallen Raven, a passionate Full-Stack Developer based in Yemen. With more than 4 years of experience, I specialize in building fast, secure, and visually stunning websites and web applications.</p>
      <p>I love turning complex problems into simple, beautiful solutions. Whether it's a professional business website, a powerful e-commerce platform, or a custom web application — I deliver quality that exceeds expectations.</p>
    `;
  }
}

// Initialize everything
window.onload = function() {
  renderSkills();
  renderProjects();
  
  // Default theme icon
  document.getElementById('theme-icon').classList.add('fa-moon');
};
