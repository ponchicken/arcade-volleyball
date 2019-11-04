import { SCENE } from '../data'
import { Scene } from '~types'

const PLAYER_SPEED = 10

export class Game extends Scene {
  private player: Phaser.GameObjects.Ellipse & any
  private ball: Phaser.GameObjects.Ellipse & any
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle

  private bodiesToBeMovedNextFrame: any

  constructor () {
    super({
      key: SCENE.game
    })

    this.bodiesToBeMovedNextFrame = []
  }

  public create () {
    this.matter.world.setBounds()

    this.player = this.add.ellipse(50, 250, 60, 60, 0x555599ff)
    this.matter.add.gameObject(this.player, {
      chamfer: { radius: 30 },
      density: 0.5,
      restitution: 0,
      frictionAir: 0,
      friction: 0,
      // frictionStatic: 0,,
      collisionFilter: {
        category: 0x006
      },
      inertia: Infinity
    })

    this.ball = this.add.ellipse(400, 100, 60, 60, 0x55ff5555)
    this.matter.add.gameObject(this.ball, {
      chamfer: { radius: 30 },
      density: 0.01,
      restitution: 1,
      frictionAir: 0.001,
      friction: 0,
      timeScale: 0.5,
      collisionFilter: {
        category: 0x002,
        mask: 0x001 | 0x004
      }
    })

    this.separator = this.add.rectangle(400, 300, 10, 200, 0xff0000, 0.5)
    this.ground = this.add.rectangle(400, 400, 800, 20, 0x004099, 0.5)
    this.matter.add.gameObject(this.ground, {
      isStatic: true,
      friction: 5,
      collisionFilter: {
        category: 0x004
      }
    })
    this.matter.add.gameObject(this.separator, {
      isStatic: true,
      collisionFilter: {
        category: 0x004
      }
    })

    this.matter.add.mouseSpring({})

    this.matter.world.on('collisionstart', event => {
      event.pairs.forEach(pair => {
        const { bodyA, bodyB } = pair

        if (bodyA.gameObject === this.player) {
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

  public update () {
    const cursors = this.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
      this.player.setPosition(this.player.x - PLAYER_SPEED, this.player.y)
    } else if (cursors.right.isDown) {
      this.player.setPosition(this.player.x + PLAYER_SPEED, this.player.y)
    } else if (this.player.body.velocity.x) {
      this.player.setVelocityX(0)
    }

    if (cursors.up.isDown) {
      this.player.setVelocityY(-PLAYER_SPEED / 2)
    } else if (this.player.body.velocity.y < -2) {
      this.player.setVelocityY(0)
    }

    if (cursors.down.isDown) {
      this.player.setVelocityY(PLAYER_SPEED)
    }
  }
}
