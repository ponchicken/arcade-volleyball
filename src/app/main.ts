import p5 from 'p5'

const appEl = document.getElementById('app')

const sketch = (p: p5) => {
  const radius = 50
  const diameter = radius * 2

  p.setup = function() {
    p.createCanvas(800, 400)
  }

  p.draw = function() {
    p.background(0)
    p.fill(255)

    p.circle(p.mouseX, p.mouseY, diameter)
  }
}

const scene = new p5(sketch, appEl)
