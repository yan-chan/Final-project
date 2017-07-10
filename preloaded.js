var preloaded ={
    preload: function(){
        //loading bar
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
     
        
        this.game.load.image('player','https://media.giphy.com/media/xUA7aLu5CHIboYsapG/giphy.gif' ); 
        this.game.load.image('lava','https://media.giphy.com/media/l0IyosstgVfHS3N0k/giphy.gif');
        this.game.load.image('coin','http://piskel-imgstore-b.appspot.com/img/4ec630e8-6268-11e7-878f-bd340cb4a00a.gif');
        this.game.load.image('wall','New Piskel (11).png')    
        this.game.load.image('gameTitle','https://lh3.googleusercontent.com/2Lz-ddf47zaRNxtiBWmtaYyaNVEMhfJ4gESW5mmMagfwyPSmpLwj36oxlo3l8wlYD7-QE94=s85');
        this.game.load.image('play','Play.png');
        this.game.load.image('gameover','http://piskel-imgstore-b.appspot.com/img/b9807a6b-626b-11e7-bfce-bd340cb4a00a.gif'); 
        this.game.load.image ('loading','http://i1101.photobucket.com/albums/g438/aceofreality/loading-animation-bd.gif')
        
    },
    
    create: function(){
 this.game.state.start("GameTitle");
    
}
};