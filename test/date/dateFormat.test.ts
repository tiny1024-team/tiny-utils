import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('date format function', () => {
  test('utils.dateFormat is a Function', () => {
    expect(utils.dateFormat).toBeInstanceOf(Function)
  })

  test('utils.dateFormat util test', () => {
    // 合规输入
    let testDate: Date = new Date('2021/02/19 15:22:30.508')
    expect(utils.dateFormat(testDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2021-02-19 15:22:30')
    expect(utils.dateFormat(testDate, 'YY-M-D H:m:s.S')).toBe('21-2-19 15:22:30.508')
    expect(utils.dateFormat(testDate, 'yyyy-M-d h:m:s.S')).toBe('2021-2-19 15:22:30.508')

    // 测试不规范输入
    // @ts-expect-error
    expect(utils.dateFormat('2021/02/19 15:22:30.508', 'YYYY-MM-DD HH:mm:ss')).toBe('')
  })
})
