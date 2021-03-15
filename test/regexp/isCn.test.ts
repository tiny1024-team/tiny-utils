import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('isCn', () => {
  test('utils.isCn is a Function', () => {
    expect(utils.isCn).toBeInstanceOf(Function)
  })

  test('string content Chinese', () => {
    expect(utils.isCn('中文')).toBe(true)
    expect(utils.isCn('测试Cn')).toBe(true)
    expect(utils.isCn('_ch_cn_文字')).toBe(true)
  })
  test('string is not Chinese', () => {
    // @ts-ignore
    expect(utils.isCn('hl.shen')).toBe(false)
    expect(utils.isCn('——+++')).toBe(false)
  })
})
