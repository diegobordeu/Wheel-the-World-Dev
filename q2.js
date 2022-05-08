/**
 * n = 7
 * denoms = [1, 5, 10]  The SMALLEST number of coins
 * Dinamic Programing
 * target coins -> 0, 1, 2, 3, 4, 5, 6, 7  -> f(target) = number of coins
 * staring case Infinity
 * numOfCoins = Inf, Inf, ..... Inf
 * numOfCoins[0] = 0 -> In order to do 0, 0 conis are needed
 * ways = 0, Inf, ..... Inf
 * 
 * Lets check all the minimun coins to make any possible target < n:
 * There are 3 posible combinations to sum up a number = targetNum
 * (1) numOfCoins[targetNum]  => this means the previos combination; with do not add any coin
 * (2) targetNum / coin  =>  targetNum = 6  coin = 2 => 3 coins needed
 * (3) numOfCoins[targetNum - coin] + 1  => adding that coin to the minimun combination of [targetNum - coin]
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
 * coin = 5       note that n % 5 == 0 olny with n = 5
 * 
 * n   => 0, 1, 2, 3, 4,                  5,                     6,                   7
 * ways = 0, 1, 2, 3, 4, min(5,1,1+ways[0]), min(6,inf,1+ways[1]), min(7,inf,1+ways[2])
 * 
 * n   => 0, 1, 2, 3, 4, 5, 6, 7
 * ways = 1, 1, 2, 3, 4, 1, 2, 3
 * 
 * Sience coin 10 < 7  target / coin ? (target % coin === 0 ) : Inf will be Inf allways
 * n = 5 => 5
 * n = 6 => 5 + 1
 * n = 7 => 5 + 1 + 1   3 time is the answer
 */

const minimunNumberCoins = (denoms, n) => {
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
    console.log(minNumberOfCoins);
  }
}

minimunNumberCoins([1,5,10], 7);
