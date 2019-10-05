import { SCENE } from '../data'

let platforms: Phaser.GameObjects.Group,
  player: any
  // player: {
  //   body: Phaser.Physics.Arcade.Body
  // }
const SIDE_SPEED = 250

export class Game extends Phaser.Scene {
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle

  constructor () {
    super({
      key: SCENE.game
    })
  }

  public create () {
    this.separator = this.add.rectangle(400, 300, 50, 200, 0xff0000, 0.5)
    this.ground = this.add.rectangle(400, 380, 800, 20, 0xfff000, 0.5)

    platforms = this.physics.add.staticGroup()

    platforms.add(this.separator)
    platforms.add(this.ground)

    player = this.physics.add.existing(
      this.add.ellipse(50, 50, 50, 50, 0x55555555),
      false
    )

    player.body.setBounce(1, 0.3)
    player.body.setCollideWorldBounds(true)
    player.body.setGravityY(500)

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
    this.physics.add.collider(player, this.separator)
  }

  public update () {
    const cursors = this.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
      player.body.setVelocityX(-SIDE_SPEED)
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(SIDE_SPEED)
    } else {
      player.body.setVelocityX(0)
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.body.setVelocityY(-730)
    }
  }
}
