import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是mobile
 * @returns Boolean 返回boolean值，true 是mobile，false 不是
 *
 * @example
 * isMobile() => true
 */
const isMobile = isType('Mobile')

export default isMobile
