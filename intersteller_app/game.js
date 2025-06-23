// game.js
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    },
    pixelArt: true
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets
    this.load.image('cockpit', 'assets/images/cockpit.png');
    this.load.spritesheet('tars', 'assets/images/tars.png', {
        frameWidth: 64,
        frameHeight: 64
    });
    this.load.image('endurance', 'assets/images/endurance.png');
    this.load.image('stars', 'assets/images/stars.gif');
}

function create() {
    // 1. Add cockpit background
    this.add.image(400, 300, 'cockpit').setScale(2);


// Apply to background
this.add.image(0, 0, 'cockpit')
    .setOrigin(0, 0)
    .setScale(scaleX, scaleY); // Stretch to full screen
    
    // 2. Animate TARS
    this.anims.create({
        key: 'tars-idle',
        frames: this.anims.generateFrameNumbers('tars', { start: 0, end: 3 }),
        frameRate: 3,
        repeat: -1
    });
    this.add.sprite(600, 400, 'tars')
        .play('tars-idle')
        .setScale(1.5);
    
    // 3. Add space view button
    const btn = this.add.rectangle(150, 550, 200, 40, 0x001100)
        .setInteractive();
    this.add.text(150, 550, '[VIEW SPACE]', 
        { font: '16px Courier', fill: '#00FF00' }
    ).setOrigin(0.5);
    
    btn.on('pointerdown', () => {
        this.scene.start('SpaceScene');
    });
}

// Space Scene
class SpaceScene extends Phaser.Scene {
    create() {
        // Add starfield
        this.add.tileSprite(400, 300, 800, 600, 'stars');
        
        // Add Endurance
        this.add.image(400, 300, 'endurance');
        
        // Return button
        const btn = this.add.rectangle(400, 550, 200, 40, 0x110011)
            .setInteractive();
        this.add.text(400, 550, '[BACK TO COCKPIT]', 
            { font: '16px Courier', fill: '#FF00FF' }
        ).setOrigin(0.5);
        
        btn.on('pointerdown', () => {
            this.scene.start('default');
        });
    }
}

game.scene.add('SpaceScene', SpaceScene);