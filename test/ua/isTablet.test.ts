import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android,ios,linux,macOs, tablet } from '../constants'
const { isTablet } = utils
describe('isTablet', () => {
  test('utils.isTablet is a Function', () => {
    expect(isTablet).toBeInstanceOf(Function)
  })

  test('utils.isTablet() for ua', () => {
    expect(isTablet()).toBe(false)
    expect(isTablet(weishi)).toBe(false)
    expect(isTablet(qqLiveBrowser)).toBe(false)
    expect(isTablet(qq)).toBe(false)
    expect(isTablet(qqNews)).toBe(false)
    expect(isTablet(ipad)).toBe(true)
    expect(isTablet(iphone)).toBe(false)
    expect(isTablet(linux)).toBe(false)
    expect(isTablet(macOs)).toBe(false)
    expect(isTablet(tablet)).toBe(true)
    expect(isTablet(android)).toBe(false)
    expect(isTablet(ios)).toBe(false)
  })
})
