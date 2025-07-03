// Portfolio projects
const projects = [
  {
    title: "Online Code Editor",
    desc: "A live HTML/CSS/JS playground in your browser.",
    link: "site.html",
    img: "https://picsum.photos/300/200?random=1",
    type: "web"
  },
  {
    title: "Drawing Canvas App",
    desc: "Draw, save, and share your sketches.",
    link: "canvas.html",
    img: "https://picsum.photos/300/200?random=2",
    type: "app"
  },
  {
    title: "Expense Tracker",
    desc: "Track your expenses with a modern UI.",
    link: "expense-tracker.html",
    img: "https://picsum.photos/300/200?random=3",
    type: "app"
  },
  {
    title: "Snake Game",
    desc: "Classic snake game in JavaScript.",
    link: "snake-game.html",
    img: "https://picsum.photos/300/200?random=4",
    type: "game"
  }
];

function renderProjects(type = "all") {
  // Do NOT overwrite the HTML if you want to keep your own static project cards
  // Just filter visibility instead (optional), or do nothing at all
  // Example: If you want to keep your own HTML, comment out or remove the code below

  /*
  const projectsDiv = document.getElementById('projects');
  if (!projectsDiv) return;
  projectsDiv.innerHTML = "";
  projects.filter(p => type === "all" || p.type === type).forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<img src="${p.img}" alt="${p.title}" class="project-img">
      <h3>${p.title}</h3><p>${p.desc}</p>
      ${p.link && p.link !== "#" ? `<a href="${p.link}" target="_blank">View Project</a>` : ""}`;
    projectsDiv.appendChild(card);
  });
  */
}
// Optionally, you can remove or comment out the call to renderProjects() as well
// window.filterProjects = renderProjects;
// renderProjects();

// Testimonials
const testimonials = [
  { name: "Alice", text: "Amazing to work with!", img: "assets/avatar.png" },
  { name: "Bob", text: "Delivered on time and exceeded expectations.", img: "assets/avatar.png" }
];
const testimonialsDiv = document.getElementById('testimonialsList');
if (testimonialsDiv) {
  testimonials.forEach(t => {
    const div = document.createElement('div');
    div.className = 'testimonial-card';
    div.innerHTML = `<img src="${t.img}" alt="${t.name}" class="testimonial-img">
      <p>"${t.text}"</p><span>- ${t.name}</span>`;
    testimonialsDiv.appendChild(div);
  });
}

// Gallery
const galleryImgs = [
  "assets/project1.png", "assets/project2.png", "assets/project3.png", "assets/project4.png"
];
const galleryDiv = document.getElementById('galleryList');
if (galleryDiv) {
  galleryImgs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = "gallery-img";
    galleryDiv.appendChild(img);
  });
}

// Newsletter
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('newsletterMsg').textContent = "Subscribed! Thank you.";
    newsletterForm.reset();
  };
}

// Contact form (demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('contactMsg').textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
  };
}

// Dark/Light mode
const toggleMode = document.getElementById('toggleMode');
if (toggleMode) {
  toggleMode.onclick = function() {
    document.body.classList.toggle('dark');
    toggleMode.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
  };
}

// Sanitize text to prevent XSS
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// When rendering a comment
li.innerHTML = `<div>${escapeHTML(c.text ? c.text : '[No text]')}</div>`;

// When rendering a contact message
li.innerHTML = `
  <div><b>Email:</b> ${escapeHTML(m.email)}</div>
  <div><b>Message:</b> ${escapeHTML(m.msg)}</div>
  <div><b>Date:</b> ${escapeHTML(m.date)}</div>
  ...
`;

// When rendering usernames
li.innerHTML = `<div><b>Username:</b> ${escapeHTML(u.u)}</div>`;