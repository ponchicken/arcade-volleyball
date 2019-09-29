import 'phaser'

let platforms: Phaser.GameObjects.Group, player: Phaser.Physics.Arcade.Sprite

export function Create () {
  const scene: Phaser.Scene = this

  scene.add.image(400, 300, 'sky')
  scene.add.image(400, 300, 'star')

  platforms = scene.physics.add.staticGroup()

  platforms.create(400, 400, 'ground')
    .setScale(2)
    .refreshBody()

  platforms.create(600, 270, 'ground')
  platforms.create(50, 180, 'ground')
  platforms.create(750, 120, 'ground')

  player = scene.physics.add.sprite(100, 300, 'dude')

  player.setBounce(0.3)
  player.setCollideWorldBounds(true)
  player.setGravityY(500)

  scene.anims.create({
    key: 'left',
    frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })

  scene.anims.create({
    key: 'right',
    frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  })

  scene.anims.create({
    key: 'turn',
    frames: [{ key: 'dude', frame: 4 }],
    frameRate: 10,
    repeat: -1
  })

  scene.physics.add.collider(player, platforms)
}

export {
  platforms, player
}
