
const assert = require('assert');
const {
  moveTo,
  canMove,
  doTheZigZagThing,
} = require('../q3');

describe('Testing For question Q3', () =>  {

  describe('moveTo()', () => {
    it('(unit): happy path expected ocutome', () => {
      const state = {
        pos: [0,0],
        response: [],
        finshed: true,
      }
      const matrix = [[1,2],[3,4]]
      const delta = [1,1]
      moveTo(matrix, state, delta)
      assert.deepEqual(state.pos, [1,1]);
      assert.deepEqual(state.response, [4])
    });

    it('(unit): happy path, new direction', () => {
      const state = {
        pos: [1,1],
        response: [4],
        finished: true,
      }
      const matrix = [[1,2],[3,4]]
      const delta = [-1,-1]
      moveTo(matrix, state, delta)
      assert.deepEqual(state.pos, [0,0]);
      assert.deepEqual(state.response, [4, 1])
      assert.equal(state.finished, false);
    });

  });

  describe('canMove()', () => {
    it('(unit): must return false with movements out ranges', () => {
      const state = {
        pos: [1,1],
        response: [],
        finshed: true,
      }
      const matrix = [[1,2],[3,4]]
      const delta = [1,1]
      const outcome = canMove(matrix, state, delta)
      assert.deepEqual(outcome, false);
    });

    it('(unit): must return false with movements out ranges 2', () => {
      const state = {
        pos: [1,0],
        response: [],
        finshed: true,
      }
      const matrix = [[1,2],[3,4]]
      const delta = [1,0]
      const outcome = canMove(matrix, state, delta)
      assert.deepEqual(outcome, false);
    });

    it('(unit): must return false with movements out ranges 3', () => {
      const state = {
        pos: [0,0],
        response: [],
        finshed: true,
      }
      const matrix = [[1,2],[3,4]]
      const delta = [0,-1]
      const outcome = canMove(matrix, state, delta)
      assert.deepEqual(outcome, false);
    });

    it('(unit): must return true with movements inside ranges', () => {
      const state = {
        pos: [1,1],
        response: [],
        finshed: true,
      }
      const matrix = [[1,2],[3,4]]
      const delta = [-1,-1]
      const outcome = canMove(matrix, state, delta)
      assert.deepEqual(outcome, true);
    });
  });

  describe('doTheZigZagThing()', () => {
    it('(integration): expected outcome with matrix n x m where n == m', () => {
      const matrix = [
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16],
      ]
      const outcome = doTheZigZagThing(matrix);
      const expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
      assert.deepEqual(outcome, expected);
    });
    
    it('(integration): expected outcome with matrix n x m where n > m', () => {
      const matrix = [
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 18],
        [7, 13, 17, 19],
        [14, 16, 20, 23],
        [15, 21, 22, 24],
      ];
      const outcome = doTheZigZagThing(matrix);
      const expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
      assert.deepEqual(outcome, expected);
    });
    
    it('(integration): expected outcome with matrix n x m where n < m', () => {
      const matrix = [
        [1, 3, 4, 10, 11, 18],
        [2, 5, 9, 12, 17, 19],
        [6, 8, 13, 16, 20, 23],
        [7, 14, 15, 21, 22, 24],
      ]
      const outcome = doTheZigZagThing(matrix);
      const expected = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
      assert.deepEqual(outcome, expected);
    });

    it('(integration): edge case, matrix 1 x 1', () => {
      const matrix = [
        [1]
      ]
      const outcome = doTheZigZagThing(matrix);
      const expected = [1];
      assert.deepEqual(outcome, expected);
    });

    it('(integration): input check matrix can not be empty and 2D', () => {      
      assert.throws(() => doTheZigZagThing([]), TypeError);
      assert.throws(() => doTheZigZagThing([[]]), TypeError);
    });
  });
});