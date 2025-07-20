// Typing Effect
const typingText = "AI Researcher | Deep Learning | Computer Vision";
let index = 0;
function type() {
    if (index < typingText.length) {
        document.getElementById("typing").textContent += typingText.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}
window.onload = type;

// Fade-in on scroll
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Skill bar animation
const skillBars = document.querySelectorAll(".fill");
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
        }
    });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));

// Dark mode toggle
document.getElementById("toggle-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Konami Code Easter Egg
let konamiCode = [];
const secret = [38,38,40,40,37,39,37,39,66,65];
window.addEventListener("keydown", (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.toString().indexOf(secret) >= 0) {
        alert("🎉 Konami code unlocked! Just like I unlock AI solutions.");
        konamiCode = [];
    }
});

// Particle Background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
for (let i = 0; i < 50; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1
    });
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();
