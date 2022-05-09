/**
 * array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
]
Sample Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

ResolveTop = [[0, 1], [1, 0]];
ResolveBottom = [[1, 0], [0, 1]];

algorithm pseudocode:
visit 0,0
direction = -1 // going down
delta = (-1, 1) -1 in row, 1 on col
finished = False
while not finished:
    finished = True
    resolver = delta[0] === -1 ? ResolveBottom : ResolveTop
    delta =* direction
    while canMove(delta):
        move(delta, array, finished)
    for movement in resolver:
        if canMove(movement):
            move(movement, array, finished)
            continue
 */

const moveTo = (matrix, state, delta) => {
  state.pos = [state.pos[0] + delta[0], state.pos[1] + delta[1]];
  state.response.push(matrix[state.pos[0]][state.pos[1]]);
  state.finished = false;
}

const canMove = (matrix, state, delta) => {
  const newRow = state.pos[0] + delta[0];
  const newCol = state.pos[1] + delta[1];
  if (newRow < 0 || newRow === matrix.length || newCol < 0 || newCol === matrix[0].length) {
    return false;
  }
  return true;
}

const doTheZigZagThing = (matrix) => {
  if (!Array.isArray(matrix) || matrix.length === 0) throw new TypeError('matrix has to be 2D and non empty');
  if (!Array.isArray(matrix[0]) || matrix[0].length === 0) throw new TypeError('matrix has to be 2D and non empty')
  const resolveTop = [[0, 1], [1, 0]];
  const resolveBottom = [[1, 0], [0, 1]];
  let direction = -1;
  const delta = [-1, 1];
  const state = { finished: false, response: [matrix[0][0]], pos: [0, 0] };
  while (!state.finished) {
    state.finished = true;
    const resolver = delta[0] === 1 ? resolveTop : resolveBottom;
    delta[0] = delta[0] * direction;
    delta[1] = delta[1] * direction;
    while (canMove(matrix, state, delta)) moveTo(matrix, state, delta);
    for (const movement of resolver) {
      if (canMove(matrix, state, movement)) {
        moveTo(matrix, state, movement);
        break;
      }
    }
  }
  return state.response;
}


module.exports = {
  moveTo,
  canMove,
  doTheZigZagThing,
}
