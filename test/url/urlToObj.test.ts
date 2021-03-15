import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('Get url params', () => {
  const testUrl: string = 'http://localhost:4002?a=1&b=2&c=3'

  test('utils.urlToObj is a Function', () => {
    expect(utils.urlToObj).toBeInstanceOf(Function)
  })

  test('utils.urlToObj', () => {
    // 测试不规范输入
    // @ts-expect-error
    expect(utils.urlToObj(2)).toMatchObject({})
    // @ts-expect-error
    expect(utils.urlToObj(true)).toMatchObject({})

    // 测试返回对象类型
    expect(typeof utils.urlToObj('')).toBe('object')
    expect(typeof utils.urlToObj(testUrl)).toBe('object')

    // 合规输入
    expect(utils.urlToObj()).toMatchObject({})
    expect(utils.urlToObj('')).toMatchObject({})
    expect(utils.urlToObj('http://localhost:4002?')).toMatchObject({})
    expect(utils.urlToObj(testUrl)).toMatchObject({ "a": "1", "b": "2", "c": "3" })
    expect(utils.urlToObj('?a=1&b=2&c=3')).toMatchObject({ "a": "1", "b": "2", "c": "3" })
  })
})
