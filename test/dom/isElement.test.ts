import { describe, expect,test } from '@jest/globals'
import utils from '../utils'
const { isElement } = utils

describe('isElement unit test', () => {
  test('should return true', () => {
    const div = document.createElement('div')
    expect(isElement(div)).toEqual(true)
  })

  test('should return false', () => {
    const textNode = document.createTextNode('a element')
    expect(isElement(undefined)).toEqual(false)
    expect(isElement({})).toEqual(false)
    expect(isElement(textNode)).toEqual(false)
    expect(isElement(document)).toEqual(false)
  })
})

