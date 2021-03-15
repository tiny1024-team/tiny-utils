/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否windows
 * @returns Boolean 返回boolean值，true 是windows，false 不是
 *
 * @example
 * isWechat() => true
 */
declare const isWindows: (ua?: string | undefined) => boolean;
export default isWindows;
