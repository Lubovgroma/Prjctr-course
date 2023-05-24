import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene
{   
    constructor(){
        super('game'),
        this.player;
    }

    preload(){
        this.load.image('background', 'assets/Background/Background2.png');
        this.load.image('topTube', 'assets/Tileset/Style 1/topTube.png');
        this.load.image('downTube', 'assets/Tileset/Style 1/downTube.png');
        this.load.spritesheet('flappy-bird', 'assets/Player/bird3.png', {
            frameWidth: 16, frameHeight: 16
        });       
    }

    create(){
        this.cursors = this.input.keyboard.createCursorKeys();

        const { width, height } = this.sys.game.config;
        const background = this.add.image(240, 275, 'background')
            .setScrollFactor(1,0);
        background.setScale(width / background.width, height / background.height);

        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});   
        
        this.anims.create({ 
            key: 'flying-bird',
            frames: this.anims.generateFrameNumbers('flappy-bird', {
                start: 0,
                end: 3
            }),
            frameRate: 15,
            repeat: -1,
        })
        this.topTube = this.physics.add.sprite(600,140, 'topTube',0)
            .setImmovable(true);
        this.topTube.body.setAllowGravity(false);
        this.downTube = this.physics.add.sprite(600,680, 'downTube',0)
            .setImmovable(true);
        this.downTube.body.setAllowGravity(false);
        
        this.player = this.physics.add.sprite(480/2, 550/2, 'flappy-bird', 0);
        this.player
            .setScale(3)
            .setBounce(0.2);
        this.player.body.setGravity(0,650);
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.topTube, this.player, () => this.scene.start('gameOverScene'));
        this.physics.add.collider(this.downTube, this.player, () => this.scene.start('gameOverScene'));
        this.tubesSummoned = false;
        this.gameTime = 0;
    }
    birdJump(){ 
        if(!this.isJumping){
            this.player.setVelocityY(-350);
            this.isJumping = true;
        }
    }
    birdAnimation(){
        let birdVelY = this.player.body.velocity.y;
        if(birdVelY < 0){
            this.player.angle = -30;
        }
        else{
            if(this.player.angle <= 30){
            this.player.angle = this.player.angle + birdVelY /100;
            }
            
        }
    }
    tubeSummon(speed){   
        if(!this.tubesSummoned){
            this.tubesSummoned = true;
            let topTubePosition = Phaser.Math.RND.between(-120,140); //min and max for top tube
            let downTubePosition = topTubePosition + 540; //540 is gap between tubes
            this.topTube
                .setPosition(600,topTubePosition)
                .setVelocityX(speed*-1);
            this.downTube
                .setPosition(600,downTubePosition)
                .setVelocityX(speed*-1);
        }
        if(this.topTube.x < -20){
            this.tubesSummoned = false;
        }
        this.scoreText.setText('Score: ' + this.score);
        localStorage.setItem('savedScore', this.score);
        
        if(this.topTube.getBounds().right < this.player.getBounds().left && !this.passedTube){
           this.score += 1;
           this.scoreText.setText('Score: ' + this.score);
           localStorage.setItem('savedScore', this.score);
           this.passedTube = true;
        }else if (this.topTube.getBounds().right > this.player.getBounds().left) {
            this.passedTube = false;
        }
    }
    
    update(){
        this.gameTime++;
        console.log(this.gameTime)
        this.player.anims.play('flying-bird', true);
        this.birdAnimation();
        this.tubeSummon(200 + this.gameTime/15);

        if (this.cursors.space.isDown) {
            this.birdJump();         
        } else {
            this.isJumping = false;
        }  
    }
}