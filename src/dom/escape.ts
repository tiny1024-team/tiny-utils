import { IMap } from '../types/interface'
const REG_ESCAPE: RegExp = /[&<>'"]/g
const MAP_ESCAPE: IMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }

/**
 * @category 文档对象 dom
 * @description html转码解析
 * @param {String} str
 * @return {String | null } str
 */
export default function escapeHTML(str: string): String | null {
  return str
    ? REG_ESCAPE.test(str!)
      ? str.replace(REG_ESCAPE, (char: string) => MAP_ESCAPE[char])
      : str
    : null
}
