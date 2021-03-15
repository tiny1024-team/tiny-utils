import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是tablet
 * @returns Boolean 返回boolean值，true 是tablet，false 不是
 *
 * @example
 * isTablet() => true
 */
const isTablet = isType('Tablet')

export default isTablet
