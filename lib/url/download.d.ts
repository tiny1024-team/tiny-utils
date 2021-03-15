/**
 * @category url
 * @description   下载一个 URL 所定位的文件或Blob (opens new window)对象或File (opens new window)对象
 * @param  {string | Blob | File} file 一个 URL 字符串或Blob对象或File对象。
 * @param  {string} [fileName] 优先使用该参数作为文件名，其次，如果file参数是File类型，则使用file的name属性，最后使用'download'字符串
 * @return {Void}
 * @example download('http://xxxxxx')
 */
declare let download: (file: string | Blob | File, name?: string) => void;
export default download;
