const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trex;
  let pachy;
  let dread;

  beforeEach(function () {
    park = new Park("Jurrasic Spark");
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    pachy = new Dinosaur('Pachycephalosaurus', 'herbivore', 75);
    dread = new Dinosaur('Dreadnoughtus', 'herbivore', 100);

  });

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurrasic Spark");
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.ticketPrice, 500);
  });

  it('should have a collection of dinosaurs', function() {
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(trex);
    park.addDinosaur(pachy);
    park.addDinosaur(dread);
    assert.strictEqual(park.mostPopularDinosaur, dread);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
