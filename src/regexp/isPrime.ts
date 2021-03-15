/**
 * @category 正则校验 regexp
 * @description 判断是否是质数
 * @param {Number} num
 * @returns {Boolean}
 */
export function isPrime(num: number): boolean {
  const boundary = Math.floor(Math.sqrt(num))
  for (var i = 2; i <= boundary; i++) if (num % i == 0) return false
  return num >= 2
}
