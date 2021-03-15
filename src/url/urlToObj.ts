/**
 * @category url
 * @description 获取url参数,以对象的结果返回
 * @param  {String} url  default: window.location.href
 * @returns {Object}  返回key值对象
 *
 * @example
 * url(http://localhost:4002?a=1&b=2&c=3) => { a: 1, b: 2, c: 3 }
 */
export function urlToObj(str: string = window.location.href) {
  let url: string = str
  let params = Object.create(null)
  if (typeof str !== 'string' || url.indexOf('?') === -1) {
    return params
  }
  let searchPart: string = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (searchPart === '') {
    return {}
  }
  let search: string[] = searchPart.split('&')
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split('=')
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  }
  return params
}
