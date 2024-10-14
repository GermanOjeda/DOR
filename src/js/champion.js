export default class Champion {
    constructor(data){
        this.name = data.name;
        this.image = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + data.id + "_0.jpg";
        this.title = data.title;
        this.role = data.tags[0];
        this.hp = data.stats.hp;
        this.damage = data.stats.attackdamage;
        this.blurb = data.blurb;
        this.sprite = "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" + data.id +".png";
        this.partype = data.partype;
        this.mp = data.stats.mp;
        this.movementspeed = data.stats.movespeed;
        this.armor = data.stats.armor;
        this.spellblock = data.stats.spellblock;
        this.range = data.stats.attackrange;
        this.attackspeed = data.stats.attackspeed;
    }

}