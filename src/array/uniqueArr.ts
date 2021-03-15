/**
 * @category 数组 array
 * @description 数组去重
 * @param {Array} arr 数组
 * @return {Array}
 * @example
 * <pre>
 *   uniqueArr([1,6,3,4,3,6]) => [1,6,3,4]
 *   uniqueArr([1,2,3,4,5]) => [1,2,3,4,5]
 * </pre>
 */
export default function uniqueArr(arr: any[]) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr))
  } else {
    let n: { [keyName: string]: boolean } = {},
      r = []
    for (let i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true
        r.push(arr[i])
      }
    }
    return r
  }
}