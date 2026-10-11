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
//scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".services-marquee");
    const track = document.querySelector(".services-track");
    const originalGroup = document.querySelector(".services-group");

    if (!marquee || !track || !originalGroup) return;

    let position = 0;
    let lastTime = null;
    let paused = false;

    const speed = 50; // Pixels per second

    function setupMarquee() {
        // Remove previous clones
        track.querySelectorAll(".services-group:not(:first-child)")
            .forEach(group => group.remove());

        // Measure original group
        const groupWidth = originalGroup.getBoundingClientRect().width;
        const containerWidth = marquee.getBoundingClientRect().width;

        if (!groupWidth) return;

        // Create enough copies to cover the entire visible area
        // plus one extra group for seamless scrolling
        const copiesNeeded = Math.ceil(containerWidth / groupWidth) + 2;

        for (let i = 0; i < copiesNeeded; i++) {
            const clone = originalGroup.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            track.appendChild(clone);
        }

        // Keep position within one group
        position = position % groupWidth;
        track.style.transform = `translate3d(${position}px, 0, 0)`;
    }

    marquee.addEventListener("mouseenter", () => {
        paused = true;
    });

    marquee.addEventListener("mouseleave", () => {
        paused = false;
    });

    function animate(timestamp) {
        if (lastTime === null) lastTime = timestamp;

        const deltaTime = Math.min((timestamp - lastTime) / 1000, 0.05);
        lastTime = timestamp;

        if (!paused) {
            const groupWidth = originalGroup.getBoundingClientRect().width;

            if (groupWidth > 0) {
                position -= speed * deltaTime;

                // Reset exactly when one group has passed
                if (position <= -groupWidth) {
                    position += groupWidth;
                }

                track.style.transform =
                    `translate3d(${position}px, 0, 0)`;
            }
        }

        requestAnimationFrame(animate);
    }

    setupMarquee();
    window.addEventListener("resize", setupMarquee);
    requestAnimationFrame(animate);
});


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