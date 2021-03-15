import utils from '../utils'
import { describe, expect, test } from '@jest/globals'
const { deepClone } = utils

describe('deepClone unit test', () => {
  test('deepClone is a Function', () => {
    expect(deepClone).toBeInstanceOf(Function)
  })

  test('deepClone width Object params and function', () => {
    let obj = {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child',
      },
      field4: [2, 4, 8],
      field5: true,
      field6: '666',
      reg: RegExp(/\?./),
      empty: null,
      map: new Map().set('a', 1),
      set: new Set(),
    }
    expect(utils.deepClone(obj)).toEqual({
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child',
      },
      field4: [2, 4, 8],
      field5: true,
      field6: '666',
      reg: RegExp(/\?./),
      empty: null,
      map: new Map().set('a', 1),
      set: new Set(),
    })
  })

  test('deepClone width  function', () => {
    let obj = {
      fun: function () {},
    }
    expect(utils.deepClone(obj).fun).toBeInstanceOf(Function)
  })
})
