import utils from '../utils'
import { describe, expect, test } from '@jest/globals'

describe('isString test', () => {
  test('utils.isString is a Function', () => {
    expect(utils.isString).toBeInstanceOf(Function)
  })

  test('utils.isString util test', () => {
    expect(utils.isString('6')).toBe(true)
    expect(utils.isString(10)).toBe(false)
    expect(utils.isString({})).toBe(false)
  })
})
