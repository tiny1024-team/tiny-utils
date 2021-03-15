/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是安卓
 * @returns { Boolean } 返回boolean值，true 是安卓，false 不是
 *
 * @example
 * isAndroid() => true
 */
declare const isAndroid: (ua?: string | undefined) => boolean;
export default isAndroid;
