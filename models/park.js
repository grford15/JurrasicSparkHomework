const Park = function(name){
  this.name = name;
  this.ticketPrice = 500;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {

  if(this.dinosaurs.includes(dinosaur)){
  this.dinosaurs.pop();
};
};

Park.prototype.mostPopularDinosaur = function() {
  for(var dino of this.dinosaurs){
    let total = [];
    total.push(dino.guestsAttractedPerDay);
    let highest = Math.max(total);
    if(dino.dino.guestsAttractedPerDay == highest)
    return dino;
  }

}

module.exports = Park;
