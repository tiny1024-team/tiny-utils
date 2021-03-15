import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android,ios,linux,macOs } from '../constants'
const { isMacOS } = utils
describe('isMacOS', () => {
  test('utils.isMacOS is a Function', () => {
    expect(isMacOS).toBeInstanceOf(Function)
  })

  test('utils.isMacOS() for ua', () => {
    expect(isMacOS()).toBe(false)
    expect(isMacOS(weishi)).toBe(false)
    expect(isMacOS(qqLiveBrowser)).toBe(false)
    expect(isMacOS(qq)).toBe(false)
    expect(isMacOS(qqNews)).toBe(false)
    expect(isMacOS(ipad)).toBe(false)
    expect(isMacOS(iphone)).toBe(false)
    expect(isMacOS(linux)).toBe(false)
    expect(isMacOS(macOs)).toBe(true)
    expect(isMacOS(android)).toBe(false)
    expect(isMacOS(ios)).toBe(false)
  })
})
