
class Pokemon
{
    constructor(name,health,magic)
    {
        this.name=name;
        this.health=health;
        this.magic=magic;
        this.skills=[];
        this.magicCount=0 
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
 
 attack(key,poki)
    {
        if(this.magic >= this.skills[key].requireMagic)
        {
           this.magic -= this.skills[key].requireMagic;
           poki.health -=this.skills[key].damagePoint;
           return `${this.poki} got ${this.skills[key].damagePoint} damage as a result of the attack from ${this.name}`
        }
        return `${this.name} have not enough magic, cannot launch attack!`

   

    

 getMagic()
    {   
        if(this.magicCount < 2)
        {
            this.magic += 25
            this.magicCount+=1
            return `${this.name} got 25 magic back`

        }
        return `Uuuppss!!! you have already use all magic`
        
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
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning)
pikachu.learnAttackSkill(poisonSeed)
bulbasaur.learnAttackSkill(poisonSeed)
bulbasaur.learnAttackSkill(lightning)
//console.log(pikachu.getMagic());
//console.log(pikachu);
//console.log(bulbasaur);
//pikachu.attack(0,bulbasaur)

console.log(pikachu);
//console.log(bulbasaur);
console.log(pikachu.getMagic());
console.log(pikachu);
pikachu.getMagic()
console.log(pikachu);
console.log(pikachu.getMagic());
console.log(pikachu.attack(poisonSeed,bulbasaur));
