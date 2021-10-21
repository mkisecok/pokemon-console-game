
const Pokemon = require('./Pokemon');
const AttackSkill = require('./Attackskill');

//Pokemon erstellt

            //let squirtle = new Pokemon("Squirtle", 75, 25);

            //console.log(squirtle);

            //let charizard= new Pokemon('Charizard', 50, 45);

            //console.log(charizard);

            //console.log('*'.repeat(50));

//skills erstellt

            //let fire = new AttackSkill("Fire", 40, 30);

            //let flying = new AttackSkill ("Flying", 30, 20);

            //let spraysWater = new AttackSkill ("Sprays Water", 30, 25);
            
            //let makeWaterBalloon = new AttackSkill ("Water Balloon", 20, 30);

            //console.log(fire);

            //console.log('*'.repeat(50));

//status control

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));

// learn charizard two Attack skills and check

            //charizard.learnAttackSkill(fire);

            //charizard.learnAttackSkill(flying);

            //console.log(charizard.skills);

            //console.log('*'.repeat(50));

// learn squirtle two Attack skills and check

            //squirtle.learnAttackSkill(spraysWater);

            //squirtle.learnAttackSkill(makeWaterBalloon);

            //console.log(squirtle.skills);

            //console.log('*'.repeat(50));

//First attack  from charizard, check before and after their status 

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));

// >>>>> attack and check is the attack type succesfull or not  

                             // 0 = First skill in skills array
            //console.log(charizard.attack(0,squirtle));  

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));

// Counter Attack from squirtle and check the attack type succesfull or not

            //console.log(squirtle.attack(0,charizard));

            //console.log('*'.repeat(50));

// check their status after this attack

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));

// New attack type from charizard check the attack type succesfull or not

                             // 1 = Second skill in skills array 
            //console.log(charizard.attack(1,squirtle)); 

// check their status after this unsuccesfull attack

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));

// get a  magic with methode and check the magicCount before and after getMagic()


            //console.log(charizard.magicCount);

            //console.log(charizard.getMagic());

            //console.log(charizard.magicCount);

            //console.log('*'.repeat(50));

// check charizard status after getMagic()

            //console.log(charizard.showStatus());

            //console.log('*'.repeat(50));

// after getMagic() charizard attack once again

            //console.log(charizard.attack(1,squirtle)); 

// check their status after the charizards attack

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));

// once more counter attack type come from squirtle , check if its succesfull ?

                                          // 1 = second attack skill in skills array
            //console.log(squirtle.attack(1,charizard));

            //console.log('*'.repeat(50));

// get a  magic with methode and check the magicCount before and after getMagic()

            //console.log(squirtle.showStatus());

            //console.log(squirtle.magicCount);

            //console.log(squirtle.getMagic());  // but that is not enough, need once more
            //console.log(squirtle.magicCount);

            //console.log(squirtle.getMagic());

            //console.log(squirtle.magicCount);

            //console.log(squirtle.showStatus());

            //console.log(squirtle.getMagic());   // could not take more

            //console.log('*'.repeat(50));

// after getMagic() squirtle attack once again 

            //console.log(squirtle.attack(1,charizard));

// check their status after this attack 

            //console.log(charizard.showStatus());

            //console.log(squirtle.showStatus());

            //console.log('*'.repeat(50));
            
// Can charizard new attack despite dead ?

            //console.log(charizard.attack(1,squirtle)); 
            //console.log(charizard.attack(0,charizard));
