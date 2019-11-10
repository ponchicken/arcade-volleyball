class World {
  private scene: Phaser.Scene
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle

  constructor (scene) {
    this.scene = scene

    this.separator = scene.add.rectangle(200, 200, 5, 100, 0xff0000, 0.5)
    this.ground = scene.add.rectangle(200, 250, 400, 10, 0x004099, 0.5)

    scene.matter.add.gameObject(this.ground, {
      isStatic: true,
      friction: 0
    })
    scene.matter.add.gameObject(this.separator, {
      isStatic: true,
      friction: 0
    })
  }
}

export {
  World
}
