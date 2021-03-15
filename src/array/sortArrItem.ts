/**
 * @category 数组 array
 * @description js 数组排序 支持数字和字符串
 * @param arrObj obj 必填 数组对象
 * @param keyName string 必填 要排序的属性名称
 * @param [type] number 选填 默认 type:0 正顺 type:1 反顺
 * @example
 * <pre> 
 * import { sortArrItem } from 'tiny-tools'
 * import { objType } from 'tiny-tools/lib/array';
 * const temp:objType[] = [
 * { name: 'zzx', score: 90, age: 12 },
 * { name: 'lyy', score: 90, age: 5 },
 * { name: 'zjf', score: 50, age: 10 },
 * ];
 *  //根据 score 排序,score 相同时根据 age 排序
 * sortArrItem(sortArrItem(temp, 'age', 0), 'score', 0)=>
 *  [
 * { name: 'zjf', score: 50, age: 10 },
 * { name: 'lyy', score: 90, age: 5 },
 * { name: 'zzx', score: 90, age: 12 }
 * ]
 * </pre>
 */
export default function sortArrItem(arrObj: objType[], keyName: string, type?: number | undefined) {
  //判断传入是否为数组,不是直接返回
  if (!(arrObj instanceof Array)) {
    return arrObj
  }
  //这里如果 直接等于 arrObj，相当于只是对对象的引用，改变排序会同时影响原有对象的排序，而通过 arrObj.slice(0)，
  //表示把对象复制给另一个对象，两者间互不影响
  let tempArrObj = arrObj.slice(0)
  return tempArrObj.sort(compare(keyName, type))
}

function compare(key: string, type?: number | undefined) {
  return function (obj1: objType, obj2: objType) {
    let val1 = obj1[key]
    let val2 = obj2[key]
     //如果值为空的，放在最后
     if (val1 == null && val2 == null) {
      return 0
    } else if (val1 == null && val2 != null) {
      return type == 1 ? -1 : 1
    } else if (val2 == null && val1 != null) {
      return type == 1 ? 1 : -1
    }
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    } else {
      return 0
    }
  
    //排序
    if (val1 < val2) {
      return type == 1 ? 1 : -1
    } else if (val1 > val2) {
      return type == 1 ? -1 : 1
    } else {
      return 0
    }
  }
}

export type objType = { [keyName: string]: string | number| null }