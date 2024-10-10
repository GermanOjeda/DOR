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
                                    <div class="champ_img">
                                        <img src="${champion.image}">
                                    </div>
                                    <div class="sprite">
                                        <img src="${champion.sprite}">
                                        <br>
                                        <br>
                                    </div>
                                    <div class="extra">
                                        ${champion.blurb}
                                        <br>
                                    </div>
                                    <br>
                                    <div class="champ_role ${champion.role}">
                                        ${champion.role}
                                    </div>
                                    <div class="champ_stats">
                                        <div class="champ_hp">HP:${champion.hp}</div> <div class="champ_dmg">DMG:${champion.damage}</div>
                                        <div class="extra_info">
                                            Recurso: ${champion.partype}
                                            <br>
                                            <br>
                                            Cantidad de recurso: ${champion.mp}
                                            <br>
                                            <br>
                                            Velocidad de movimiento: ${champion.movementspeed}
                                            <br>
                                            <br>
                                            Armadura: ${champion.armor}
                                            <br>
                                            <br>
                                            Defensa mágica: ${champion.spellblock}
                                            <br>
                                            <br>
                                            Rango de ataque: ${champion.range}
                                            <br>
                                            <br>
                                            Velocidad de ataque: ${champion.attackspeed}
                                        </div>
                                    </div>
                                    
                                </div>`
    }
}