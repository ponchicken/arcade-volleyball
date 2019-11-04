import { SCENE } from '../data'
import { Scene } from '~types'
import { Player, Ball, World } from '~objects'

export class Game extends Scene {
  private player1: Phaser.GameObjects.Ellipse & any
  private player2: Phaser.GameObjects.Ellipse & any
  private ball: Phaser.GameObjects.Ellipse & any
  private world: any

  private bodiesToBeMovedNextFrame: any

  constructor () {
    super({
      key: SCENE.game
    })

    this.bodiesToBeMovedNextFrame = []
  }

  public create () {
    this.matter.world.setBounds()

    this.player1 = new Player(this, 50, 250)
    this.player2 = new Player(this, 650, 250)
    this.ball = new Ball(this)
    this.world = new World(this)

    this.matter.add.mouseSpring({})

    this.matter.world.on('collisionstart', event => {
      event.pairs.forEach(pair => {
        const { bodyA, bodyB } = pair

        if (bodyA.gameObject === this.player1) {
          if (bodyB.gameObject === this.ball) {
            this.bodiesToBeMovedNextFrame.push({
              body: bodyB.gameObject,
              pair,
              cb: () => {}
            })
          }
        }
      })
    })
  }

  public update () {}
}
