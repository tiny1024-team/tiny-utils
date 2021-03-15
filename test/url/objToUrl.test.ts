import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('Get Obj to Url string', () => {
  const testUrl: string = 'http://localhost:4002'
  const testObj: { [key: string]: unknown } = {
    a: 3,
    b: 2,
    c: 1,
  }

  test('utils.objToUrl is a Function', () => {
    expect(utils.objToUrl).toBeInstanceOf(Function)
  })

  test('utils.objToUrl util test', () => {
    // 测试不规范输入
    // @ts-expect-error
    expect(utils.objToUrl(testUrl, 3)).toBe(testUrl)

    // 合规输入
    expect(utils.objToUrl(testUrl, testObj)).toBe('http://localhost:4002?a=3&b=2&c=1')

    expect(utils.objToUrl((testUrl + '?'), testObj)).toBe('http://localhost:4002?a=3&b=2&c=1')
    expect(utils.objToUrl((testUrl + '?x=3'), testObj)).toBe('http://localhost:4002?x=3&a=3&b=2&c=1')
  })
})
