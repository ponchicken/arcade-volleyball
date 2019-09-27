import * as p5 from 'p5'

const radius = 20
const diameter = radius * 2

const circles = []

console.log(p5)

const checkIfInside = (
  cursor, center
) => {
  console.log(cursor, center - radius, center + radius)
  return (cursor < center - radius && cursor < center + radius)
}

const Draw = (p: p5) => {
  p.background(0)

  if (p.mouseIsPressed) {
    console.log(p.mouseClicked)
    console.log(p)
  }
  // p.mouseClicked(e => {
  //   const index = circles.findIndex(circle => {
  //     console.log(checkIfInside(p.mouseX, circle.x) && checkIfInside(p.mouseY, circle.y))
  //     return checkIfInside(p.mouseX, circle.x) && checkIfInside(p.mouseY, circle.y)
  //   })

  //   const coords = {
  //     x: p.mouseX,
  //     y: p.mouseY
  //   }

  //   if (index === -1) {
  //     circles.push(coords)
  //   } else {
  //     circles[index] = coords
  //   }
  // })

  circles.forEach(circle => {
    if (p.mouseIsPressed) {
      p.fill(204, 102, 0)
    } else {
      p.fill(255)
    }

    p.circle(circle.x, circle.y, diameter)
  })
}

export default Draw
