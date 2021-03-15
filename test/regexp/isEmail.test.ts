import { describe, expect, test } from '@jest/globals';
import utils from '../utils'

describe('isEmail', () => {
  test('utils.isEmail is a Function', () => {
    expect(utils.isEmail).toBeInstanceOf(Function)
  })

  test('string is Email', () => {
    expect(utils.isEmail('shl@qq.com')).toBe(true)
    expect(utils.isEmail('hl.shen@shunwang.com')).toBe(true)
    expect(utils.isEmail('10232@shunwang.com')).toBe(true)
  })
  test('string is not Email', () => {
    // @ts-ignore
    expect(utils.isEmail(0)).toBe(false)
    expect(utils.isEmail('hl.shen')).toBe(false)
  })
})
