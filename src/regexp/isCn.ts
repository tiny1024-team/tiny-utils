/**
 * @category 正则校验 regexp
 * @description 判断是否是包含中文
 * @param {string} str
 * @returns {Boolean}
 * @example
 * <pre>
 *   isCn('cn') => false
 *   isCn('中文') => true </pre>
 */
export function isCn(str: string): boolean {
  return /[\u4E00-\u9FA5]/.test(str)
}
