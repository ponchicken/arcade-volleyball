import 'phaser'

import { Create, Preload, Update } from './Setup'

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: Preload,
    create: Create,
    update: Update
  }
}

export const game = new Phaser.Game(config)
