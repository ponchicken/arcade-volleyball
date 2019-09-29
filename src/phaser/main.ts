import 'phaser'

import { Create, Preload, Update } from './Setup'

var config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 500
      },
      debug: true
    }
  },
  scene: {
    preload: Preload,
    create: Create,
    update: Update
  }
}

export const game = new Phaser.Game(config)
