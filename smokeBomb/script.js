const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
let hue = 0;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle());
  }

  //   drawCircle();
});

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 4; i++) {
    particles.push(new Particle());
  }
  //   drawCircle();
});

// function drawCircle() {
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
//   ctx.fill();
// }
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = "hsl(" + hue + ",100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size >= 0.2) {
      this.size -= 0.1;
    }
  }
  draw() {
    // ctx.fillStyle = "white";
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// function init() {
//   for (let i = 0; i < 100; i++) {
//     particles.push(new Particle());
//   }
//   console.log(particles);
// }
// init();

function handleParticles() {
  particles.forEach((particle, i) => {
    particle.update();
    particle.draw();
    if (particle.size <= 0.3) {
      particles.splice(i, 1);
    }
  });
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   drawCircle();
  handleParticles();
  hue += 0.5;
  requestAnimationFrame(animate);
}

animate();

/****
 ***
 ************ Other Features
 ***
 ******/

class RedCircle {
  text() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();
  }
}

class RedStrokeCircle {
  text() {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.stroke();
  }
}

class Square {
  text() {
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 150, 50);
    // Also add this above text to the window event listener
  }
}
