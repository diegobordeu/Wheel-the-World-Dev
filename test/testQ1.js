
const assert = require('assert');
const {
  sortAsc,
  sortDesc,
  getTotalSpeed,
} = require('../app');

describe('Testing For question Q1', () =>  {
  
  /**
   * sortAsc, sortDesc is not needed to test as it is a javascript native sorting approche
   * i just did it to set up the testing env
   */
  describe('sortAsc()', () => {
    it('(unit): happy path, expected outcome', () => {
      const outcome = sortAsc(8, 3)
      assert.equal(outcome, 8 - 3);
    });
  });

  describe('sortDesc()', () => {
    it('(unit): happy path, expected outcome', () => {
      const outcome = sortDesc(8, 3)
      assert.equal(outcome, 3 - 8);
    });
  });


  /**
   * it suppose to be integration for calling sortDesc and sortAsc 
   * It is more like a unit testing
   * */
  describe('getTotalSpeed()', () => {
    it('(unit): happy path, fasted = TRUE question example', () => {
      const red = [5, 5, 3, 9, 2];
      const blue = [3, 6, 7, 2, 1];
      const outcome = getTotalSpeed(red, blue, true);
      assert.equal(outcome, 32, 'broken algorithm')
    });

    it('(unit): happy path, fasted = FALSE question example', () => {
      const red = [5, 5, 3, 9, 2];
      const blue = [3, 6, 7, 2, 1];
      const outcome = getTotalSpeed(red, blue, false);
      assert.equal(outcome, 25, 'broken algorithm')
    });

    it('(unit): hard path: plenty of number fasted = FALSE ', () => {
      const red = [1, 3, 6, 4, 9, 5, 3, 2, 1, 0, 0, 0, 40];
      const blue = [20, 1, 4, 7, 8, 2, 56, 1, 2, 0, 2, 0, 4];
      const outcome = getTotalSpeed(red, blue, false);
      assert.equal(outcome, 108, 'broken algorithm')
    });

    it('(unit): hard path: plenty of number fasted = FALSE ', () => {
      const red = [1, 3, 6, 4, 9, 5, 3, 2, 1, 0, 0, 0, 40];
      const blue = [20, 1, 4, 7, 8, 2, 56, 1, 2, 0, 2, 0, 4];
      const outcome = getTotalSpeed(red, blue, true);
      assert.equal(outcome, 169, 'broken algorithm')
    });

    it('(unit): edge case: empity string', () => {
      const outcome = getTotalSpeed([], [], true);
      assert.equal(outcome, 0, 'broken validation')
    });

    it('(integration): edge case Exception: array with different sizes', () => {
      assert.throws(() => getTotalSpeed([1,2], [3], true), TypeError);
      assert.throws(() => getTotalSpeed([3], [1,2], true), TypeError);
    });

    it('(integration): edge case Exception: negative numbers', () => {
      assert.throws(() => getTotalSpeed([1,-2], [3,4], true), TypeError);
      assert.throws(() => getTotalSpeed([3,4], [-1,2], true), TypeError);
    });
  
  });
});