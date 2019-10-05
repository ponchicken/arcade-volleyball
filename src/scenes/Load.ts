import { SCENE } from '../data'

import skyImage from '~/assets/images/sky.png'
import groundImage from '~/assets/images/platform.png'
import startImage from '~/assets/images/star.png'
import bombImage from '~/assets/images/bomb.png'
import dudeImage from '~/assets/images/dude.png'

export class Load extends Phaser.Scene {
  constructor () {
    super({
      key: SCENE.load
    })
  }

  // public init () {}
  public preload () {
    this.load.image('sky', skyImage)
    this.load.image('ground', groundImage)
    this.load.image('star', startImage)
    this.load.image('bomb', bombImage)
    this.load.spritesheet('dude',
      dudeImage,
      { frameWidth: 32, frameHeight: 48 }
    )
  }

  public create () {
    this.scene.start(SCENE.menu)
  }
}
