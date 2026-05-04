// Typing Animation
function typeWriter(element, text, speed = 80) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Data
const skills = [
  "HTML5 • CSS3", "JavaScript (ES6+)", "React & Next.js", "Tailwind CSS",
  "Node.js & Express", "PHP & Laravel", "MySQL & MongoDB", "Payment Gateways",
  "RESTful APIs", "Git & GitHub", "UI/UX Design", "Performance Optimization"
];

const projects = [
  {
    title: "Modern Company Dashboard",
    desc: "Responsive website with powerful admin panel, real-time analytics, and user management system.",
    icon: "🌐"
  },
  {
    title: "Corporate Business Website",
    desc: "Elegant multi-page website with booking system, blog, and lead generation features.",
    icon: "🏢"
  },
  {
    title: "Premium Fashion E-commerce",
    desc: "Full-featured online store with cart system, secure payments, and order tracking.",
    icon: "🛍️"
  },
  {
    title: "Multi-Vendor Marketplace",
    desc: "Advanced e-commerce platform supporting multiple sellers with complete admin dashboard.",
    icon: "🏪"
  }
];

// Render Functions
function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map(skill => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] p-8 rounded-3xl card-hover text-center font-medium border border-purple-800/30">
      ${skill}
    </div>
  `).join('');
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] rounded-3xl overflow-hidden card-hover border border-purple-800/30">
      <div class="h-64 bg-gradient-to-br from-purple-700 to-violet-800 flex items-center justify-center text-8xl">${p.icon}</div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
        <p class="text-zinc-400 light:text-[#4a4035]">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

// Theme Toggle
function toggleTheme() {
  document.documentElement.classList.toggle('light');
  const icon = document.getElementById('theme-icon');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

// Language Toggle
let isArabic = false;
function toggleLanguage() {
  isArabic = !isArabic;
  const btn = document.getElementById('lang-btn');

  if (isArabic) {
    btn.textContent = "عربي / EN";
    document.documentElement.setAttribute('dir', 'rtl');
    
    document.getElementById('hero-subtitle').textContent = "مطور Full Stack • اليمن";
    document.getElementById('about-title').textContent = "من أنا";
    document.getElementById('about-text').innerHTML = `
      <p>أنا ريفن، مطور Full-Stack شغوف من اليمن. أحول الأفكار إلى مواقع وتطبيقات ويب احترافية، سريعة وآمنة.</p>
      <p>أساعد الشركات والأفراد على بناء حضور رقمي قوي ومميز باستخدام أحدث التقنيات.</p>
    `;
    document.getElementById('skills-title').textContent = "المهارات والتقنيات";
    document.getElementById('projects-title').textContent = "مشاريع مختارة";
    document.getElementById('contact-title').textContent = "هل نبدأ مشروعك؟";
  } else {
    btn.textContent = "EN / عربي";
    document.documentElement.setAttribute('dir', 'ltr');
    
    document.getElementById('hero-subtitle').textContent = "Full Stack Developer • Yemen";
    document.getElementById('about-title').textContent = "About Me";
    document.getElementById('about-text').innerHTML = `
      <p>I am Fallen Raven (ريفن), a passionate Full-Stack Developer from Yemen. I transform ideas into professional, fast, and secure websites and web applications.</p>
      <p>I help businesses and individuals build a strong digital presence using modern technologies.</p>
    `;
    document.getElementById('skills-title').textContent = "Skills & Technologies";
    document.getElementById('projects-title').textContent = "Featured Projects";
    document.getElementById('contact-title').textContent = "Let's Build Something Great";
  }
}

// Initialize
window.onload = () => {
  renderSkills();
  renderProjects();
  document.getElementById('theme-icon').classList.add('fa-moon');
  
  // Typing Animation
  setTimeout(() => {
    typeWriter(document.getElementById('typing-hero'), "Fallen Raven");
  }, 500);
};
