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
export declare function checkIDCard(idcode: string): boolean;
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
export declare function cardToGender(idcode: string): string;
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
export declare function cardToBirthday(idcode: string, split?: string): string;
