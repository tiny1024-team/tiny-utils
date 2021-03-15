/*
 * Modified FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 *
 * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
 * source  : http://purl.eligrey.com/github/FileSaver.js
 */

const isMacOSWebView =
  /Macintosh/.test(navigator.userAgent) &&
  /AppleWebKit/.test(navigator.userAgent) &&
  !/Safari/.test(navigator.userAgent)

function bom(file: File | Blob): File | Blob {
  if (
    /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(file.type)
  ) {
    return new Blob([String.fromCharCode(0xfeff), file], { type: file.type })
  }
  return file
}

function corsEnabled(url: string): boolean {
  const xhr = new XMLHttpRequest()
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
    // eslint-disable-next-line
  } catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

function downloadUrl(url: string, fileName: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    download(xhr.response, fileName)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function click(node: Node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    const evt = document.createEvent('MouseEvents')
    evt.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null,
    )
    node.dispatchEvent(evt)
  }
}

/**
 * @category url
 * @description   下载一个 URL 所定位的文件或Blob (opens new window)对象或File (opens new window)对象
 * @param  {string | Blob | File} file 一个 URL 字符串或Blob对象或File对象。
 * @param  {string} [fileName] 优先使用该参数作为文件名，其次，如果file参数是File类型，则使用file的name属性，最后使用'download'字符串
 * @return {Void}
 * @example download('http://xxxxxx')
 */
let download: (file: string | Blob | File, name?: string) => void

/* istanbul ignore else */
if ('download' in HTMLAnchorElement.prototype && !isMacOSWebView) {
  download = function download(file: string | Blob | File, name?: string): void {
    const a = document.createElement('a')
    const fileName = name || (file as File).name || 'download'

    a.download = fileName
    a.rel = 'noopener'

    if (typeof file === 'string') {
      a.href = file
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          downloadUrl(file, fileName)
        } else {
          a.target = '_blank'
          click(a)
        }
      } else {
        click(a)
      }
    } else {
      const URL = window.URL || window.webkitURL
      a.href = URL.createObjectURL(file)
      setTimeout(() => URL.revokeObjectURL(a.href), 4e4) // 40s
      setTimeout(() => click(a), 0)
    }
  }
} else {
  if ('msSaveOrOpenBlob' in navigator) {
    download = function download(file: string | Blob | File, name?: string): void {
      const fileName = name || (file as File).name || 'download'

      if (typeof file === 'string') {
        if (corsEnabled(file)) {
          downloadUrl(file, fileName)
        } else {
          const a = document.createElement('a')
          a.href = file
          a.target = '_blank'
          setTimeout(() => click(a))
        }
      } else {
        navigator.msSaveOrOpenBlob(bom(file), fileName)
      }
    }
  } else {
    download = function download(file: string | Blob | File, name?: string): void {
      let popup = window.open('', '_blank')
      if (popup) {
        popup.document.title = 'downloading...'
        popup.document.body.innerText = 'downloading...'
      }
      const fileName = name || (file as File).name || 'download'

      if (typeof file === 'string') {
        downloadUrl(file, fileName)
        return
      }

      const force = file.type === 'application/octet-stream'
      // @ts-ignore
      const safari = window.safari || ''
      const isSafari = /constructor/i.test(String(window.HTMLElement)) || String(safari)
      const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

      if (
        (isChromeIOS || (force && isSafari) || isMacOSWebView) &&
        typeof FileReader !== 'undefined'
      ) {
        // Safari doesn't allow downloading of blob URLs
        const reader = new FileReader()
        reader.onloadend = function () {
          let url = (reader.result as string) || ''
          url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
          if (popup) {
            popup.location.href = url
          } else {
            window.location.href = url
          }
          popup = null
        }
        reader.readAsDataURL(file)
      } else {
        const URL = window.URL || window.webkitURL
        const url = URL.createObjectURL(file)
        if (popup) popup.location.href = url
        else location.href = url
        popup = null
        setTimeout(function () {
          URL.revokeObjectURL(url)
        }, 4e4) // 40s
      }
    }
  }
}

export default download
