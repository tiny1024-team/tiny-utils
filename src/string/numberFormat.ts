/**
 * @category 字符 string
 * @function 格式化一个数值
 * @param {number} number  值
 * @param {number} [digits=-1]  保留的小数位数，如果为-1则表示保留所有小数位数，如果该值> -1，则保留的最后一位为四舍五入所得
 * @param {string} [dot = "."]  整数与小数部分的分隔符
 * @param {string} [sep = ","]  千分位分隔符
 * @return {string}
 * @example
 * numberFormat(3.1415) => 3.1415
 * @example
 * numberFormat(3.1415, 3) => 3.142
 */
export function numberFormat(number: number, digits = -1, dot = '.', sep = ','): string {
  if (!isNumber(number)) {
    return ''
  }
  const tenExp = Math.pow(10, digits)
  let result = number >= 0 ? '' : '-'
  let decPartStr

  if (digits > -1) {
    number = Math.round(number * tenExp) / tenExp
  }
  const abs = Math.abs(number)
  const intPart = Math.floor(abs)
  const decPart = (abs * tenExp - intPart * tenExp) / tenExp

  const intPartStr = intPart.toString()

  if (decPart === 0) {
    decPartStr = ''
  } else {
    decPartStr = decPart.toString().slice(2)
  }

  if (digits > -1) {
    for (let i = 0; i < digits; i++) {
      if (!decPartStr[i]) {
        decPartStr += '0'
      }
    }
    decPartStr = decPartStr.slice(0, digits)
  }

  const intLen = intPartStr.length
  const start = intLen % 3
  for (let i = 0; i < intLen; i++) {
    result += intPartStr[i]
    if ((i + 1 - start) % 3 === 0 && i !== intLen - 1) {
      result += sep
    }
  }

  if (decPartStr) {
    result += dot
    result += decPartStr
  }

  return result
}

//判断传入是否是数字类型
const isNumber = (o: unknown): boolean => Object.prototype.toString.call(o) === `[object Number]`
