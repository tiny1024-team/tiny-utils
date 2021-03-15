import { describe, expect, test } from '@jest/globals'
import utils from '../utils'

describe('idCard', () => {
  const { checkIDCard, cardToGender, cardToBirthday } = utils
  test('utils.checkIDCard is a Function', () => {
    expect(checkIDCard).toBeInstanceOf(Function)
  })
  test('utils.cardToGender is a Function', () => {
    expect(cardToGender).toBeInstanceOf(Function)
  })

  test('utils.checkIDCard util test', () => {
    //测试错误输入
    // @ts-expect-error
    expect(checkIDCard(111111111111111111)).toBe(false)
    //测试错误身份证号
    expect(checkIDCard('330482200010066')).toBe(false)
    expect(checkIDCard('330482200010066666')).toBe(false)
    expect(checkIDCard('111111111111111111')).toBe(false)
    expect(checkIDCard('330482200010066666')).toBe(false)

    //测试正确身份证号
    expect(checkIDCard('330102199003077958')).toBe(true)
    expect(checkIDCard('330422196808204828')).toBe(true)
  })

  test('utils.cardToGender util test', () => {
    expect(cardToGender('330102199003077958')).toBe('男')
    expect(cardToGender('330102900307795')).toBe('男')
    expect(cardToGender('330101199902209268')).toBe('女')
    expect(cardToGender('330101990220926')).toBe('女')
    expect(cardToGender('330482200010066666')).toBe('无效的身份证号')
    expect(cardToGender('330482200010066')).toBe('无效的身份证号')
  })

  test('utils.cardToBirthday util test', () => {
    expect(cardToBirthday('330102199003077958')).toBe('1990-03-07')
    expect(cardToBirthday('330101199902209268', '')).toBe('19990220')
    expect(cardToBirthday('330101199902209268', '/')).toBe('1999/02/20')
    expect(cardToBirthday('330101990220926', '/')).toBe('1999/02/20')
  })
})
