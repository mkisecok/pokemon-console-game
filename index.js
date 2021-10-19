
class Pokemon
{
    constructor(name,health,magic)
    {
        this.name=name;
        this.health=health;
        this.magic=magic;
        this.skills=[]
    }

    learnAttackSkill(skill)
    {   // skill must repariert werden
        this.skills.push(skill)
        return `${this.name} launched skill ${skill} succesfully!`
    }

    showStatus()
    {   if(this.health <= 0)
        {
            return `${this.name} is killed`
        }
        return `${this.name} hat currently ${this.health} health and ${this.magic} magic`
    }

    attack()
    {

    }

    getMagic()
    {
        this.magic= this.magic + 25
        return `${this.name} got 25 magic back`
    }

} 

class AttackSkill
{
    constructor(attackName,damagePoint,requireMagic)
    {  
        this.attackName=attackName;
        this.damagePoint= damagePoint;
        this.requireMagic=requireMagic
    }

    
}

let pikachu= new Pokemon('pikachu',100,50);
let lightning = new AttackSkill("lightning", 40, 30);

pikachu.learnAttackSkill(lightning)
console.log(pikachu.getMagic());
console.log(pikachu.showStatus());

