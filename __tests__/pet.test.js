const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
    
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });

    it('has a initial hunger of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.hunger).toEqual(0);
    });
  });

    describe('growUp', () => {
      it('increments the age by 1', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
      });

      it('increments the hunger by 5', () => {
       const pet = new Pet('Fido');

        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });

      it('decreases the fitness level by 3', () => {
        const pet = new Pet('Fido');
        
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });
      
    });

    describe('walk', () => {
      it('increases fitness by 4', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 4;
        pet.walk();
    
        expect(pet.fitness).toEqual(8);
      });

      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
    });
    
    describe('Feed' , () => {
      it('Decreases hunger level by 3', () => {
        const pet = new Pet('fido');
    
        pet.hunger= 7;
        pet.feed();

        expect(pet.hunger).toEqual(4);
      });

      it('Decreases hunger level by 3 until 0 ', () => {
        const pet = new Pet('fido');
    
        pet.hunger= 2,1;
        pet.feed();

        expect(pet.hunger).toEqual(0);
      });

    });
   
    describe('checkup' , () => {
      it('if the pets fitness is 3 or less, it should return I need a walk' , () => {
        const pet = new Pet('fido');

        pet.fitness= 3;
        //const petResponse = pet.checkUp();
        //expect(petResponse).toEqual('I need a walk')
        expect(pet.checkUp()).toEqual(`${pet.name} says I need a walk`)
      });

      it('if the pets hunger is 5 or more , it should return I am hungry' , () => {
        const pet = new Pet('fido');

        pet.hunger = 6;
        expect(pet.checkUp()).toEqual(`${pet.name} says I am hungry`)
      });

      it('if both of the above are true , it should return I am hungry AND need a walk ' , () => {
        const pet = new Pet('fido');

        pet.fitness = 1;
        pet.hunger = 6;
        expect(pet.checkUp()).toEqual(`${pet.name} says I am hungry AND need a walk`)
      });

      it('if  neither of the above are true , it should return I feel amazing ' , () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.hunger = 4;
        expect(pet.checkUp()).toEqual(`${pet.name} says I feel Amazing!!`)
      });

 // better descriptions pleaseeeeee
 describe('isAlive' , () => {
  it('if the pets fitness is 0 or less return false ' , () => {
    const pet = new Pet('fido');

    pet.fitness= 0;

    expect(pet.isAlive).toEqual(false);
  });

  it('if the pets hunger is 10 or more return false ' , () => {
    const pet = new Pet('fido');

    pet.hunger= 10;

    expect(pet.isAlive).toEqual(false);
  });

  it('if the pets age is 30 or more return false ' , () => {
    const pet = new Pet('fido');

    pet.age= 30;

    expect(pet.isAlive).toEqual(false);
  });

  it('if the pets fitness is more than 0 , hunger is less than 10 and age is less than 30 return true' , () => {
    const pet = new Pet('fido');

    pet.fitness= 1;
    pet.hunger= 7;
    pet.age = 25;

    expect(pet.isAlive).toEqual(true);
  });


    
    });

  

  });