import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('Get Days Diff Between Dates function', () => {
  test('utils.getDaysDiffBetweenDates is a Function', () => {
    expect(utils.getDaysDiffBetweenDates).toBeInstanceOf(Function)
  })

  test('utils.getDaysDiffBetweenDates util test', () => {
    let testDateStart: Date = new Date('2021/02/19 00:00:00.000')
    let testDateEnd: Date = new Date('2021/02/20 23:59:59:999')
    expect(utils.getDaysDiffBetweenDates('2021/02/19', '2021/02/25')).toBe(6)
    expect(utils.getDaysDiffBetweenDates(testDateStart, testDateEnd)).toBe(1)
    expect(utils.getDaysDiffBetweenDates(1613836800000, 1612886400000)).toBe(-11)
    expect(utils.getDaysDiffBetweenDates('xxx', 'yyy')).toBe('Invalid Date')
  })
})