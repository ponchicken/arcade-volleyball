import 'phaser'
import { player } from './Create'

let cursors
const SIDE_SPEED = 250

export function Update () {
  const scene: Phaser.Scene = this

  cursors = scene.input.keyboard.createCursorKeys()

  if (cursors.left.isDown) {
    player.body.setVelocityX(-SIDE_SPEED)
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(SIDE_SPEED)
  } else {
    player.body.setVelocityX(0)
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.body.setVelocityY(-530)
  }
}
