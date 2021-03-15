/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是mobile
 * @returns Boolean 返回boolean值，true 是mobile，false 不是
 *
 * @example
 * isMobile() => true
 */
declare const isMobile: (ua?: string | undefined) => boolean;
export default isMobile;
