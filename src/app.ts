import 'phaser'
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin'

import * as Scene from './scenes'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 400,
  height: 250,
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 1
      },
      debug: true
    }
  },
  scene: [
    Scene.Load, Scene.Menu, Scene.Game
  ],
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision'
      }
    ]
  }
}

export const game = new Phaser.Game(config)
