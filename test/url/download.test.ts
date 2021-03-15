import utils from '../utils'
import { describe, expect, test } from '@jest/globals'
const { download } = utils

describe('download unit test', () => {
  test('download is a Function', () => {
    expect(download).toBeInstanceOf(Function)
  })
})
