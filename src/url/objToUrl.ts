/**
 * @category url
 * @desc   obj转url参数
 * @param  {String} baseUrl
 * @param  {Object} obj
 * @return {String}
 */
export function objToUrl(baseUrl: string, obj: { [key: string]: unknown }) {
  let parameters: string = ''
  let url: string = baseUrl
  for (let key in obj) {
    parameters += key + '=' + obj[key] + '&'
  }
  if (parameters) {
    parameters = parameters.replace(/&$/, '')
    if (/\?/.test(baseUrl)) {
      //如果问号不在最后，添加&
      if (!/\?$/.test(baseUrl)) {
        url = url + '&'
      }
      url = url + parameters
    } else {
      url = url.replace(/\/?$/, '?') + parameters
    }
  }
  return url
}
