import 'phaser'

// import { Create, Preload, Update } from './Setup'
import * as Scene from './scenes'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: {
      //   y: 1000
      // },
      debug: true
    }
  },
  scene: [
    Scene.Load, Scene.Menu, Scene.Game
  ]
}

export const game = new Phaser.Game(config)
