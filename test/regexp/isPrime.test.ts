import { describe, expect, test } from '@jest/globals';
import utils from '../utils'

describe('isPrime', () => {
  test('utils.isPrime is a Function', () => {
    expect(utils.isPrime).toBeInstanceOf(Function)
  })

  test('number is prime', () => {
    expect(utils.isPrime(2)).toBe(true)
    expect(utils.isPrime(3)).toBe(true)
    expect(utils.isPrime(23)).toBe(true)
    expect(utils.isPrime(89)).toBe(true)
    expect(utils.isPrime(13441)).toBe(true)
  })
  test('number is not prime', () => {
    expect(utils.isPrime(0)).toBe(false)
    expect(utils.isPrime(4)).toBe(false)
    expect(utils.isPrime(10)).toBe(false)
    expect(utils.isPrime(13440)).toBe(false)
  })
})
