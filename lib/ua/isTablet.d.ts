/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是tablet
 * @returns Boolean 返回boolean值，true 是tablet，false 不是
 *
 * @example
 * isTablet() => true
 */
declare const isTablet: (ua?: string | undefined) => boolean;
export default isTablet;
