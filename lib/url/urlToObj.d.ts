/**
 * @category url
 * @description 获取url参数,以对象的结果返回
 * @param  {String} url  default: window.location.href
 * @returns {Object}  返回key值对象
 *
 * @example
 * url(http://localhost:4002?a=1&b=2&c=3) => { a: 1, b: 2, c: 3 }
 */
export declare function urlToObj(str?: string): any;
