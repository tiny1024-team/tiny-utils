import isType from './util/isType'

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否微信
 * @returns Boolean 返回boolean值，true 是微信，false 不是
 *
 * @example
 * isWechat() => true
 */
const isWechat = isType('WeChat')

export default isWechat
