import { SCENE } from '../data'

export class MatterScene extends Phaser.Scene {
  private player: Phaser.GameObjects.Ellipse & any
  private ball: Phaser.GameObjects.Ellipse & any
  private separator: Phaser.GameObjects.Rectangle
  private ground: Phaser.GameObjects.Rectangle

  constructor () {
    super({
      key: SCENE.matter
    })
  }

  public create () {
    this.matter.world.setBounds()

    this.player = this.add.ellipse(50, 50, 50, 50, 0x555599ff)
    this.matter.add.gameObject(this.player, {
      chamfer: { radius: 25 },
      density: 0.02,
      force: {
        x: 0, y: 2
      }
    })

    this.ball = this.add.ellipse(400, 100, 50, 50, 0x55ff5555)
    this.matter.add.gameObject(this.ball, {
      chamfer: { radius: 25 },
      restitution: 1,
      frictionAir: 0,
      fircition: 0
    })

    this.separator = this.add.rectangle(400, 300, 10, 200, 0xff0000, 0.5)
    this.ground = this.add.rectangle(400, 400, 800, 20, 0x004099, 0.5)
    this.matter.add.gameObject(this.ground, { isStatic: true })
    this.matter.add.gameObject(this.separator, { isStatic: true })

    this.matter.add.mouseSpring({})
  }

  public update () {
  }
}
