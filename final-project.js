var mainState = {
    preload: function(){
       this.game.load.image('player','https://media.giphy.com/media/xUA7aLu5CHIboYsapG/giphy.gif' ); 
        this.game.load.image('lava','https://media.giphy.com/media/l0IyosstgVfHS3N0k/giphy.gif');
        this.game.load.image('coin','http://piskel-imgstore-b.appspot.com/img/4ec630e8-6268-11e7-878f-bd340cb4a00a.gif');
        this.game.load.image('wall','New Piskel (11).png');
        
    },
    
    create: function(){
        this.cursor = this.game.input.keyboard.createCursorKeys();
      this.game.stage.backgroundImage = "Drawing (2).png";
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.game.world.enableBody = true;
        
        this.player = this.game.add.sprite(70,100, 'player');
        
        this.player.body.gravity.y = 550;
    
    
        this.walls = this.game.add.group();
        this.coins = this.game.add.group();
        this.lavas = this.game.add.group();    
    

        var level = [
          
            
            
            
            
           
        'x!x!x!x!x!x!x!x!x!x!x!x!x!x!x!x!x!x!x',
        'x                                   x',
        'x                                   x',
        'x                                   x',
        'x           xxx        x!x      xxxxx',    
        'x                x                  x',
        'x      o             o              x',
        '!xxx!!    x!!!xxx    !x!     xxxx   x',
        '!                                   x',
        'x                xxxxx      xx   xxxx',
        '!         !                         x',
        '!    xxx              o         o   x',
        'x         o                 xx      x',
        '!                   xxxx          !!!',
        '!         !    x                !!! x',
        'xxxxxxxxxxxxxxxx!!!!!!xxxxxxxxxxxxxxx',
        ];

          // Create the level by going through the array
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                // Create a wall and add it to the 'walls' group
                 if (level[i][j] == 'x') {
                    var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }

                // Create a coin and add it to the 'coins' group
                else if (level[i][j] == 'o') {
                    var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
                    this.coins.add(coin);
                }

                // Create a enemy and add it to the 'enemies' group
                else if (level[i][j] == '!') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
                    this.lavas.add(enemy);
                }
            }
    }
    },
    update: function(){
        this.physics.arcade.collide(this.walls,this.player);
        this.physics.arcade.collide(this.player,this.coins,this.takeCoin,null, this);
        this.physics.arcade.overlap(this.player,this.lavas,this.restart,null,this);
        
        if(this.cursor.left.isDown){
           this.player.body.velocity.x = -200;
           }
        else if(this.cursor.right.isDown){
            this.player.body.velocity.x = 200;
        } 
        else{
            this.player.body.velocity.x = 0;
        }
        
        
        if(this.cursor.up.isDown && this.player.body.touching.down){
           this.player.body.velocity.y = -200;
            
            
           }
    },
    takeCoin: function(player,coin){
        coin.kill();
    },
    restart: function(){
       this.game.state.start('GameOver');
    }
};