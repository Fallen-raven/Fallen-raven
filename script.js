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
const skills = ["HTML5 • CSS3", "JavaScript", "React & Next.js", "Tailwind", "Node.js", "Laravel", "MongoDB & MySQL", "Payment Systems", "APIs", "Git", "UI/UX", "Optimization"];

const projects = [
  {title:"Modern Company Dashboard", desc:"Advanced admin panel with real-time analytics and user management.", icon:"🌐"},
  {title:"Corporate Business Platform", desc:"Elegant website with booking system and content management.", icon:"🏛️"},
  {title:"Premium E-commerce Store", desc:"Full-featured fashion store with secure payments.", icon:"🛍️"},
  {title:"Multi-Vendor Marketplace", desc:"Advanced platform supporting many sellers.", icon:"🏪"}
];

// Render Functions
function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map(skill => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] p-8 rounded-3xl card-hover text-center font-medium border border-purple-800/40">${skill}</div>
  `).join('');
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <div class="bg-zinc-900 light:bg-[#f4ede4] rounded-3xl overflow-hidden card-hover border border-purple-800/40">
      <div class="h-64 bg-gradient-to-br from-purple-700 to-violet-800 flex items-center justify-center text-8xl">${p.icon}</div>
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
        <p class="text-zinc-400 light:text-[#4a4035]">${p.desc}</p>
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
  // ... (same logic as before, abbreviated for space)
  if (isArabic) {
    btn.textContent = "عربي / EN";
    document.documentElement.setAttribute('dir', 'rtl');
    // Add Arabic texts here
  } else {
    btn.textContent = "EN / عربي";
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

// Initialize
window.onload = () => {
  renderSkills();
  renderProjects();
  document.getElementById('theme-icon').classList.add('fa-moon');
  
  // Typing Effect
  setTimeout(() => {
    typeWriter(document.getElementById('typing'), "I weave code into legend");
  }, 800);
};
