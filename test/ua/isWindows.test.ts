import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android,ios,linux,macOs,windows } from '../constants'
const { isWindows } = utils
describe('isWindows', () => {
  test('utils.isWindows is a Function', () => {
    expect(isWindows).toBeInstanceOf(Function)
  })

  test('utils.isWindows() for ua', () => {
    expect(isWindows()).toBe(false)
    expect(isWindows(weishi)).toBe(false)
    expect(isWindows(qqLiveBrowser)).toBe(false)
    expect(isWindows(qq)).toBe(false)
    expect(isWindows(qqNews)).toBe(false)
    expect(isWindows(ipad)).toBe(false)
    expect(isWindows(iphone)).toBe(false)
    expect(isWindows(linux)).toBe(false)
    expect(isWindows(macOs)).toBe(false)
    expect(isWindows(windows)).toBe(true)
    expect(isWindows(android)).toBe(false)
    expect(isWindows(ios)).toBe(false)
  })
})
