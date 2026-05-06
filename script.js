const root = document.documentElement;
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', ()=>{
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
});

// Download CV button
document.getElementById("resume-btn").addEventListener("click", function() {
  window.location.href = "Quinton_Khuwiseb_CV.pdf", "_blank";
});

// WhatsApp Me button
document.getElementById("wa-me-btn").addEventListener("click", function() {
  const phoneNumber = "+264815649939";
  const message = "Hi Quinton! I saw your portfolio and wanted to connect.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
});

// Matrix-like background
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
window.addEventListener('resize', resize); resize();
const cols = ()=>Math.floor(canvas.width / 20);
let y = Array(cols()).fill(0);
function draw(){
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg');
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(0,255,209,0.5)';
  ctx.font = '16px monospace';
  for(let i=0;i<y.length;i++){
    const text = String.fromCharCode(0x30A0 + Math.random()*96);
    ctx.fillText(text, i*20, y[i]);
    if(y[i] > canvas.height + Math.random()*10000) y[i]=0;
    y[i]+=20;
  }
  requestAnimationFrame(draw);
}
draw();

// Mobile menu toggle - FIXED VERSION
const navItems = document.querySelector('.links');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// Opens nav menu on small screens
const openNav = () => {
  navItems.classList.add('active');
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

// Close nav menu on small screens
const closeNav = () => {
  navItems.classList.remove('active');
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

// Close menu when clicking on a link (improved UX)
const allNavLinks = document.querySelectorAll('.links a');
allNavLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Year in footer
const yearElement = document.getElementById('yr');
if (yearElement) {
  yearElement.textContent = `© ${new Date().getFullYear()} Quinton Khuwiseb`;
}