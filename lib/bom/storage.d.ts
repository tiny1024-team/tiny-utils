/**
 * @category 游览器对象 bom
 * @object 封装一个有过期时间功能的localStorage
 */
export declare const storage: {
    /**
     * @description 获取storage中单个item值
     * @param { string } key:存储的键名
     * @return {string | null}
     */
    getItem(key: string): string | null;
    /**
     * @description 设置storage中item值
     * @param { string } key:存储的键名
     * @param { number | string | object } val:存储的值
     * @param { number } [time]:过期时间
     * @return {void}
     */
    setItem(key: string, val: number | string | object, time?: number | undefined): void;
    /**
     * @description 移除storage中单个item值
     * @param { string } key:存储的键名
     * @return {void}
     */
    removeItem(key: string): void;
    /**
     * @description 清空所有storage值
     * @param { string } key:存储的键名
     * @return {void}
     */
    clear(): void;
};
