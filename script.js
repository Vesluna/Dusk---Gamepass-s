document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  const bgMusic = document.getElementById("bg-music");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3;
      this.speedY = Math.random() * 0.5;
    }

    update() {
      this.y -= this.speedY;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = "rgba(200,200,200,0.3)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    for (let i = 0; i < 70; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();

  // Resize canvas on window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    initParticles();
  });

  // Attempt to autoplay background music
  bgMusic.volume = 0.3;
  bgMusic.play().catch(e => console.log("Autoplay prevented. User interaction might be needed.", e));
});
