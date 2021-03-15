import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
const { timeAgo } = utils

describe('date/timeAgo', () => {
  test('timeAgo return the expected formatted string', () => {
    const now = Date.now()
    type FormatParams = [number | string | Date]
    type TestUnit = [FormatParams, string]
    const testUnits: Array<TestUnit> = [
      [[now], '刚刚'],
      [[now - 5000], '5 秒前'],
      [[now - 60 * 1000], '1 分钟前'],
      [[now - 5 * 60 * 1000], '5 分钟前'],
      [[now - 60 * 60 * 1000], '1 小时前'],
      [[now - 5 * 60 * 60 * 1000], '5 小时前'],
      [[now - 24 * 60 * 60 * 1000], '1 天前'],
      [[now - 5 * 24 * 60 * 60 * 1000], '5 天前'],
      [[now - 7 * 24 * 60 * 60 * 1000], '1 周前'],
      [[now - 2 * 7 * 24 * 60 * 60 * 1000], '2 周前'],
      [[now - 30 * 24 * 60 * 60 * 1000], '1 个月前'],
      [[now - 5 * 30 * 24 * 60 * 60 * 1000], '5 个月前'],
      [[now - 365 * 24 * 60 * 60 * 1000], '1 年前'],
      [[now - 5 * 365 * 24 * 60 * 60 * 1000], '5 年前'],
    ]
    testUnits.forEach(testUnit => {
      expect(timeAgo.apply(null, testUnit[0])).toEqual(testUnit[1])
    })
  })

  test('should work with the second `locale` parameter', () => {
    const now = Date.now()
    expect(timeAgo(now - 5000)).toEqual('5 秒前')
  })

  test('should work with the third `nowDate` paramter', () => {
    const now = Date.now()
    const nowDate = new Date(now - 5000)
    expect(timeAgo(now, nowDate)).toEqual('5 秒后')
  })
})
