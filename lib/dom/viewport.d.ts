export interface Viewport {
    width: number;
    height: number;
}
/**
 * @category 文档对象 dom
 * @description 获取一个元素或window的视口宽度和高度
 * @param {Element|Window} [elOrWindow]
 * @return {width:Number,height:Number}
 * @example <pre>
 *   import { viewport } from 'tiny-tools'
 *   import { Viewport } from 'tiny-tools/lib/dom'
 *   viewport()  => { width: 1920, height: 1080 }
 * </pre>
 */
export default function viewport(elOrWindow: Element | Window): Viewport;
