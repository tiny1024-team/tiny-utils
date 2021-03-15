/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是IOS
 * @returns Boolean 返回boolean值，true 是IOS，false 不是
 *
 * @example
 * isIOS() => true
 */
declare const isIOS: (ua?: string | undefined) => boolean;
export default isIOS;
