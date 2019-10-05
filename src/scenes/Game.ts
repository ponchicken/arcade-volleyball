import { SCENE } from '../data'

let platforms: Phaser.GameObjects.Group,
  player: any
  // player: {
  //   body: Phaser.Physics.Arcade.Body
  // }
const SIDE_SPEED = 250

export class Game extends Phaser.Scene {
  constructor () {
    super({
      key: SCENE.game
    })
  }

  public create () {
    platforms = this.physics.add.staticGroup()

    platforms.create(400, 400, 'ground')
      .setScale(2)
      .refreshBody()

    platforms.create(600, 270, 'ground')
    platforms.create(50, 180, 'ground')
    platforms.create(750, 120, 'ground')

    // player = this.physics.add.sprite(100, 300, 'dude')
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
      player.body.setVelocityY(-530)
    }
  }
}
