//可继续遍历的数据类型
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'

//不可继续遍历的数据类型
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const errorTag = '[object Error]'
const regexpTag = '[object RegExp]'
const funcTag = '[object Function]'

const deepTag: string[] = [mapTag, setTag, arrayTag, objectTag, argsTag]

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
function deepClone(target: any, map = new WeakMap()) {
  // 克隆原始类型
  if (!isObject(target)) {
    return target
  }

  // 初始化，根据不同类型进行操作
  const type = getType(target)
  let cloneTarget: any
  if (deepTag.indexOf(type) > -1) {
    cloneTarget = getInit(target, type)
  } else {
    return cloneOtherType(target, type)
  }

  // 防止循环引用
  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, cloneTarget)

  // 克隆set
  if (type === setTag) {
    target.forEach((value: any) => {
      cloneTarget.add(deepClone(value, map))
    })
    return cloneTarget
  }

  // 克隆map
  if (type === mapTag) {
    target.forEach((value: any, key: string) => {
      cloneTarget.set(key, deepClone(value, map))
    })
    return cloneTarget
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target)
  forEach(keys || target, (value: any, key: string) => {
    if (keys) {
      key = value
    }
    cloneTarget[key] = deepClone(target[key], map)
  })

  return cloneTarget
}

export default deepClone

//工具函数-通用while循环
function forEach(array: any, iteratee: any) {
  let index = -1
  const length = array.length
  while (++index < length) {
    iteratee(array[index], index)
  }
  return array
}

//工具函数-判断是否为引用类型
function isObject(target: unknown) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

//工具函数-获取实际类型
function getType(target: unknown) {
  return Object.prototype.toString.call(target)
}

//工具函数-初始化被克隆的对象
function getInit(target: any, type?: string) {
  const Ctor = target.constructor
  return new Ctor()
}

//工具函数-克隆Symbol
function cloneSymbol(targe: any) {
  return Object(Symbol.prototype.valueOf.call(targe))
}

//工具函数-克隆正则
function cloneReg(targe: any) {
  const reFlags = /\w*$/
  const result = new targe.constructor(targe.source, reFlags.exec(targe))
  result.lastIndex = targe.lastIndex
  return result
}

//工具函数-克隆不可遍历类型
function cloneOtherType(targe: any, type: string) {
  const Ctor = targe.constructor
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe)
    case regexpTag:
      return cloneReg(targe)
    case symbolTag:
      return cloneSymbol(targe)
    case funcTag:
      return targe || {}
    default:
      return null
  }
}
