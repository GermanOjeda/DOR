import songs from '../assets/songs/*.mp3';
import Player from '../js/Player.js';

const map = { };

let aux = 1;
for (var key of Object.keys(songs)) {
    map[".item-" + aux++] = songs[key]
}

const player = new Player(map);
console.log(map)