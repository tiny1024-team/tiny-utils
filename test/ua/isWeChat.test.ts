import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weixin, weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android,ios } from '../constants'

const { isWeChat } = utils
describe('isWeChat', () => {
  test('utils.isWeChat is a Function', () => {
    expect(isWeChat).toBeInstanceOf(Function)
  })

  test('utils.isWeChat() for ua', () => {
    expect(isWeChat()).toBe(false)
    expect(isWeChat(weixin)).toBe(true)
    expect(isWeChat(weishi)).toBe(false)
    expect(isWeChat(qqLiveBrowser)).toBe(false)
    expect(isWeChat(qq)).toBe(false)
    expect(isWeChat(qqNews)).toBe(false)
    expect(isWeChat(ipad)).toBe(false)
    expect(isWeChat(iphone)).toBe(false)
    expect(isWeChat(android)).toBe(false)
    expect(isWeChat(ios)).toBe(false)
  })
})
