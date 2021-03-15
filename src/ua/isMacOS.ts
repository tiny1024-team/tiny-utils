import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是mac
 * @returns Boolean 返回boolean值，true 是mac，false 不是
 *
 * @example
 * isMacOS() => true
 */
const isMacOS = isType('MacOS')

export default isMacOS
