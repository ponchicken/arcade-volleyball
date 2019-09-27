import * as p5 from 'p5'

import { circles, circle } from './data'

const Draw = (p: p5) => {
  p.background(0, 10)
  p.fill(255)
  p.noStroke()

  circles.forEach(item => {
    if (p.mouseIsPressed) {
      p.fill(204, 102, 0)
    }

    p.circle(item.x, item.y, circle.diameter)
  })

  p.circle(p.mouseX, p.mouseY, circle.diameter)
}

export default Draw
