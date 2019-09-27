import p5 from 'p5'

import Setup from './Setup'
import Draw from './Draw'

const appEl = document.getElementById('app')

const sketch = (p: p5) => {
  p.setup = () => {
    Setup(p)
  }

  p.draw = () => {
    Draw(p)
  }
}

const scene = new p5(sketch, appEl)
