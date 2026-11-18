controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Blast = sprites.create(assets.image`Blast`, SpriteKind.Projectile)
    Blast.setPosition(90, 60)
    info.changeLifeBy(1)
    sprites.destroy(Filth)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Filth)
    info.changeLifeBy(-1)
})
let Filth: Sprite = null
let Blast: Sprite = null
scene.setBackgroundColor(0)
scene.setBackgroundImage(assets.image`BackGround`)
let V1 = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(V1)
scene.cameraFollowSprite(V1)
scroller.scrollBackgroundWithSpeed(-50, 0)
animation.runImageAnimation(
V1,
assets.animation`filth walk`,
100,
true
)
forever(function () {
    Filth = sprites.createProjectileFromSide(assets.image`Filth`, -90, 0)
    Filth.setKind(SpriteKind.Enemy)
    Filth.setPosition(160, 60)
    animation.runImageAnimation(
    Filth,
    assets.animation`Filth Walk`,
    100,
    true
    )
    pause(2100)
})
