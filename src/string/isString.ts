/**
 * @category 字符 string
 * @function 数字补零操作
 * @param {unknown} value  值
 * @return {boolean}
 * @example
 * isString(5) => false
 * @example
 * isString('111') => true
 */
export function isString(value: unknown): boolean {
  const _toString = Object.prototype.toString
  const type: string = _toString.call(value).split(' ')[1].replace(']', '')
  return type.toLowerCase() === 'string'
}
