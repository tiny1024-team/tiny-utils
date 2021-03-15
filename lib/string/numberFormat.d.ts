/**
 * @category 字符 string
 * @function 格式化一个数值
 * @param {number} number  值
 * @param {number} [digits=-1]  保留的小数位数，如果为-1则表示保留所有小数位数，如果该值> -1，则保留的最后一位为四舍五入所得
 * @param {string} [dot = "."]  整数与小数部分的分隔符
 * @param {string} [sep = ","]  千分位分隔符
 * @return {string}
 * @example
 * numberFormat(3.1415) => 3.1415
 * @example
 * numberFormat(3.1415, 3) => 3.142
 */
export declare function numberFormat(number: number, digits?: number, dot?: string, sep?: string): string;
