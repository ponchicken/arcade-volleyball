import skyImage from '~/assets/images/sky.png'
import groundImage from '~/assets/images/platform.png'
import startImage from '~/assets/images/star.png'
import bombImage from '~/assets/images/bomb.png'
import dudeImage from '~/assets/images/dude.png'

export function Preload () {
  this.load.image('sky', skyImage)
  this.load.image('ground', groundImage)
  this.load.image('star', startImage)
  this.load.image('bomb', bombImage)
  this.load.spritesheet('dude',
    dudeImage,
    { frameWidth: 32, frameHeight: 48 }
  )
}
