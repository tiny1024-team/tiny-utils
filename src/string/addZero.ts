/**
 * @category 字符 string
 * @function 数字补零操作
 * @param {(number | string)} value  值
 * @param {number} [digits] - 位数
 * @return {string}
 * @example
 * <pre>
 *   addZero(5) => '05'
 *   addZero(10) => '10'
 *   addZero(5, 3) => '005'
 * </pre>
 */
export function addZero(value: number | string, digits?: number) {
  let digit = digits || 2

  let isNegative = Number(value) < 0
  let buffer = value.toString()
  let size = 0

  // Strip minus sign if number is negative
  if (isNegative) {
    buffer = buffer.slice(1)
  }

  size = digit - buffer.length + 1
  buffer = new Array(size).join('0').concat(buffer)

  // Adds back minus sign if needed
  return (isNegative ? '-' : '') + buffer
}
