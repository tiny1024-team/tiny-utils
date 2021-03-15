/**
 * @category 对象 object
 * @description 深拷贝对象（支持绝大多数数据类型）
 * @param {any} target 需要拷贝的对象
 * @param {Object} [map] 保持已拷贝数据
 * @return {any}
 * @example
 * <pre>
 *   deepClone({
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
}) => {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
}
 * </pre>
 */
declare function deepClone(target: any, map?: WeakMap<object, any>): any;
export default deepClone;
