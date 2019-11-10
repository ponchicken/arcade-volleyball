class Ball {
  private scene: Phaser.Scene
  private gameObject: Phaser.GameObjects.Ellipse & any

  constructor (scene) {
    this.scene = scene

    this.gameObject = scene.add.ellipse(200, 120, 20, 20, 0x55ff5555)

    scene.matter.add.gameObject(this.gameObject, {
      chamfer: { radius: 10 },
      density: 0.01,
      restitution: 1,
      frictionAir: 0.01,
      friction: 0,
      timeScale: 0.5
      // inertia: Infinity
    })

    console.log(this.gameObject)

    scene.events.on('update', this.update, this)
  }

  update () {
    // if (this.gameObject.body.speed > 3) {
    //   this.gameObject.setVelocity(
    //     this.gameObject.body.velocity.x / 2,
    //     this.gameObject.body.velocity.y / 2
    //   )
    // }
  }
}

export {
  Ball
}
