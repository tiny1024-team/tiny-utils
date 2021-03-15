/**
 * @category 数组 array
 * @description js 数组排序 支持数字和字符串
 * @param arrObj obj 必填 数组对象
 * @param keyName string 必填 要排序的属性名称
 * @param [type] number 选填 默认 type:0 正顺 type:1 反顺
 * @example
 * <pre>
 * import { sortArrItem } from 'tiny-utils'
 * import { objType } from 'tiny-utils/lib/array';
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
export default function sortArrItem(arrObj: objType[], keyName: string, type?: number | undefined): objType[];
export declare type objType = {
    [keyName: string]: string | number | null;
};
