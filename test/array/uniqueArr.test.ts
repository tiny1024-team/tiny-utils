import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
const { uniqueArr } = utils

describe('unique Array function', () => {
  test('uniqueArr is a Function', () => {
    expect(uniqueArr).toBeInstanceOf(Function)
  })

  test('uniqueArr util test', () => {
    // 合规输入
    expect(uniqueArr([1, 6, 3, 4, 3, 6])).toEqual([1, 6, 3, 4])
    expect(uniqueArr([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test('uniqueArr test Array without from', () => {

    // @ts-ignore
    delete Array.prototype.from
    let arr = new Array(1, 6, 3, 4, 3, 6)
    // 合规输入
    expect(uniqueArr(arr)).toEqual([1, 6, 3, 4])
    expect(uniqueArr([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})
