import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android } from '../constants'
const { isIPhone } = utils
describe('isIphone', () => {
  test('utils.isIphone is a Function', () => {
    expect(isIPhone).toBeInstanceOf(Function)
  })

  test('utils.isIPhone() for ua', () => {
    expect(isIPhone()).toBe(false)
    expect(isIPhone(weishi)).toBe(false)
    expect(isIPhone(qqLiveBrowser)).toBe(false)
    expect(isIPhone(qq)).toBe(false)
    expect(isIPhone(qqNews)).toBe(true)
    expect(isIPhone(ipad)).toBe(false)
    expect(isIPhone(iphone)).toBe(true)
    expect(isIPhone(android)).toBe(false)
  })
})
