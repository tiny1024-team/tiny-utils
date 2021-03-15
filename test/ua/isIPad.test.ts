import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android,ios } from '../constants'
const { isIPad } = utils
describe('isIPad', () => {
  test('utils.isIPad is a Function', () => {
    expect(isIPad).toBeInstanceOf(Function)
  })

  test('utils.isIPad() for ua', () => {
    expect(isIPad()).toBe(false)
    expect(isIPad(weishi)).toBe(false)
    expect(isIPad(qqLiveBrowser)).toBe(false)
    expect(isIPad(qq)).toBe(false)
    expect(isIPad(qqNews)).toBe(false)
    expect(isIPad(ipad)).toBe(true)
    expect(isIPad(iphone)).toBe(false)
    expect(isIPad(android)).toBe(false)
    expect(isIPad(ios)).toBe(false)
  })
})
