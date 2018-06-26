'use strict';

import { Animal, AnimalShelter } from '../fifo-animal-shelter';

describe('AnimalShelter class tests', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('enqueue an animal', () => {
    const animal = new Animal('dog', 'Rayna');
    shelter.enqueue(animal);
    expect(shelter.queue[0].name).toEqual('Rayna');
    expect(shelter.queue[0].species).toEqual('dog');
  });

  test('enqueue two animals. verify dequeue returns oldest', () => {
    const a1 = new Animal('dog', 'Rayna');
    const a2 = new Animal('cat', 'Oscar');
    shelter.enqueue(a1);
    shelter.enqueue(a2);
    const a3 = shelter.dequeue();
    expect(a3.name).toEqual('Rayna');
    expect(a3.species).toEqual('dog');
    const a4 = shelter.dequeue();
    expect(a4.name).toEqual('Oscar');
    expect(a4.species).toEqual('cat');
  });

  test('enqueue dog and cat, dequeue with preference', () => {
    const a1 = new Animal('dog', 'Rayna');
    const a2 = new Animal('cat', 'Oscar');
    shelter.enqueue(a1);
    shelter.enqueue(a2);
    const a3 = shelter.dequeue('cat');
    expect(a3.name).toEqual('Oscar');
    expect(a3.species).toEqual('cat');
  });
});
