/**
 * @category 日期 date
 * @param date Date 需要格式化的日期
 * @param fmt string 指定的格式
 * @description
 * <pre>
 *   dateFormat 将 Date 转化为指定格式的 String
 * // 月(M)、日(d/D)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 // 年(y/Y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * </pre>
 * @example <pre>
 *   dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss') => '2021-02-20 15:16:20'
 *   dateFormat(new Date(),'YY-M-DD H:m:s.S') => '21-2-20 15:16:20.404'
 * </pre>
 */
export default function dateFormat(date: Date, fmt: string) {
  //校验是否为日期对象
  if (!(date instanceof Date)) {
    return ''
  }
  let o: { [keyName: string]: number } = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'D+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'H+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  }
  if (/(y+|Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? String(o[k]) : ('00' + o[k]).substr(('' + o[k]).length),
      )
  return fmt
}
