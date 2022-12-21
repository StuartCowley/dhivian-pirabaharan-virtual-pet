function Pet(name) {
    this.name = name ;
    this.age = 0 ;
    this.hunger = 0 ;
    this.fitness = 10 ;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};
Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= 10 ) {
        this.fitness += 4;
      } else {
        this.fitness = 10;
      } 
}
Pet.prototype.feed = function (){
    this.hunger = Math.max(0, this.hunger -3);     
}



module.exports = Pet;