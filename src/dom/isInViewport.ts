import isElement from './isElement'
import viewport from './viewport'

/**
 * @category 文档对象 dom
 * @description 判断一个元素是否位于视口（浏览器可视区域）内。
 * @param {Element} el
 * @return {boolean}
 */
export default function isInViewport(el: Element): boolean {
  if (!isElement(el)) return false

  const { top, left, right, bottom } = el.getBoundingClientRect()
  const { width, height } = viewport(window)

  return !(top < 0 || bottom > height || left < 0 || right > width)
}
