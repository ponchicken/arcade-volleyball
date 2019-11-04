
const PLAYER_SPEED = 12

class Player {
  private scene: Phaser.Scene
  private player: Phaser.GameObjects.Ellipse & any

  private canJump: boolean
  private jumpCooldownTimer: any

  constructor (scene, x = 50, y = 250) {
    this.scene = scene
    this.canJump = true

    this.player = this.scene.add.ellipse(x, y, 60, 60, 0x555599ff)
    this.scene.matter.add.gameObject(this.player, {
      chamfer: { radius: 30 },
      density: 0.5,
      restitution: 0,
      frictionAir: 0.01,
      friction: 0,
      // frictionStatic: 0,
      inertia: Infinity
    })

    scene.events.on('update', this.update, this)
  }

  update () {
    const cursors = this.scene.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
      this.player.setVelocityX(-PLAYER_SPEED)
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(PLAYER_SPEED)
    } else if (this.player.body.velocity.x) {
      this.player.setVelocityX(0)
    }

    if (cursors.up.isDown && this.canJump) {
      this.player.setVelocityY(-PLAYER_SPEED)

      // Add a slight delay between jumps since the bottom sensor will still collide for a few
      // frames after a jump is initiated
      this.canJump = false
      this.jumpCooldownTimer = this.scene.time.addEvent({
        delay: 550,
        callback: () => (this.canJump = true)
      })
    } else if (this.player.body.velocity.y < -7) {
      // this.player.setVelocityY(0)
    }

    if (cursors.down.isDown) {
      this.player.setVelocityY(PLAYER_SPEED)
    }
  }
}

export {
  Player
}
