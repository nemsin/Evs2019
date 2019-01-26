const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

game = new Phaser.Game(config);


function preload ()
{
  this.load.image('map', 'map.png');
}

function create ()
{
  this.add.image(-1,-1,'map').setOrigin(0,0);
  this.cameras.main.setBounds(0,0, 399, 99);

  cursors = this.input.keyboard.createCursorKeys();
//  const controlConfig = {
//    camera: this.cameras.main,
//    left: cursors.left,
//    right: cursors.right,
//    up: cursors.up,
//    down: cursors.down,
//    acceleration: 0.1,
//    drag: 0.005,
//    maxSpeed: 1.0
//  };
}
function update ()
{
}
