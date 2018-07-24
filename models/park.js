const Park = function(name){
  this.name = name;
  this.ticketPrice = 500;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.pop();
}

module.exports = Park;
