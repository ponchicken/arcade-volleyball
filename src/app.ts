import 'phaser'

import * as Scene from './scenes'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 0.3
      },
      debug: true
    }
  },
  scene: [
    Scene.Load, Scene.Menu, Scene.Game, Scene.MatterScene
  ]
}

export const game = new Phaser.Game(config)
