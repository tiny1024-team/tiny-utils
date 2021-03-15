/**
 * @category 日期 date
 * @description 返回日期间的天数
 * @param {number | string | Date} dateInitial
 * @param {number | string | Date} dateFinal
 * @returns {number| string}
 * @example <pre>
 *   import { getDaysDiffBetweenDates } from 'tiny-tools'
 *   import { dateType } from 'tiny-tools/lib/date'
 *   getDaysDiffBetweenDates('2021/02/19', '2021/02/25') => 6
 *   getDaysDiffBetweenDates(1613836800000, 1612886400000) => -11
 *   getDaysDiffBetweenDates(new Date('2021/02/19 00:00:00.000'), new Date('2021/02/20 23:59:59:999')) => 1
 * </pre>
 */
export default function getDaysDiffBetweenDates(dateBegin: dateType, dateEnd: dateType): number | string;
export declare type dateType = number | string | Date;
