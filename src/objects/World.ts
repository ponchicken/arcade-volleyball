class World {
  private scene: Phaser.Scene
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle

  constructor (scene) {
    this.scene = scene

    this.separator = scene.add.rectangle(400, 400, 10, 200, 0xff0000, 0.5)
    this.ground = scene.add.rectangle(400, 500, 800, 20, 0x004099, 0.5)

    scene.matter.add.gameObject(this.ground, {
      isStatic: true,
      friction: 5
    })
    scene.matter.add.gameObject(this.separator, {
      isStatic: true
    })
  }
}

export {
  World
}
