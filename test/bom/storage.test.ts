import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('localStorage with time expiration function', () => {
  const { storage } = utils
  test('should be null if no localStroage', () => {
    expect(storage.getItem('test')).toBeNull()
  })

  test('should be expiration if time end', done => {
    storage.setItem('test', '222', 500)
    expect(storage.getItem('test')).toBe('222')

    setTimeout(() => {
      expect(storage.getItem('test')).toBeNull()
      if (done) done()
    }, 1000)
  })

  test('should be null if remove localStroage', () => {
    storage.setItem('test', 0)
    expect(storage.getItem('test')).toBe(0)
    storage.removeItem('test')
    expect(storage.getItem('test')).toBeNull()
  })

  test('should be null if clear localStroage', () => {
    storage.setItem('test', 'undefined')
    storage.setItem('test2', 'null')
    expect(storage.getItem('test')).toBe('undefined')
    expect(storage.getItem('test2')).toBe('null')
    storage.clear()
    expect(storage.getItem('test')).toBeNull()
    expect(storage.getItem('test2')).toBeNull()
  })
})
