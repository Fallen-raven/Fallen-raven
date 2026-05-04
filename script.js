const skills = ["HTML5 • CSS3", "JavaScript ES6+", "React & Next.js", "Tailwind CSS", "Node.js • Express", "PHP • Laravel", "MySQL • MongoDB", "Payment Gateways", "REST APIs", "Git & GitHub", "UI/UX Design", "Performance Optimization"];

const projects = [
  { title: "Modern Company Dashboard", desc: "Responsive website with advanced admin panel, real-time analytics and user management.", icon: "🌐" },
  { title: "Corporate Business Website", desc: "Elegant multi-page site with booking system, blog and lead generation.", icon: "🏢" },
  { title: "Premium Fashion E-commerce", desc: "Full online store with cart, secure payments, order tracking and wishlist.", icon: "🛍️" },
  { title: "Multi-Vendor Marketplace", desc: "Advanced platform supporting multiple sellers with complete dashboard.", icon: "🏪" }
];

// Render
function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map(s => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] p-8 rounded-3xl card-hover text-center font-medium border border-purple-900/30">${s}</div>
  `).join('');
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] rounded-3xl overflow-hidden card-hover border border-purple-900/30">
      <div class="h-72 bg-gradient-to-br from-purple-700 via-violet-700 to-purple-800 flex items-center justify-center text-8xl">${p.icon}</div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
        <p class="text-zinc-400 light:text-[#4a3f35]">${p.desc}</p>
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
    document.getElementById('about-text').innerHTML = `<p>أنا ريفن، مطور Full-Stack شغوف من اليمن. أصنع تجارب رقمية قوية وجميلة وقابلة للتوسع.</p>`;
    document.getElementById('skills-title').textContent = "المهارات والتقنيات";
    document.getElementById('projects-title').textContent = "مشاريع مختارة";
    document.getElementById('contact-title').textContent = "هيا نصنع شيئاً أسطورياً";
  } else {
    btn.textContent = "EN / عربي";
    document.documentElement.setAttribute('dir', 'ltr');
    document.getElementById('hero-subtitle').textContent = "Full Stack Developer • Yemen";
    document.getElementById('about-title').textContent = "About Me";
    document.getElementById('about-text').innerHTML = `<p>I am Fallen Raven — a passionate Full-Stack Developer from Yemen. I craft powerful, beautiful, and scalable digital experiences.</p>`;
    document.getElementById('skills-title').textContent = "Skills & Technologies";
    document.getElementById('projects-title').textContent = "Featured Projects";
    document.getElementById('contact-title').textContent = "Let's Create Something Legendary";
  }
}

// Init with subtle background movement
window.onload = () => {
  renderSkills();
  renderProjects();
  document.getElementById('theme-icon').classList.add('fa-moon');

  // Subtle hero background movement
  const heroBg = document.getElementById('hero-bg');
  heroBg.style.backgroundImage = "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2070')";
};
