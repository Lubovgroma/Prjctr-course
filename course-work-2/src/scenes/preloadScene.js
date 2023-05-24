import Phaser from "../lib/phaser.js";

export default class PreloadScene extends Phaser.Scene {
    constructor(){
        super('preload')
    }

    preload(){
        this.load.image('background', 'assets/Background/Background2.png');
        this.load.image('startGame', 'assets/Background/start-button.png');
    }
    create(){
        const { width, height } = this.sys.game.config;
        const background = this.add.image(240, 275, 'background')
            .setScrollFactor(1,0);
        background.setScale(width / background.width, height / background.height);
        const button = this.add.image(width/2, height/2, 'startGame')
            .setScale(0.7)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.scene.start('game');
            })
    }
}