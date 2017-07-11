var boot = { 
    preload: function (){
        this.game.load.image("loading","http://i1101.photobucket.com/albums/g438/aceofreality/loading-animation-bd.gif")
    },
    create: function (){
        this.game.state.start("Preload");
        
    }
};