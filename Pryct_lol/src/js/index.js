import Champion from "./champion.js";

let champions = [];

async function getChamps() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"
    let data = await fetch(url)
    .then(async(response) => {return (await response.json()).data})

    for (const key in data) {
        champions.push(new Champion(data[key]));
    }
}

getChamps();
console.log(champions)

const showChampions = async () => {
    const champs = document.getElementById("champions");
    for(var i = 0; i < pokemons.length; i++) {
        var aux =  0;
        while (aux != pokemons[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = pokemons[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = pokemons[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++; 
        }
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        pokedex.innerHTML +=    `<div class="card">
                                    <img src="${pokemons[i].pkm_back}">
                                    <img class="front" src="${pokemons[i].pkm_front}"><br>
                                    ${pokemons[i].id}. ${pokemons[i].name}<br>
                                    <div class="extra_info">
                                    Weight: ${pokemons[i].pkm_weight} <br> Base Experience: ${pokemons[i].pkm_base_exp}
                                    <div class="types">
                                        ${tipo1} ${tipo2}
                                    </div>
                                </div>`
    }
}
