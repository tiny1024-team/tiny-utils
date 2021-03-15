import utils from '../utils'
import { describe, expect, test } from '@jest/globals'

describe('addZero test', () => {
  test('utils.addZero is a Function', () => {
    expect(utils.addZero).toBeInstanceOf(Function)
  })

  test('utils.addZero util', () => {
    expect(utils.addZero('6')).toBe('06')
    expect(utils.addZero(10)).toBe('10')
    expect(utils.addZero(5, 3)).toBe('005')
    expect(utils.addZero(100, 3)).toBe('100')
    expect(utils.addZero(0)).toBe('00')
    expect(utils.addZero(-5)).toBe('-05')
    expect(utils.addZero(-10)).toBe('-10')
    expect(utils.addZero(-5, 3)).toBe('-005')
  })
})
