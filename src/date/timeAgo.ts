/**
 * @category 日期 date
 * @description 将一个日期格式化为“xx分钟之前”之类的字符串
 * @param {number | string | Date} date
 * @param {Date} [nowDate]
 * @returns { string }
 * @example <pre>
 *   const d = new Date();
     d.setMinutes(d.getMinutes() - 10);
 *   timeAgo.format(d) => "10 分钟前"
 * </pre>
 *  @example <pre>
 *   const d = new Date();
     d.setMinutes(d.getMinutes() + 5);
 *   timeAgo.format(d) => "5 分钟后"
 * </pre>
 */
export default function timeAgo(date: number | string | Date, nowDate: Date = new Date()): string {
  const d = new Date(date)
  const sign = nowDate.getTime() - d.getTime() >= 0 ? 1 : -1
  const diff = Math.abs(nowDate.getTime() - d.getTime())
  const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000))
  const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000))
  const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000))
  const days = Math.floor(diff / (24 * 60 * 60 * 1000))
  const hours = Math.floor(diff / (60 * 60 * 1000))
  const minutes = Math.floor(diff / (60 * 1000))
  const seconds = Math.floor(diff / 1000)
  let index = 0
  let number = 0

  if (seconds === 0) {
    index = 0
    number = 0
  } else if (seconds >= 1 && minutes === 0) {
    index = 1
    number = seconds
  } else if (minutes === 1) {
    index = 2
    number = minutes
  } else if (minutes > 1 && hours === 0) {
    index = 3
    number = minutes
  } else if (hours === 1) {
    index = 4
    number = hours
  } else if (hours > 1 && days === 0) {
    index = 5
    number = hours
  } else if (days === 1) {
    index = 6
    number = days
  } else if (days > 1 && weeks === 0) {
    index = 7
    number = days
  } else if (weeks === 1) {
    index = 8
    number = weeks
  } else if (weeks > 1 && months === 0) {
    index = 9
    number = weeks
  } else if (months === 1) {
    index = 10
    number = months
  } else if (months > 1 && years === 0) {
    index = 11
    number = months
  } else if (years === 1) {
    index = 12
    number = years
  } else {
    index = 13
    number = years
  }

  const tmplPair = locales[index]
  const tmpl = sign > 0 ? tmplPair[0] : tmplPair[1]
  return tmpl.replace(/%s/, String(number))
}

const locales: Array<[string, string]> = [
  ['刚刚', '片刻后'],
  ['%s 秒前', '%s 秒后'],
  ['1 分钟前', '1 分钟后'],
  ['%s 分钟前', '%s 分钟后'],
  ['1 小时前', '1 小时后'],
  ['%s 小时前', '%s 小时后'],
  ['1 天前', '1 天后'],
  ['%s 天前', '%s 天后'],
  ['1 周前', '1 周后'],
  ['%s 周前', '%s 周后'],
  ['1 个月前', '1 个月后'],
  ['%s 个月前', '%s 个月后'],
  ['1 年前', '1 年后'],
  ['%s 年前', '%s 年后'],
]
