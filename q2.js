/**
 * n = 7
 * denoms = [1, 5, 10]  The SMALLEST number of coins
 * Dynamic Programing
 * target coins -> 0, 1, 2, 3, 4, 5, 6, 7  -> f(target) = number of coins
 * staring case Infinity
 * numOfCoins = Inf, Inf, ..... Inf
 * numOfCoins[0] = 0 -> In order to do 0, 0 conis are needed
 * ways = 0, Inf, ..... Inf
 * 
 * Lets check all the minimum coins to make any possible target < n:
 * There are 3 possible combinations to sum up a number = targetNum
 * (1) numOfCoins[targetNum]  => this means the previous combination; we do not add any coin
 * (2) targetNum / coin  =>  targetNum = 6  coin = 2 => 3 coins needed
 * (3) numOfCoins[targetNum - coin] + 1  => adding that coin to the minimum combination of [targetNum - coin]
 * 
 * Finally 
 * numOfCoins[targetNum] = min(numOfCoins[targetNum], targetNum / coin, numOfCoins[targetNum - coin] + 1)
 * 
 * so we iterate n (0 => n) and coin in coins
 * n   => 0, 1, 2, 3, 4, 5, 6, 7
 * way => 0, inf, inf, inf ...inf
 * 
 * coin = 1
 * ways => 0, min(inf,1,1 + ways[1-1]), min(inf,2, 1 + ways[2-1]), .... min(inf,7, 1 + ways[7-1])
 * ways = 0, 1, 2, 3, 4, 5, 6, 7
 * coin = 5       note that n % 5 == 0 only with n = 5
 * 
 * n   => 0, 1, 2, 3, 4,                  5,                     6,                   7
 * ways = 0, 1, 2, 3, 4, min(5,1,1+ways[0]), min(6,inf,1+ways[1]), min(7,inf,1+ways[2])
 * 
 * n   => 0, 1, 2, 3, 4, 5, 6, 7
 * ways = 1, 1, 2, 3, 4, 1, 2, 3
 * 
 * Since coin 10 < 7  target / coin ? (target % coin === 0 ) : Inf will be Inf always
 * n = 5 => 5
 * n = 6 => 5 + 1
 * n = 7 => 5 + 1 + 1   3 time is the answer
 */



/**
 * Time complexity O(n x m)
 * Space Complexity O(n x m)
 * where n is n and m is the length of the denoms array
 * @param {Object[number]} denoms 
 * @param {number} n 
 * @returns {number}
 */
const minimunNumberCoins = (denoms, n) => {
  checkInput(denoms, n);
  const minNumberOfCoins = new Array(n + 1).fill(Infinity);
  minNumberOfCoins[0] = 0 // min ways of doing 0 = 1; dont use any coin (Base case in our Dinimic Programing approach)
  for (const coin of denoms) {
    if (coin > n) continue;
    for (const targetWay in minNumberOfCoins) {
      const sumCombo = targetWay - coin >= 0 ? minNumberOfCoins[targetWay - coin] + 1 : Infinity // (3)
      const newCombo = targetWay % coin === 0 ? targetWay / coin : Infinity // (2)
      const previousCombo = minNumberOfCoins[targetWay] // (1)
      minNumberOfCoins[targetWay] = Math.min(
        sumCombo,
        newCombo,
        previousCombo,
      )
    }
  }
  const res = minNumberOfCoins[minNumberOfCoins.length - 1]
  return res !== Infinity ? res : -1
}

const checkInput = (coins, n) => {
  if (n < 0) throw new TypeError('n can not be negative');
  if (Math.min(...coins) <= 0) throw new TypeError('all coins should be non zero positives');
}

module.exports = {
  minimunNumberCoins,
}

/*
More test cases:
coins 1,3,4,6          n = 10  ans = 2 (2+6)
coins 3,5,10           n = 10  ans = 1 (10)
coins 1,2,3,4,5,15,    n = 37  ans = 4 (15+15+3+4)
coins 1,2,7,4,5,15,    n = 37  ans = 3 (15+15+7)
coins 1,6,9,10,5,15,   n = 37  ans = 4 (15+15+1+6)
*/
