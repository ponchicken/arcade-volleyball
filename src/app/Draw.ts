import p5 from 'p5'

const radius = 50
const diameter = radius * 2

const Draw = (p: p5) => {
  p.background(0)
  p.fill(255)

  p.circle(p.mouseX, p.mouseY, diameter)
}

export default Draw
