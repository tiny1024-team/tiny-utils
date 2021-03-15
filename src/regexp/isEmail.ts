/**
 * @category 正则校验 regexp
 * @description 判断是否是邮箱
 * @param {string} str
 * @returns {Boolean}
 * @example
 * <pre>
 *   isEmail('hl.shen@shunwang.com') => true
 *   isEmail('hl.she') => false
 * </pre>
 */
export function isEmail(str: string): boolean {
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str)
}
