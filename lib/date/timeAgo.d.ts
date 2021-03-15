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
export default function timeAgo(date: number | string | Date, nowDate?: Date): string;
