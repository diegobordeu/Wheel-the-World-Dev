/**
 * n = 7
 * denoms = [1, 5, 10]  The SMALLEST way
 * Dinamic Programing
 * target coins -> 0, 1, 2, 3, 4, 5, 6, 7  -> f(target) = number of ways
 * staring case Infinity was
 * ways = Inf, Inf, ..... Inf
 * ways[0] = 1 -> Samllest way of doing 0 as a target amount is not use any coin at all
 * ways = 1, Inf, ..... Inf
 * 
 * Lets check all the ways that we can make any possible target < n with the smallest coin
 * coin = 1 since i is always les or equal that n, and n % 1 == 0 for any n -> the min ways achieve this is 1
 * In other words if n % coin == 0 -> f(n, coin) = 1 where f() is the min ways to achive n
 *                             n => 0, 1, 2 
 * coin = 1 => way to achive f() => 1, 1, 1.... 1
 * 
 * We have to notice that n can be achieved at it follows
 * (1 time with any n % coin == 0 ) 
 * and f(n - coin) {all the possible ways to do n - coin} + 1 {adding that coin to the sum}
 * 
 * beacause we are looking for min possible ways =>
 * f(target) = min(f(target - coin) + 1, target / coin ? (coin < target && target % coin === 0 ) : Inf )
 * 
 * so we iterate n (0 => n) and coin in coins
 * n   => 0, 1, 2, 3, 4, 5, 6, 7
 * way => 1, inf, inf, inf ...inf
 * 
 * coin = 1
 * ways => 1, min(1, 1 + ways[1-1]), min(2, 1 + ways[2-1]), min(3, 1 + ways[3-1]).... min(7, 1 + ways[7-1])
 * ways = 1, 1, 2, 3, 4, 5, 6, 7
 * coin = 5       note that n % 5 == 0 olny with n = 5
 * 
 * n   => 0, 1, 2, 3, 4,                 5,                     6,                    7
 * ways = 1, 1, 1, 1, 1, min(1, 1+ways[0]), min(inf, 1 + ways[1]), min(inf, 1 + ways[2])
 * 
 * n   => 0, 1, 2, 3, 4, 5, 6, 7
 * ways = 1, 1, 2, 3, 4, 1, 2, 3
 * 
 * Sience coin 10 < 7  target / coin ? (target % coin === 0 ) : Inf will be Inf allways
 * n = 5 => 5
 * n = 6 => 5 + 1
 * n = 7 => 5 + 1 + 1
 *  
 *  
 * 
 */
