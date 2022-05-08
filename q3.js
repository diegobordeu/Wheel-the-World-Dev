/**
 * array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
]
Sample Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
with n != m

[1, 3, 4, 10],
[2, 5, 9, 11],
[6, 8, 12, 18],
[7, 13, 17, 19],
[14, 16, 20, 23]
[15, 21, 22, 24]

[1, 3, 4, 10, 11, 18],
[2, 5, 9, 12, 17, 19],
[6, 8, 13, 16, 20 22],
[7, 14, 15, 21, 22, 23],

ResolveTop = [(0, 1), (-1, 0)]
ResolveBottom = [(-1, 0), (0, 1)]

algorithm pseudocode:
visit 0,0
direction = -1 // going down
delta = (1, 1) 1 in row, 1 on col
finished = False
while not finished:
    finished = True
    resolver = direction === -1 ? ResolveBottom : ResolveTop
    delta =* direction
    while canMove(delta):
        move(delta, array, finished)
    for movement in resolver:
        if canMove(movement):
            move(movement, array, finished)
            continue
    direction *= -1
 */

const moveTo = (pos, delta, matrix, response, finished) => {
  pos = [pos[0] + delta[0], pos[1] + delta[1]];
  response.push(matrix[pos[0]][pos[1]]);
  finished = false;
}

const canMove = (pos, delta, matrix, visited) => {
  const newRow = pos[0] + delta[0];
  const newCol = pos[1] + delta[1];
  if (newRow < 0 || newRow === matrix.length || newCol < 0 || newCol === matrix[0].length) {
    return false;
  }
  if (visited[newRow][newCol]) return false;
  return true;
}

const doTheZigZagThing = (matrix) => {
  const initRow = new Array(matrix[0].length).fill(false);
  const visited = new Array(matrix.length).fill(initRow);
  console.log(visited);
  const resolveTop = [(0, 1), (-1, 0)];
  const resolveBottom = [(-1, 0), (0, 1)];
  let direction = -1;
  const pos = [0, 0];
  let delta = [1, 1];
  const response = [];
  response.push(matrix[pos[0]][pos[1]]);
  
  let finished = false;
  while (!finished) {
    finished = true;
    const resolver = direction === -1 ? resolveTop : resolveBottom;
    delta = [delta[0] * direction, delta[1] * direction]
    while (canMove(pos, delta, matrix, visited)) {
      move(pos, delta, matrix, response, finished);
    }
    for (const movement of resolver) {
      if (canMove(pos, movement, matrix, visited)) {
        move(pos, movement, matrix, response, finished);
        break;
      }
    }
    direction *= -1
  }
  return response;
}

const matrix = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
]

const res = doTheZigZagThing(matrix);
console.log(matrix);
