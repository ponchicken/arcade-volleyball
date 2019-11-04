type MatterCollisionProps = {
  objectA: Phaser.GameObjects.GameObject,
  objectB?: Phaser.GameObjects.GameObject,
  callback: (event: any) => void,
  context?: any
}

export class Scene extends Phaser.Scene {
  matterCollision: {
    addOnCollideStart(props: MatterCollisionProps): void
    addOnCollideActive(props: MatterCollisionProps): void
    addOnCollideEnd(props: MatterCollisionProps): void
    removeOnCollideStart(props: MatterCollisionProps): void
    removeOnCollideActive(props: MatterCollisionProps): void
    removeOnCollideEnd(props: MatterCollisionProps): void
    removeAllCollideStartListeners(): void
    removeAllCollideActiveListeners(): void
    removeAllCollideEndListeners(): void
    removeAllCollideListeners(): void
  }
}
