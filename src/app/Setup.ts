import * as p5 from 'p5'
import { circles, circle } from './data'

const checkIfInside = (
  cursor, center
) => {
  return (cursor < center - circle.radius && cursor < center + circle.radius)
}

const Setup = (p: p5) => {
  const canvas = p.createCanvas(800, 400)
  p.background(0)

  canvas.mouseClicked(e => {
    const coords = {
      x: e.x,
      y: e.y
    }

    circles.push(coords)
  })
}

export default Setup
