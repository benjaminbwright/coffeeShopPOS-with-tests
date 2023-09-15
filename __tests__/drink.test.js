const Drink = require('../lib/drink.js');

describe('Drink Class', () => {
  describe('Instantiation', () => {
    // it should be an instance drink object
    it('should be an instance drink object', () => {
      const drink = new Drink();
      expect(drink).toBeInstanceOf(Drink);
    });
    // it should have a name, size & price in dollars
    it('should have a name, size & price in dollars', () => {
      const drink = new Drink('Atomic Blackout', 'Large', 5.75);
      expect(drink.name).toBe('Atomic Blackout');
      expect(drink.price).toBe(5.75);
      expect(drink.size).toBe('Large');
    });
  });
});
