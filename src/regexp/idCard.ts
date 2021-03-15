/**
 * @category 正则校验 regexp
 * @description 身份证号校验
 * @param {string} idcode
 * @returns {number| string}
 * @example <pre>
 *   checkIDCard('330102199003077958') => true
 *   checkIDCard('330482200010066666') => false
 * </pre>
 */
export function checkIDCard(idcode: string) {
  if (typeof idcode === 'string' && idcode.length === 18) {
    // 加权因子
    const weightFactor: number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验码
    const checkCode: string[] = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

    const code: string = String(idcode)
    const last: string = idcode[17] // 最后一位

    const seventeen = code.substring(0, 17)

    // ISO 7064:1983.MOD 11-2 判断最后一位校验码是否正确
    const arr: string[] = seventeen.split('')
    const len = arr.length
    let num = 0
    for (let i = 0; i < len; i++) {
      num = num + Number(arr[i]) * weightFactor[i]
    }

    // 获取余数
    const resisue = num % 11
    const lastNo = checkCode[resisue]

    // 身份证号格式的正则思路
    const idcardPatter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/

    // 判断格式是否正确
    const format = idcardPatter.test(idcode)

    // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
    return last === lastNo && format
  } else if (typeof idcode === 'string' && idcode.length === 15) {
    // 身份证号格式的正则思路
    const idcardPatter = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/

    // 判断格式是否正确
    const format = idcardPatter.test(idcode)
    return format
  } else {
    //不合法输入，返回失败
    return false
  }
}

/**
 * @category 正则校验 regexp
 * @description 通过身份证号码获取性别
 * @param {string} idcode 身份证号码
 * @returns {string}
 * @example <pre>
 *   cardToGender('330102199003077958') => '男'
 *   cardToGender('330101199902209268') => '女'
 *   cardToGender('330482200010066666') => '无效的身份证号'
 * </pre>
 */
export function cardToGender(idcode: string) {
  //校验身份证
  if (!checkIDCard(idcode)) {
    return '无效的身份证号'
  }
  idcode = idcode.replace(/\s*/g, '')
  let sexStr = ''
  if (idcode.length === 15) {
    console.log((idcode.substring(14, 1), 10))
    sexStr = parseInt(idcode.substring(14, 1), 10) % 2 ? '男' : '女'
  } else if (idcode.length === 18) {
    sexStr = parseInt(idcode.substring(17, 1), 10) % 2 ? '男' : '女'
  }
  return sexStr
}

/**
 * @category 正则校验 regexp
 * @description 通过身份证号码获取性别
 * @param {string} idcode 身份证号码
 * @param {string} [split='-'] 年月日连接符
 * @returns {string}
 * @example <pre>
 *   cardToBirthday('330102199003077958') => '1990-03-07'
 *   cardToBirthday('330101199902209268','') => '19990220'
 *   cardToBirthday('330101199902209268','/') => '1999/02/20'
 * </pre>
 */
export function cardToBirthday(idcode: string, split: string = '-') {
  idcode = idcode.replace(/\s*/g, '')
  let tmpStr = ''
  if (idcode.length === 15) {
    tmpStr = idcode.substring(6, 12)
    tmpStr = '19' + tmpStr
    tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6)
  } else if (idcode.length === 18) {
    tmpStr = idcode.substring(6, 14)
    tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6)
  }
  return tmpStr
}
