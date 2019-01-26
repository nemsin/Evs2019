import 'phaser'

import Preloader from './Preloader'
import GamePlay from './GamePlay'


var game = new Phaser.Game({
    type: Phaser.AUTO,
    canvas: document.getElementById('game'),
    width: 2096,
    height: 1714,
    scene: [
        Preloader('GamePlay'),
        GamePlay,
    ],
})

function on_window_resize() { scale_mode(game) }
window.addEventListener('load', on_window_resize, false)
window.addEventListener('resize', on_window_resize, false)
