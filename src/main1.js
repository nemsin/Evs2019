import 'Phaser'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
  console.log('main1');
  //this.load.image('worldmap','assets/map.png');
  }

function create ()
{
  //  var image = game.add.image(1000,500,'worldmap');
}

function update ()
{
}
