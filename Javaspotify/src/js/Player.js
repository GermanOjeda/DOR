import Song from '../js/Song.js'
export default class Player {
    constructor(map) {
        Object.entries(map);
        let aux = 1;
        for (var [key,value] of Object.entries(map)) {
            // crea instancia para Song
            var song = new Song()
            // invoca la funcion para reproducir la canción
            aux++;
        }
    }
}