import { describe, expect, test, beforeAll } from '@jest/globals'
import utils from '../utils'
const { isInViewport } = utils

describe('isInViewport unit test', () => {
  beforeAll((done: any) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      '<html lang="en"><body><div id="el1">222<h1>Title</h1><p>Some text</p><p>Some text</p></div></body></html>'
    done()
  })

  test('should return false if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(isInViewport()).toEqual(false)
    // @ts-ignore
    expect(isInViewport({})).toEqual(false)
  })

  test('should return true if the element is in viewport', () => {
    const el = document.getElementById('el1')
    el && expect(isInViewport(el)).toEqual(true)
  })

  test('should return false if the element is split by the viewport edge', () => {
    const el2 = document.getElementById('el2')
    const el3 = document.getElementById('el3')
    const el4 = document.getElementById('el4')
    const el5 = document.getElementById('el5')
    el2 && expect(isInViewport(el2)).toEqual(false)
    el3 && expect(isInViewport(el3)).toEqual(false)
    el4 && expect(isInViewport(el4)).toEqual(false)
    el5 && expect(isInViewport(el5)).toEqual(false)
  })

  test('should return false if the element is located in the outsite of viewport', () => {
    const el6 = document.getElementById('el6')
    const el7 = document.getElementById('el7')
    const el8 = document.getElementById('el8')
    const el9 = document.getElementById('el9')
    el6 && expect(isInViewport(el6)).toEqual(false)
    el7 && expect(isInViewport(el7)).toEqual(false)
    el8 && expect(isInViewport(el8)).toEqual(false)
    el9 && expect(isInViewport(el9)).toEqual(false)
  })
})
