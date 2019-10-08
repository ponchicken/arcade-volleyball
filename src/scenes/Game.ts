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

    this.player = this.add.ellipse(50, 50, 60, 60, 0x555599ff)
    this.matter.add.gameObject(this.player, {
      chamfer: { radius: 30 },
      restitution: 0,
      density: 0.03,
      frictionAir: 0,
      friction: 0,
      frictionStatic: 0
      // timeScale: 3
    })

    this.ball = this.add.ellipse(400, 100, 60, 60, 0x55ff5555)
    this.matter.add.gameObject(this.ball, {
      chamfer: { radius: 30 },
      density: 0.02,
      restitution: 1,
      frictionAir: 0,
      friction: 0,
      timeScale: 0.5
    })

    this.separator = this.add.rectangle(400, 300, 10, 200, 0xff0000, 0.5)
    this.ground = this.add.rectangle(400, 400, 800, 20, 0x004099, 0.5)
    this.matter.add.gameObject(this.ground, { isStatic: true, friction: 5 })
    this.matter.add.gameObject(this.separator, { isStatic: true })

    this.matter.add.mouseSpring({})
    console.log(this.ball)
  }

  public update () {
    const cursors = this.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
      this.player.setVelocityX(-PLAYER_SPEED)
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(PLAYER_SPEED)
    } else if (this.player.body.velocity.x) {
      this.player.setVelocityX(0)
    }

    if (cursors.up.isDown) {
    // if (cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-PLAYER_SPEED)
    } else if (this.player.body.velocity.y < -2) {
      this.player.setVelocityY(0)
    }

    if (cursors.down.isDown) {
      this.player.setVelocityY(PLAYER_SPEED)
    }
  }
}
