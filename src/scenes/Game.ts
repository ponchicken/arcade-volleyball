import { SCENE } from '../data'

let platforms: Phaser.GameObjects.Group
let player: Phaser.GameObjects.Ellipse & { body: Phaser.Physics.Arcade.Body }

const SIDE_SPEED = 250

export class Game extends Phaser.Scene {
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle
  private ball: Phaser.GameObjects.Ellipse & { body: Phaser.Physics.Arcade.Body }
  private player: Phaser.GameObjects.GameObject & { body: Phaser.Physics.Arcade.Body }

  constructor () {
    super({
      key: SCENE.game
    })
  }

  public create () {
    this.separator = this.add.rectangle(400, 300, 10, 200, 0xff0000, 0.5)
    this.ground = this.add.rectangle(400, 400, 800, 20, 0x004099, 0.5)
    this.ball = this.add.ellipse(400, 50, 50, 50, 0x5555f555) as any

    platforms = this.physics.add.staticGroup()

    platforms
      .add(this.separator)
      .add(this.ground)

    player = this.add.ellipse(50, 50, 50, 50, 0x55555555) as any

    this.physics.add.existing(player)
    this.physics.add.existing(this.ball)

    player.body
      .setBounce(0.5, 0.5)
      .setCollideWorldBounds(true, 0.5, 0.5)
      .setCircle(25)
      .setGravityY(800)

    const ballBounce = 0.8
    this.ball.body
      .setCollideWorldBounds(true, ballBounce, ballBounce)
      .setBounce(ballBounce, ballBounce)
      .setGravityY(100)
    // .setVelocity(150)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 10,
      repeat: -1
    })

    this.physics.add.collider(player, platforms)
    this.physics.add.collider(player, this.ball)
    this.physics.add.collider(this.ball, platforms)
  }

  public update () {
    const cursors = this.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
      player.body.setVelocityX(-SIDE_SPEED)
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(SIDE_SPEED)
    } else {
      const velocityX = player.body.velocity.x
      player.body.setVelocityX(velocityX / 1.1)
    }

    if (cursors.up.isDown) {
    // if (cursors.up.isDown && player.body.touching.down) {
      player.body.setVelocityY(-550)
    }

    if (cursors.down.isDown) {
      player.body.setVelocityY(player.body.velocity.y + 100)
    }
  }
}
