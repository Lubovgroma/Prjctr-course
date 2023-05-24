import Phaser from "../lib/phaser.js";

export default class GameOverScene extends Phaser.Scene {
    constructor(){
        super('gameOverScene')
    }
    preload(){
        this.load.image('background', 'assets/Background/Background3.png');
        this.load.image('startGame', 'assets/Background/start-button.png');
        this.savedScore = localStorage.getItem('savedScore');
    }
    create(){
        const { width, height } = this.sys.game.config;
        const background = this.add.image(240, 275, 'background')
            .setScrollFactor(1,0);
        background.setScale(width / background.width, height / background.height);
        
        this.gameOverText = this.add.text(width/2, height/3, `Game is over`, { fontSize: '32px', fill: '#000'});    
        this.gameOverText.setOrigin(0.5);
        if (this.savedScore === null) {
            this.savedScore = 0;
        }
        this.scoreText = this.add.text(width/2, height/2, `Your score is: ${this.savedScore}`, { fontSize: '24px', fill: '#000'});
        this.scoreText.setOrigin(0.5);

        const restartButton = this.add.image(width/2, height/1.5, 'startGame')
            .setScale(0.5)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.scene.start('game')
            });  
    }
}