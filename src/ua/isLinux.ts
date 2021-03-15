import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是linux
 * @returns Boolean 返回boolean值，true 是linux，false 不是
 *
 * @example
 * isLinux() => true
 */
const isLinux = isType('Linux')

export default isLinux
