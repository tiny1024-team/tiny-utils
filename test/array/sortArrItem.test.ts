import { describe, expect, test } from '@jest/globals'
import utils from '../utils'
let temp = [
  { name: 'zzx', score: 90, age: 12 },
  { name: 'lyy', score: 90, age: 5 },
  { name: 'zjf', score: 50, age: 10 },
  { name: 'sss', score: NaN, age: 10 },
  { name: 'ssl', score: NaN, age: 10 },
]

describe('array sort function', () => {
  test('utils.sortArrItem is a Function', () => {
    expect(utils.sortArrItem).toBeInstanceOf(Function)
  })

  test('utils.sortArrItem util test', () => {
    // 测试不规范输入
    // @ts-expect-error
    expect(utils.sortArrItem(6, 'key')).toBe(6)

    // 合规输入
    expect(utils.sortArrItem([{'age':2},{'age':null},{'age':null},{'age':1}],'age')).toEqual([{'age':1},{'age':2},{'age':null},{'age':null}]);
    expect(utils.sortArrItem([{'age':1},{'age':null},{'age':null},{'age':2}],'age',1)).toEqual([{'age':null},{'age':null},{'age':2},{'age':1}]);
    expect(utils.sortArrItem(temp, 'age', 0)).toEqual([
      { name: 'lyy', score: 90, age: 5 },
      { name: 'zjf', score: 50, age: 10 },
      { name: 'sss', score: NaN, age: 10 },
      { name: 'ssl', score: NaN, age: 10 },
      { name: 'zzx', score: 90, age: 12 },
    ]);
    expect(utils.sortArrItem(utils.sortArrItem(temp, 'age', 0), 'score', 0)).toEqual([
      { name: 'zjf', score: 50, age: 10 },
      { name: 'lyy', score: 90, age: 5 },
      { name: 'sss', score: NaN, age: 10 },
      { name: 'ssl', score: NaN, age: 10 },
      { name: 'zzx', score: 90, age: 12 },
    ])
    expect(utils.sortArrItem(utils.sortArrItem(temp, 'age', 0), 'score', 1)).toEqual([
      { name: 'lyy', score: 90, age: 5 },
      { name: 'zjf', score: 50, age: 10 },
      { name: 'sss', score: NaN, age: 10 },
      { name: 'ssl', score: NaN, age: 10 },
      { name: 'zzx', score: 90, age: 12 },
    ])
  })
})
