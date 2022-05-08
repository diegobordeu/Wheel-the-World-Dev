
const assert = require('assert');
const {
  sortAsc,
  sortDesc,
  getTotalSpeed,
} = require('../app');

describe('Testing For question Q1', () =>  {
  
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
  
});