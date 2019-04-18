import './style/public.styl';
import GAME from './script/game.js'

const Game = new GAME()

Game.init()

document.getElementById('startGame').addEventListener('click',()=>{
    Game.start()
})