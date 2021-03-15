import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { weishi, qqLiveBrowser, qq, qqNews, ipad, iphone, android, ios } from '../constants'
const { isAndroid } = utils

describe('isAndroid', () => {
  test('utils.isAndroid is a Function', () => {
    expect(isAndroid).toBeInstanceOf(Function)
  })

  test('utils.isAndroid() for ua', () => {
    expect(isAndroid()).toBe(false)
    expect(isAndroid(weishi)).toBe(true)
    expect(isAndroid(qqLiveBrowser)).toBe(true)
    expect(isAndroid(qq)).toBe(true)
    expect(isAndroid(qqNews)).toBe(false)
    expect(isAndroid(ipad)).toBe(false)
    expect(isAndroid(iphone)).toBe(false)
    expect(isAndroid(ios)).toBe(false)
    expect(isAndroid(android)).toBe(true)
  })
})
