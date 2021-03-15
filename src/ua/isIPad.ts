import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是IPad
 * @returns Boolean 返回boolean值，true 是IPad，false 不是
 *
 * @example
 * isIPad() => true
 */
const isIPad = isType('IPad')

export default isIPad
