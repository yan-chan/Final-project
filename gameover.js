var gameOver = {
    
    create: function (){
        var gameOverTitle = this.game.add.sprite(500,150,'gameover');
        gameOverTitle.anchor.setTo(0.5,0.5);
        var playButton = this.game.add.button(500,320,"play", this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
    },
    playTheGame: function() {
    this.game.state.start("state1");
}
};