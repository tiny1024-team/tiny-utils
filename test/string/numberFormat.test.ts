import utils from '../utils'
import { describe, expect, test } from '@jest/globals';
const { numberFormat } = utils;

describe('numberFormat unit test', () => {
  test('should return an empty string if the 1st argument is missing or not a number', () => {
    // @ts-ignore
    expect(numberFormat()).toEqual('')
    // @ts-ignore
    expect(numberFormat('3.14')).toEqual('')
  })

  test('should format the number normally', () => {
    expect(numberFormat(0)).toEqual('0')
    expect(numberFormat(123456789.123, 3)).toEqual('123,456,789.123')
  })

  test('2nd argument: digits > -1', () => {
    expect(numberFormat(3.14, 0)).toEqual('3')
    expect(numberFormat(3.1415, 3)).toEqual('3.142')
  })

  test('3rd argument: dot', () => {
    expect(numberFormat(3.14, 2, '_')).toEqual('3_14')
  })

  test('4th argument: sep', () => {
    expect(numberFormat(0, 0, undefined, ' ')).toEqual('0')
    expect(numberFormat(1.1, 3, undefined, ' ')).toEqual('1.100')
    expect(numberFormat(1234567.456, 3, undefined, ' ')).toEqual('1 234 567.456')
    expect(numberFormat(12345678.456, 3, undefined, ' ')).toEqual('12 345 678.456')
    expect(numberFormat(123456789.456, 3, undefined, ' ')).toEqual('123 456 789.456')
    expect(numberFormat(-123456789.456, 3, undefined, ' ')).toEqual('-123 456 789.456')
  })
})
