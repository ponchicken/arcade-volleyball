import skyImage from '~/assets/images/sky.png'
import groundImage from '~/assets/images/platform.png'
import startImage from '~/assets/images/star.png'
import bombImage from '~/assets/images/bomb.png'
import dudeImage from '~/assets/images/dude.png'

export function Preload () {
  const scene: Phaser.Scene = this

  scene.load.image('sky', skyImage)
  scene.load.image('ground', groundImage)
  scene.load.image('star', startImage)
  scene.load.image('bomb', bombImage)
  scene.load.spritesheet('dude',
    dudeImage,
    { frameWidth: 32, frameHeight: 48 }
  )
}
