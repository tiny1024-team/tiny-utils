/**
 * @category 日期 date
 * @description 返回日期间的天数
 * @param {number | string | Date} dateInitial
 * @param {number | string | Date} dateFinal
 * @returns {number| string}
 * @example <pre>
 *   import { getDaysDiffBetweenDates } from 'tiny-utils'
 *   import { dateType } from 'tiny-utils/lib/date'
 *   getDaysDiffBetweenDates('2021/02/19', '2021/02/25') => 6
 *   getDaysDiffBetweenDates(1613836800000, 1612886400000) => -11
 *   getDaysDiffBetweenDates(new Date('2021/02/19 00:00:00.000'), new Date('2021/02/20 23:59:59:999')) => 1
 * </pre>
 */
export default function getDaysDiffBetweenDates(
  dateBegin: dateType,
  dateEnd: dateType,
): number | string {
  let dateInitial: dateType = dateBegin
  let dateFinal: dateType = dateEnd
  if (typeof dateInitial === 'string' || typeof dateFinal === 'string') {
    dateInitial = new Date(dateInitial)
    dateFinal = new Date(dateFinal)
    if (!isValidDate(dateInitial) || !isValidDate(dateFinal)) {
      return 'Invalid Date'
    }
  }
  return Math.floor((+dateFinal - +dateInitial) / (1000 * 3600 * 24))
}

export type dateType = number | string | Date

//校验是否是有效的日期
function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime())
}
