import { SCENE } from '../data'

const PLAYER_SPEED = 8

export class Game extends Phaser.Scene {
  private player: Phaser.GameObjects.Ellipse & any
  private ball: Phaser.GameObjects.Ellipse & any
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle

  constructor () {
    super({
      key: SCENE.game
    })
  }

  public create () {
    this.matter.world.setBounds()

    this.player = this.add.rectangle(50, 50, 60, 60, 0x555599ff)
    this.matter.add.gameObject(this.player, {
      // chamfer: { radius: 30 },
      density: 0.05,
      frictionAir: 0,
      friction: 5
      // timeScale: 3
    })

    this.ball = this.add.ellipse(400, 100, 60, 60, 0x55ff5555)
    this.matter.add.gameObject(this.ball, {
      chamfer: { radius: 30 },
      restitution: 1,
      frictionAir: 0.01,
      friction: 0,
      timeScale: 0.5
    })

    this.separator = this.add.rectangle(400, 300, 10, 200, 0xff0000, 0.5)
    this.ground = this.add.rectangle(400, 400, 800, 20, 0x004099, 0.5)
    this.matter.add.gameObject(this.ground, { isStatic: true, friction: 5 })
    this.matter.add.gameObject(this.separator, { isStatic: true })

    this.matter.add.mouseSpring({})
    console.log(this.ball.body)
  }

  public update () {
    const cursors = this.input.keyboard.createCursorKeys()

    // if (this.ball.body.speed > 10) {
    //   this.ball.body.set()
    // }

    if (cursors.left.isDown) {
      this.player.setVelocityX(-PLAYER_SPEED)
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(PLAYER_SPEED)
    } else {
      // const velocityX = this.player.velocity.x
    }

    if (cursors.up.isDown) {
    // if (cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-PLAYER_SPEED - 10)
    }

    if (cursors.down.isDown) {
      this.player.setVelocityY(PLAYER_SPEED)
    }
  }
}
