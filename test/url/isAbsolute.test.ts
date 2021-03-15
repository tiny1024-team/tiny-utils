import utils from '../utils'
import { describe, expect, test } from '@jest/globals'
const { isAbsolute } = utils

describe('isAbsolute unit test', () => {
  test('should return false if the 1st parameter is not an absolute url', () => {
    expect(isAbsolute('www.baidu.com')).toEqual(false)
    expect(isAbsolute('//www.baidu.com')).toEqual(false)
    expect(isAbsolute('/path/to/somewhere')).toEqual(false)
  })

  test('should return true if the 1st parameter is an absolute url', () => {
    expect(isAbsolute('http://baidu.com')).toEqual(true)
    expect(isAbsolute('https://baidu.com')).toEqual(true)
  })
})
