import Champion from "./champion.js";

let champions = [];

async function getChamps() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"
    let data = await fetch(url)
    .then(async(response) => {return (await response.json()).data})

    for (const key in data) {
        champions.push(new Champion(data[key]));
    }
    await showChampions();
}

getChamps();
console.log(champions)

const showChampions = async () => {
    const champs = document.getElementById("champions");
    for(let champion of champions) {
        champs.innerHTML +=    `<div class="card">
                                    <div class="card_top">
                                        <div class="champ_name">
                                            ${champion.name}
                                        </div>
                                        <div class="champ_title">
                                        ${champion.title}
                                        </div>
                                    </div>
                                    <br>
                                    <img src="${champion.image}">
                                    <br>
                                    <div class="champ_role ${champion.role}">
                                        ${champion.role}
                                    </div>
                                    <div class="champ_stats">
                                        HP:${champion.hp} - Daño:${champion.damage}
                                    </div>
                                </div>`
    }
}