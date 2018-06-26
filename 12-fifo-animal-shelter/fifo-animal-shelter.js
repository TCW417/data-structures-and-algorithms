'use strict';

const Animal = class {
  constructor(species, name) {
    this.species = species.toLowerCase(); // expect 'dog' or 'cat'
    this.name = name;
  }
};

const AnimalShelter = class { /* eslint-disable-line */
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    if (!(animal instanceof Animal)) return -1;
    return this.queue.push(animal);
  }

  dequeue(preference) {
    if (!preference) return this.queue.shift();
    const sQ = this.queue.filter(a => a.species === preference);
    return sQ.shift();
  }
};

export { Animal, AnimalShelter };
