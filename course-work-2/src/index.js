import Phaser from './lib/phaser.js'
import Game from './scenes/game.js'
import PreloadScene from './scenes/preloadScene.js'
import GameOverScene from './scenes/gameOverScene.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 480,
    height: 550,
    scene: [PreloadScene, Game, GameOverScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        }
    }
})
    
