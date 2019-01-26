import 'phaser'

import { show_all as scale_mode } from './game_scales'

import Preloader from './Preloader'
import GamePlay from './GamePlay'


var game = new Phaser.Game({
    type: Phaser.AUTO,
    canvas: document.getElementById('game'),
    width: 2096,
    height: 1714,
    scene: {
        preload: preload

    },
})

function on_window_resize() { scale_mode(game) }
window.addEventListener('load', on_window_resize, false)
window.addEventListener('resize', on_window_resize, false)

function preload() {
    // Load assets
    this.load
        .setBaseURL('media/')
        .atlas('tex', 'tex.png', 'tex.json')

    this.load.image('worldmap', 'assets/map.jpeg');
    this.load.image('house', 'assets/house.jpg');

    // Display loading progress
    //var game_config = this.game.config
    //var width = game_config.width
    //this.bar = this.add.graphics({ x: game_config.width / 2 - width / 2, y: game_config.height / 2 })
    //this.bar.fillStyle(0xAEAEAE, 1)
    //    .fillRect(0, -(BAR_HEIGHT / 2), width, BAR_HEIGHT)

    //this.load.on('progress', this.update_progress_display, this)
}
