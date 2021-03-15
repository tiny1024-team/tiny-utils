import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('judge Days is same function', () => {
  test('utils.isSameDay is a Function', () => {
    expect(utils.isSameDay).toBeInstanceOf(Function)
  })

  test('utils.isSameDay util test', () => {
    let testDate1: Date = new Date('2021/02/20 00:00:00.000')
    let testDate2: Date = new Date('2021/02/20 23:59:59:999')
    let testDate3: Date = new Date('2021/02/19 23:59:59:999')
    expect(utils.isSameDay(testDate1, testDate2)).toBe(true)
    expect(utils.isSameDay(testDate3, testDate1)).toBe(false)
  })
})
