
const PLAYER_SPEED = 6

class Player {
  private scene: Phaser.Scene
  public gameObject: Phaser.GameObjects.Ellipse & any

  private canJump: boolean
  private jumpCooldownTimer: any

  constructor (scene, x = 12, y = 60, color = 0x555599f) {
    this.scene = scene
    this.canJump = true

    this.gameObject = this.scene.add.ellipse(x, y, 30, 30, color)
    this.scene.matter.add.gameObject(this.gameObject, {
      chamfer: { radius: 15 },
      density: 0.02,
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
      this.gameObject.setVelocityX(-PLAYER_SPEED)
    } else if (cursors.right.isDown) {
      this.gameObject.setVelocityX(PLAYER_SPEED)
    } else if (this.gameObject.body.velocity.x) {
      this.gameObject.setVelocityX(0)
    }

    if (cursors.up.isDown && this.canJump) {
      this.gameObject.setVelocityY(-PLAYER_SPEED)

      // Add a slight delay between jumps since the bottom sensor will still collide for a few
      // frames after a jump is initiated
      this.canJump = false
      this.jumpCooldownTimer = this.scene.time.addEvent({
        delay: 250,
        callback: () => (this.canJump = true)
      })
    } else if (this.gameObject.body.velocity.y < -7) {
      // this.gameObject.setVelocityY(0)
    }

    if (cursors.down.isDown) {
      this.gameObject.setVelocityY(PLAYER_SPEED)
    }
  }
}

export {
  Player
}
