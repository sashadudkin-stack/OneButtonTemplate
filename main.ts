controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Blast = sprites.create(assets.image`Blast`, SpriteKind.Projectile)
    Blast.setPosition(90, 60)
    info.changeLifeBy(1)
    sprites.destroy(Filth)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    Blast,
    assets.animation`Blast Move`,
    200,
    true
    )
    pause(2500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let mySprite: Sprite = null
    sprites.destroy(Filth)
    info.changeLifeBy(-1)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Blast projectile`,
    100,
    false
    )
})
let Filth: Sprite = null
let Blast: Sprite = null
info.startCountdown(20)
info.setLife(1)
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
