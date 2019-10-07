import { SCENE } from '../data'
import Phaser from 'phaser'

export class Menu extends Phaser.Scene {
  constructor () {
    super({
      key: SCENE.menu
    })
  }

  public create () {
    this.scene.start(SCENE.matter)
  }
}
