import isWindow from './isWindow'
import isElement from './isElement'

export interface Viewport {
  width: number
  height: number
}

/**
 * @category 文档对象 dom
 * @description 获取一个元素或window的视口宽度和高度
 * @param {Element|Window} [elOrWindow]
 * @return {width:Number,height:Number}
 * @example <pre>
 *   import { viewport } from 'tiny-utils'
 *   import { Viewport } from 'tiny-utils/lib/dom'
 *   viewport()  => { width: 1920, height: 1080 }
 * </pre>
 */
export default function viewport(elOrWindow: Element | Window): Viewport {
  let width = 0
  let height = 0

  if (isWindow(elOrWindow)) {
    const win = elOrWindow as Window
    width = win.innerWidth || /* istanbul ignore next */ win.document.documentElement.clientWidth
    height = win.innerHeight || /* istanbul ignore next */ win.document.documentElement.clientHeight
  } else if (isElement(elOrWindow)) {
    const el = elOrWindow as Element
    width = el.clientWidth
    height = el.clientHeight
  }

  return { width, height }
}
