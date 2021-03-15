/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是mac
 * @returns Boolean 返回boolean值，true 是mac，false 不是
 *
 * @example
 * isMacOS() => true
 */
declare const isMacOS: (ua?: string | undefined) => boolean;
export default isMacOS;
