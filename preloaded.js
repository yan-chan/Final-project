var preloaded ={
    preload: function(){
        //loading bar
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
     
        
        this.game.load.image('player','https://media.giphy.com/media/xUA7aLu5CHIboYsapG/giphy.gif' ); 
        this.game.load.image('lava','https://media.giphy.com/media/l0IyosstgVfHS3N0k/giphy.gif');
        this.game.load.image('coin','http://piskel-imgstore-b.appspot.com/img/4ec630e8-6268-11e7-878f-bd340cb4a00a.gif'); 
        this.game.load.image('gameTitle','Drawing (1).png');
        this.game.load.image('play','Drawing (3).png');
        this.game.load.image('gameover','http://piskel-imgstore-b.appspot.com/img/b9807a6b-626b-11e7-bfce-bd340cb4a00a.gif'); 
        this.game.load.image ('loading','http://i1101.photobucket.com/albums/g438/aceofreality/loading-animation-bd.gif');
        
    },
    
    create: function(){
 this.game.state.start("GameTitle");
    
}
    game.load.image('background','New Piskel (11) (1).png');
    game.load.image('player','New Piskel (7) (1).gif');

}

var player;
var cursors;

function create() {

    game.add.tileSprite(0, 0, 1920, 1920, 'background');

    game.world.setBounds(0, 0, 1920, 1920);

    game.physics.startSystem(Phaser.Physics.P2JS);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

    game.physics.p2.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

}

function update() {

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
    }

}

function render() {

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);

}

};