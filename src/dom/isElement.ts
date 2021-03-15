/**
 * @category 文档对象 dom
 * @description 判断一个值是否为元素对象。
 * @param {Any} obj
 * @return {boolean}
 */
export default function isElement(obj: any): boolean {
  return !!(obj && obj.nodeType === 1)
}
