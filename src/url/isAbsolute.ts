/**
 * @category url
 * @function 判断url是否是一个绝对 URL
 * @param {string} url
 * @return {boolean}
 * @example
 * isAbsolute('baidu.com') => false
 * @example
 * isAbsolute('https://www.baidu.com') => true
 */
export default function isAbsolute(url: string): boolean {
  return isString(url) && /^https?:\/\//.test(url)
}

//判断传入是否是字符类型
const isString = (o: unknown): boolean => Object.prototype.toString.call(o) === `[object String]`
