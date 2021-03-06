

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
    {   
        this.skills.push(skill)
    }

 showStatus()
    {   if(this.health <= 0)
        {
            return `${ this.name } is killed and lost the game`
        }
        return `${ this.name } hat currently ${ this.health } health and ${ this.magic } magic`
    }
 
 attack(key=0,poki)
    {     
        if(this.health <= 0 )
        {
            if(this.name === poki.name)
            {
                return `${this.name} is already dead. You can not kill yourself again`
            }

            return `${ this.name } is already dead. ${ poki.name } is the Winner`
        }
        
        if (this.name === poki.name)
        {
            return `That is hazardous, Are you sure: Desire you attack to you ?? `
        }

        

        if(this.magic >= this.skills[key].requireMagic)
        {
           this.magic -= this.skills[key].requireMagic;

           poki.health -=this.skills[key].damagePoint;

           return `${this.name} launched skill ${this.skills[key].attackName} succesfully!
           ${poki.name} got ${this.skills[key].damagePoint} damage as a result of the attack from ${this.name}`

        }
        
       return `${ this.name } have not enough magic, cannot launch attack!`
    }
   

    

 getMagic()
    {   
        if(this.magicCount < 1)
        {
            this.magic += 20;
            this.magicCount++;
            return `${ this.name } got 20 magic back and can get one more time 15 magic `
            
        }
        else if(this.magicCount < 2)
        {
            this.magic+=15;
            this.magicCount++
            return `${ this.name } got 15 magic back and that is the last Chance`
            
        }
        
        return `Uuuppss!!! You have already used all magic`
        
    }

} 
module.exports = Pokemon;