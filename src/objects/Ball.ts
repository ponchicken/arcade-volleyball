class Ball {
  private scene: Phaser.Scene
  private ball: Phaser.GameObjects.Ellipse & any

  constructor (scene) {
    this.scene = scene

    this.ball = scene.add.ellipse(400, 100, 60, 60, 0x55ff5555)

    scene.matter.add.gameObject(this.ball, {
      chamfer: { radius: 30 },
      density: 0.002,
      restitution: 1,
      frictionAir: 0.01,
      friction: 0,
      // timeScale: 0.5,
      inertia: Infinity
    })
  }
}

export {
  Ball
}
