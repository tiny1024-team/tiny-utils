//判断是否是游览器
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

interface TestMap {
  [key: string]: RegExp
}

const testMap: TestMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Linux: /Linux|X11/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  Mobile: /Mobi|iPh|480/,
  Tablet: /Tablet|Pad|Nexus 7/,
  WeChat: /MicroMessenger/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/,
}
const userAgent = isBrowser ? window.navigator.userAgent : ''

export default function (type: string): (ua?: string) => boolean {
  return function (ua: string = userAgent): boolean {
    return testMap[type].test(ua)
  }
}
