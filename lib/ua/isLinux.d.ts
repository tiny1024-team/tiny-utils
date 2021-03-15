/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是linux
 * @returns Boolean 返回boolean值，true 是linux，false 不是
 *
 * @example
 * isLinux() => true
 */
declare const isLinux: (ua?: string | undefined) => boolean;
export default isLinux;
