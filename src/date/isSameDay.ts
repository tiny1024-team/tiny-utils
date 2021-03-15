/**
 * @category 日期 date
 * @description 判断是否为同一天
 * @param {Date} a
 * @param {Date} b
 * @returns {boolean}
 * @example <pre>
 *   isSameDay(new Date('2021/02/20 00:00:00.000'), new Date('2021/02/20 23:59:59:999')) => true
 * </pre>
 */
export default function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}
