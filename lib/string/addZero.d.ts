/**
 * @category 字符 string
 * @function 数字补零操作
 * @param {(number | string)} value  值
 * @param {number} [digits] - 位数
 * @return {string}
 * @example
 * <pre>
 *   addZero(5) => '05'
 *   addZero(10) => '10'
 *   addZero(5, 3) => '005'
 * </pre>
 */
export declare function addZero(value: number | string, digits?: number): string;
