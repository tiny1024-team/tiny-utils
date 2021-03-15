import { describe, expect, test } from '@jest/globals';
import utils from '../utils'
import { IMap } from '../../src/types/interface'

describe('escapeHTML', () => {
  const map: IMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }

  test('utils.escapeHTML is a Function', () => {
    expect(utils.escapeHTML).toBeInstanceOf(Function)
  })

  test('utils.escapeHTML', () => {
    // 单个
    Object.keys(map).forEach(c => {
      expect(utils.escapeHTML(c)).toBe(map[c])
    })

    // 多个
    expect(utils.escapeHTML(`<script>alert("'")</script>`)).toBe(
      '&lt;script&gt;alert(&quot;&#39;&quot;)&lt;/script&gt;',
    )

    expect(utils.escapeHTML('dolor maiores dolores')).toBe('dolor maiores dolores')
  })
})
