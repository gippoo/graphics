var particles = [];
var shades = [];
let particleLength = 100;

class particle {
  constructor(x, y, light) {
    this.x = x;
    this.y = y;
    this.light = light;
  }
  
  show() {
    noStroke();
    fill(this.light);
    circle(this.x, this.y, 5);
  }
}

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < particleLength; i++) {
    particles.push(new particle(250,200,255));;
  }
  
  for (let i = 0; i < particleLength + 1; i++) {
    shades.push(i*255/(particleLength + 1));
  }
}



function move(particles) {
  particles.push(new particle(particles[particleLength-1].x, particles[particleLength-1].y, particles[particleLength-1].light));
  particles[particleLength].x = 50*(cos(3.14*frameCount*2/180))**3+200;
  particles[particleLength].y = 50*(sin(3.14*frameCount*2/180))**3+200;
  for (let i = 0; i < particleLength; i++) {
    particles[i].light = shades[i];
  }
  if (particles.length > particleLength) {
    particles.shift();
  }
  if (frameCount > 720) {
    frameCount = 0;
  }
}


function draw() {
  background(0);
  for (let i of particles) {
    i.show();
  }
  move(particles);
}
