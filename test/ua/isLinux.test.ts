import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
import { ipad, iphone, android, ios, linux, windows, tablet, macOs } from '../constants'
const { isLinux } = utils
describe('isLinux', () => {
  test('utils.isLinux is a Function', () => {
    expect(isLinux).toBeInstanceOf(Function)
  })

  test('utils.isLinux() for ua', () => {
    expect(isLinux()).toBe(false)
    expect(isLinux(ipad)).toBe(false)
    expect(isLinux(iphone)).toBe(false)
    expect(isLinux(linux)).toBe(true)
    expect(isLinux(macOs)).toBe(false)
    expect(isLinux(windows)).toBe(false)
    expect(isLinux(tablet)).toBe(false)
    expect(isLinux(android)).toBe(true)
    expect(isLinux(ios)).toBe(false)
  })
})
