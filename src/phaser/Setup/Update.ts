import 'phaser'
import { player } from './Create'

let cursors
const SIDE_SPEED = 250

export function Update () {
  const scene: Phaser.Scene = this

  cursors = scene.input.keyboard.createCursorKeys()

  if (cursors.left.isDown) {
    player.setVelocityX(-SIDE_SPEED)

    player.anims.play('left', true)
  } else if (cursors.right.isDown) {
    player.setVelocityX(SIDE_SPEED)

    player.anims.play('right', true)
  } else {
    player.setVelocityX(0)

    player.anims.play('turn')
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-530)
  }
}
