import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android, ios } from '../constants'
const { isIOS } = utils
describe('isIOS', () => {
  test('utils.isIOS is a Function', () => {
    expect(isIOS).toBeInstanceOf(Function)
  })

  test('utils.isIOS() for ua', () => {
    expect(isIOS()).toBe(false)
    expect(isIOS(weishi)).toBe(false)
    expect(isIOS(qqLiveBrowser)).toBe(false)
    expect(isIOS(qq)).toBe(false)
    expect(isIOS(qqNews)).toBe(true)
    expect(isIOS(ipad)).toBe(true)
    expect(isIOS(iphone)).toBe(true)
    expect(isIOS(ios)).toBe(true)
    expect(isIOS(android)).toBe(false)
  })
})
