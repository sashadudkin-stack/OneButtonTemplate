controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Blast = sprites.create(assets.image`Blast`, SpriteKind.Projectile)
    Blast.setPosition(90, 55)
    info.changeLifeBy(1)
    sprites.destroy(Filth)
    info.changeScoreBy(1)
    pause(2400)
    animation.runImageAnimation(
    Blast,
    assets.animation`blast sprite`,
    100,
    true
    )
    music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Filth)
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
