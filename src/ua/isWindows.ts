import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否windows
 * @returns Boolean 返回boolean值，true 是windows，false 不是
 *
 * @example
 * isWechat() => true
 */
const isWindows = isType('Windows')

export default isWindows
