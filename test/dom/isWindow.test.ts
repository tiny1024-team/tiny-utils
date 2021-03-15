import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
const { isWindow } = utils

describe('isWindow', () => {
  test('should return true', () => {
    const iframe = document.createElement('iframe')
    iframe.src = 'about:blank'
    document.body.appendChild(iframe)

    expect(isWindow(window)).toEqual(true)
    expect(isWindow(iframe.contentWindow)).toEqual(true)
  })

  test('should return false', () => {
    expect(isWindow(undefined)).toEqual(false)
    expect(isWindow({})).toEqual(false)
    expect(isWindow(document)).toEqual(false)
  })
})

