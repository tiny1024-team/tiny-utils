/**
 * @category 游览器对象 bom
 * @object 封装一个有过期时间功能的localStorage
 */
export const storage = {
  /**
   * @description 获取storage中单个item值
   * @param { string } key:存储的键名
   * @return {string | null}
   */
  getItem(key: string): string | null {
    const v = JSON.parse(localStorage.getItem(key) || '{}')
    if (v.time > 0 && Number(new Date()) > v.time) {
      // console.log(`参数${key}已过期`)
      return null
    } else if (v.value === undefined) {
      return null
    } else {
      return v.value
    }
  },
  /**
   * @description 设置storage中item值
   * @param { string } key:存储的键名
   * @param { number | string | object } val:存储的值
   * @param { number } [time]:过期时间
   * @return {void}
   */
  setItem(key: string, val: number | string | object, time?: number): void {
    const v = {
      value: val,
      time: time && time > 0 ? Number(new Date()) + time : 0,
    }
    localStorage.setItem(key, JSON.stringify(v))
  },
  /**
   * @description 移除storage中单个item值
   * @param { string } key:存储的键名
   * @return {void}
   */
  removeItem(key: string) {
    localStorage.removeItem(key)
  },
  /**
   * @description 清空所有storage值
   * @param { string } key:存储的键名
   * @return {void}
   */
  clear() {
    localStorage.clear()
  },
}
