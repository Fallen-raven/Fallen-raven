// Typing Animation
function typeWriter(element, text, speed = 70) {
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
  "HTML5 • CSS3", "JavaScript ES6+", "React & Next.js", "Tailwind CSS",
  "Node.js • Express", "PHP • Laravel", "MySQL & MongoDB", "Payment Gateways",
  "REST APIs", "Git & GitHub", "UI/UX Design", "Performance Optimization"
];

const projects = [
  {
    title: "Modern Company Dashboard",
    desc: "Powerful admin panel with real-time analytics, user management and dark mode.",
    icon: "🌐"
  },
  {
    title: "Corporate Business Website",
    desc: "Elegant multi-page website with booking system and content management.",
    icon: "🏛️"
  },
  {
    title: "Premium E-commerce Store",
    desc: "Full-featured online fashion store with secure payment integration.",
    icon: "🛍️"
  },
  {
    title: "Multi-Vendor Marketplace",
    desc: "Advanced platform supporting multiple sellers with complete dashboard.",
    icon: "🏪"
  }
];

// Render Skills
function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = skills.map(skill => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] p-8 rounded-3xl card-hover text-center font-medium border border-purple-800/30">
      ${skill}
    </div>
  `).join('');
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = projects.map(p => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] rounded-3xl overflow-hidden card-hover border border-purple-800/30">
      <div class="h-64 bg-gradient-to-br from-purple-700 to-violet-800 flex items-center justify-center text-8xl">${p.icon}</div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
        <p class="text-zinc-400 light:text-[#5c4635]">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

// Theme Toggle
function toggleTheme() {
  document.documentElement.classList.toggle('light');
  const icon = document.getElementById('theme-icon');
  if (icon.classList.contains('fa-moon')) {
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
    document.documentElement.setAttribute('dir', 'rtl');
    
    document.getElementById('typing-hero').style.direction = 'rtl';
    document.getElementById('hero-subtitle').textContent = "مطور Full Stack • اليمن";
    document.getElementById('about-title').textContent = "قصة الريفن";
    document.getElementById('about-text').innerHTML = `
      <p>أنا ريفن، مطور Full-Stack شغوف من اليمن. أحول الأفكار إلى تجارب رقمية قوية، أنيقة وقابلة للتوسع.</p>
      <p>أتقن بناء المواقع والتطبيقات الحديثة باستخدام أفضل التقنيات لأساعد الشركات والأفراد على التميز في العالم الرقمي.</p>
    `;
    document.getElementById('skills-title').textContent = "القوى التي أمتلكها";
    document.getElementById('projects-title').textContent = "إبداعاتي الأسطورية";
    document.getElementById('contact-title').textContent = "هل نصنع أسطورة معاً؟";
  } else {
    btn.textContent = "EN / عربي";
    document.documentElement.setAttribute('dir', 'ltr');
    
    document.getElementById('typing-hero').style.direction = 'ltr';
    document.getElementById('hero-subtitle').textContent = "Full Stack Developer • Yemen";
    document.getElementById('about-title').textContent = "The Raven's Tale";
    document.getElementById('about-text').innerHTML = `
      <p>I am Fallen Raven (ريفن), a passionate Full-Stack Developer from Yemen. I transform ideas into powerful, elegant, and scalable digital experiences.</p>
      <p>I specialize in building modern websites and applications using the best technologies to help businesses and individuals stand out in the digital world.</p>
    `;
    document.getElementById('skills-title').textContent = "Powers I Command";
    document.getElementById('projects-title').textContent = "Legendary Creations";
    document.getElementById('contact-title').textContent = "Shall We Forge Legend Together?";
  }
}

// Initialize
window.onload = () => {
  renderSkills();
  renderProjects();
  document.getElementById('theme-icon').classList.add('fa-moon');
  
  // Start Typing Animation
  setTimeout(() => {
    typeWriter(document.getElementById('typing-hero'), "I am Fallen Raven");
  }, 600);
};
