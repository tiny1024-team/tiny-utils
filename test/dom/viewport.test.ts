import { describe, expect, test, beforeAll } from '@jest/globals'
import utils from '../utils'
const { viewport } = utils

describe('viewport unit test', () => {
  beforeAll((done: any) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      '<html lang="en"><body><div id="el1">222<h1>Title</h1><p>Some text</p><p>Some text</p></div></body></html>'
    done()
  })

  test('should return `{ width: 0, height: 0 }` if no argument', () => {
    // @ts-ignore
    expect(viewport()).toEqual({ width: 0, height: 0 })
  })

  test("should return the window's viewport if a window object is passed", () => {
    const width = window.innerWidth || document.documentElement.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight
    expect(viewport(window)).toEqual({ width, height })
  })

  test("should return the element's viewport if an element object is passed", () => {
    const element = document.getElementById('el1')
    if (element) {
      const width = element.clientWidth
      const height = element.clientHeight
      expect(viewport(element)).toEqual({ width, height })
    }
  })
})
