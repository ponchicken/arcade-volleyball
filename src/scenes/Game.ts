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

    this.player1 = new Player(this, 25, 120, 0x559999f)
    this.player2 = new Player(this, 250, 120, 0x995599f)
    this.ball = new Ball(this)
    this.world = new World(this)

    console.log(this.player1)

    this.matter.world.on('collisionstart', event => {
      event.pairs.forEach(pair => {
        const { bodyA, bodyB } = pair

        if (
          bodyA.gameObject === this.player1.gameObject ||
          bodyA.gameObject === this.player2.gameObject
        ) {
          if (bodyB.gameObject === this.ball.gameObject) {
            this.ball.gameObject.setFillStyle(
              bodyA.gameObject === this.player1.gameObject
                ? 0x559999f
                : 0x995599f
            )
            // this.bodiesToBeMovedNextFrame.push({
            //   body: bodyB.gameObject,
            //   pair,
            //   cb: () => {}
            // })
          }
        }
      })
    })
  }

  public update () {}
}
