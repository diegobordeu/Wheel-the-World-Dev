
const assert = require('assert');
const {
  minimunNumberCoins,
} = require('../q2');

describe('Testing For question Q2', () =>  {

  describe('minimunNumberCoins()', () => {
    it('(unit): happy path, question proposed example', () => {
      const outcome = minimunNumberCoins([1,5,10], 7)
      assert.equal(outcome, 3, 'broken algorithm')
    });

    it('(unit): algorithm: coins 1,3,4,6          n = 10  ans = 2 (2+6)', () => {
      const outcome = minimunNumberCoins([1,3,4,6], 10)
      assert.equal(outcome, 2, 'broken algorithm')
    });

    it('(unit): algorithm: coins 3,5,10           n = 10  ans = 1 (10)', () => {
      const outcome = minimunNumberCoins([3,5,10], 10)
      assert.equal(outcome, 1, 'broken algorithm')
    });

    it('(unit): algorithm: coins 1,2,3,4,5,15,    n = 37  ans = 4 (15+15+3+4)', () => {
      const outcome = minimunNumberCoins([1,2,3,4,5,15], 37)
      assert.equal(outcome, 4, 'broken algorithm')
    });

    it('(unit): algorithm: coins 1,2,7,4,5,15,    n = 37  ans = 3 (15+15+7)', () => {
      const outcome = minimunNumberCoins([1,2,7,4,5,15], 37)
      assert.equal(outcome, 3, 'broken algorithm')
    });

    it('(unit): algorithm: coins 1,6,9,10,5,15,   n = 37  ans = 4 (15+15+1+6)', () => {
      const outcome = minimunNumberCoins([1,6,9,10,5,15], 37)
      assert.equal(outcome, 4, 'broken algorithm')
    });

    it('(unit): hard path, coins order should not break the algorithim', () => {
      const outcome = minimunNumberCoins([15,5,10,9,6,1], 37)
      assert.equal(outcome, 4, 'broken algorithm')
    });

    it('(unit): edge case: if not possible, should return -1', () => {
      const outcome = minimunNumberCoins([7, 15], 10)
      assert.equal(outcome, -1, 'broken algorithm')
    });

    it('(unit): edge case: if not possible, should return -1', () => {
      const outcome = minimunNumberCoins([3], 2)
      assert.equal(outcome, -1, 'broken algorithm')
    });

    it('(unit): edge case: empty array', () => {
      const outcome = minimunNumberCoins([], 1)
      assert.equal(outcome, -1, 'broken algorithm')
    });

    it('(unit): edge case: n = 0', () => {
      const outcome = minimunNumberCoins([1], 0)
      assert.equal(outcome, 0, 'broken algorithm')
    });

    it('(integration): edge case: wrong parametes: negatice coins', () => {
      assert.throws(() => minimunNumberCoins([-1], 1), TypeError);
    });

    it('(integration): edge case: wrong parametes: negative n', () => {
      assert.throws(() => minimunNumberCoins([1], -1), TypeError);
    });
  
  });
});