/*!
 * tiny-utils v1.0.0
 * tiny-utils is a utility library of zero dependencies for javascript.
 * (c) 2020-2021
 * Released under the MIT License.
 * version 1.0.0
 */

/**
 * @category 数组 array
 * @description js 数组排序 支持数字和字符串
 * @param arrObj obj 必填 数组对象
 * @param keyName string 必填 要排序的属性名称
 * @param [type] number 选填 默认 type:0 正顺 type:1 反顺
 * @example
 * <pre>
 * import { sortArrItem } from 'tiny-utils'
 * import { objType } from 'tiny-utils/lib/array';
 * const temp:objType[] = [
 * { name: 'zzx', score: 90, age: 12 },
 * { name: 'lyy', score: 90, age: 5 },
 * { name: 'zjf', score: 50, age: 10 },
 * ];
 *  //根据 score 排序,score 相同时根据 age 排序
 * sortArrItem(sortArrItem(temp, 'age', 0), 'score', 0)=>
 *  [
 * { name: 'zjf', score: 50, age: 10 },
 * { name: 'lyy', score: 90, age: 5 },
 * { name: 'zzx', score: 90, age: 12 }
 * ]
 * </pre>
 */
function sortArrItem(arrObj, keyName, type) {
  //判断传入是否为数组,不是直接返回
  if (!(arrObj instanceof Array)) {
    return arrObj;
  } //这里如果 直接等于 arrObj，相当于只是对对象的引用，改变排序会同时影响原有对象的排序，而通过 arrObj.slice(0)，
  //表示把对象复制给另一个对象，两者间互不影响


  var tempArrObj = arrObj.slice(0);
  return tempArrObj.sort(compare(keyName, type));
}

function compare(key, type) {
  return function (obj1, obj2) {
    var val1 = obj1[key];
    var val2 = obj2[key]; //如果值为空的，放在最后

    if (val1 == null && val2 == null) {
      return 0;
    } else if (val1 == null && val2 != null) {
      return type == 1 ? -1 : 1;
    } else if (val2 == null && val1 != null) {
      return type == 1 ? 1 : -1;
    }

    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    } else {
      return 0;
    } //排序


    if (val1 < val2) {
      return type == 1 ? 1 : -1;
    } else if (val1 > val2) {
      return type == 1 ? -1 : 1;
    } else {
      return 0;
    }
  };
}

/**
 * @category 数组 array
 * @description 数组去重
 * @param {Array} arr 数组
 * @return {Array}
 * @example
 * <pre>
 *   uniqueArr([1,6,3,4,3,6]) => [1,6,3,4]
 *   uniqueArr([1,2,3,4,5]) => [1,2,3,4,5]
 * </pre>
 */
function uniqueArr(arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
        r = [];

    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }

    return r;
  }
}

/**
 * @category 日期 date
 * @param date Date 需要格式化的日期
 * @param fmt string 指定的格式
 * @description
 * <pre>
 *   dateFormat 将 Date 转化为指定格式的 String
 * // 月(M)、日(d/D)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 // 年(y/Y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * </pre>
 * @example <pre>
 *   dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss') => '2021-02-20 15:16:20'
 *   dateFormat(new Date(),'YY-M-DD H:m:s.S') => '21-2-20 15:16:20.404'
 * </pre>
 */
function dateFormat(date, fmt) {
  //校验是否为日期对象
  if (!(date instanceof Date)) {
    return '';
  }

  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'D+': date.getDate(),
    'h+': date.getHours(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };

  if (/(y+|Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? String(o[k]) : ('00' + o[k]).substr(('' + o[k]).length));
  }

  return fmt;
}

/**
 * @category 日期 date
 * @description 返回日期间的天数
 * @param {number | string | Date} dateInitial
 * @param {number | string | Date} dateFinal
 * @returns {number| string}
 * @example <pre>
 *   import { getDaysDiffBetweenDates } from 'tiny-utils'
 *   import { dateType } from 'tiny-utils/lib/date'
 *   getDaysDiffBetweenDates('2021/02/19', '2021/02/25') => 6
 *   getDaysDiffBetweenDates(1613836800000, 1612886400000) => -11
 *   getDaysDiffBetweenDates(new Date('2021/02/19 00:00:00.000'), new Date('2021/02/20 23:59:59:999')) => 1
 * </pre>
 */
function getDaysDiffBetweenDates(dateBegin, dateEnd) {
  var dateInitial = dateBegin;
  var dateFinal = dateEnd;

  if (typeof dateInitial === 'string' || typeof dateFinal === 'string') {
    dateInitial = new Date(dateInitial);
    dateFinal = new Date(dateFinal);

    if (!isValidDate(dateInitial) || !isValidDate(dateFinal)) {
      return 'Invalid Date';
    }
  }

  return Math.floor((+dateFinal - +dateInitial) / (1000 * 3600 * 24));
} //校验是否是有效的日期

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * @category 日期 date
 * @description 判断是否为同一天
 * @param {Date} a
 * @param {Date} b
 * @returns {boolean}
 * @example <pre>
 *   isSameDay(new Date('2021/02/20 00:00:00.000'), new Date('2021/02/20 23:59:59:999')) => true
 * </pre>
 */
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/**
 * @category 日期 date
 * @description 将一个日期格式化为“xx分钟之前”之类的字符串
 * @param {number | string | Date} date
 * @param {Date} [nowDate]
 * @returns { string }
 * @example <pre>
 *   const d = new Date();
     d.setMinutes(d.getMinutes() - 10);
 *   timeAgo.format(d) => "10 分钟前"
 * </pre>
 *  @example <pre>
 *   const d = new Date();
     d.setMinutes(d.getMinutes() + 5);
 *   timeAgo.format(d) => "5 分钟后"
 * </pre>
 */
function timeAgo(date, nowDate) {
  if (nowDate === void 0) {
    nowDate = new Date();
  }

  var d = new Date(date);
  var sign = nowDate.getTime() - d.getTime() >= 0 ? 1 : -1;
  var diff = Math.abs(nowDate.getTime() - d.getTime());
  var years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
  var months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
  var weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
  var days = Math.floor(diff / (24 * 60 * 60 * 1000));
  var hours = Math.floor(diff / (60 * 60 * 1000));
  var minutes = Math.floor(diff / (60 * 1000));
  var seconds = Math.floor(diff / 1000);
  var index = 0;
  var number = 0;

  if (seconds === 0) {
    index = 0;
    number = 0;
  } else if (seconds >= 1 && minutes === 0) {
    index = 1;
    number = seconds;
  } else if (minutes === 1) {
    index = 2;
    number = minutes;
  } else if (minutes > 1 && hours === 0) {
    index = 3;
    number = minutes;
  } else if (hours === 1) {
    index = 4;
    number = hours;
  } else if (hours > 1 && days === 0) {
    index = 5;
    number = hours;
  } else if (days === 1) {
    index = 6;
    number = days;
  } else if (days > 1 && weeks === 0) {
    index = 7;
    number = days;
  } else if (weeks === 1) {
    index = 8;
    number = weeks;
  } else if (weeks > 1 && months === 0) {
    index = 9;
    number = weeks;
  } else if (months === 1) {
    index = 10;
    number = months;
  } else if (months > 1 && years === 0) {
    index = 11;
    number = months;
  } else if (years === 1) {
    index = 12;
    number = years;
  } else {
    index = 13;
    number = years;
  }

  var tmplPair = locales[index];
  var tmpl = sign > 0 ? tmplPair[0] : tmplPair[1];
  return tmpl.replace(/%s/, String(number));
}
var locales = [['刚刚', '片刻后'], ['%s 秒前', '%s 秒后'], ['1 分钟前', '1 分钟后'], ['%s 分钟前', '%s 分钟后'], ['1 小时前', '1 小时后'], ['%s 小时前', '%s 小时后'], ['1 天前', '1 天后'], ['%s 天前', '%s 天后'], ['1 周前', '1 周后'], ['%s 周前', '%s 周后'], ['1 个月前', '1 个月后'], ['%s 个月前', '%s 个月后'], ['1 年前', '1 年后'], ['%s 年前', '%s 年后']];

//判断是否是游览器
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var testMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Linux: /Linux|X11/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  Mobile: /Mobi|iPh|480/,
  Tablet: /Tablet|Pad|Nexus 7/,
  WeChat: /MicroMessenger/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/
};
var userAgent = isBrowser ? window.navigator.userAgent : '';
function isType (type) {
  return function (ua) {
    if (ua === void 0) {
      ua = userAgent;
    }

    return testMap[type].test(ua);
  };
}

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是安卓
 * @returns { Boolean } 返回boolean值，true 是安卓，false 不是
 *
 * @example
 * isAndroid() => true
 */

var isAndroid = isType('Android');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是IOS
 * @returns Boolean 返回boolean值，true 是IOS，false 不是
 *
 * @example
 * isIOS() => true
 */

var isIOS = isType('IOS');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是IPad
 * @returns Boolean 返回boolean值，true 是IPad，false 不是
 *
 * @example
 * isIPad() => true
 */

var isIPad = isType('IPad');

/**
 * @category 设备 ua
 * @description 判断是否是iPhone
 * @returns Boolean 返回boolean值，true 是iPhone，false 不是
 *
 * @example
 * isIPad() => true
 */

var isIPhone = isType('IPhone');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是linux
 * @returns Boolean 返回boolean值，true 是linux，false 不是
 *
 * @example
 * isLinux() => true
 */

var isLinux = isType('Linux');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是mac
 * @returns Boolean 返回boolean值，true 是mac，false 不是
 *
 * @example
 * isMacOS() => true
 */

var isMacOS = isType('MacOS');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是mobile
 * @returns Boolean 返回boolean值，true 是mobile，false 不是
 *
 * @example
 * isMobile() => true
 */

var isMobile = isType('Mobile');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是tablet
 * @returns Boolean 返回boolean值，true 是tablet，false 不是
 *
 * @example
 * isTablet() => true
 */

var isTablet = isType('Tablet');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否微信
 * @returns Boolean 返回boolean值，true 是微信，false 不是
 *
 * @example
 * isWechat() => true
 */

var isWechat = isType('WeChat');

/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否windows
 * @returns Boolean 返回boolean值，true 是windows，false 不是
 *
 * @example
 * isWechat() => true
 */

var isWindows = isType('Windows');

var REG_ESCAPE = /[&<>'"]/g;
var MAP_ESCAPE = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};
/**
 * @category 文档对象 dom
 * @description html转码解析
 * @param {String} str
 * @return {String | null } str
 */

function escapeHTML(str) {
  return str ? REG_ESCAPE.test(str) ? str.replace(REG_ESCAPE, function (_char) {
    return MAP_ESCAPE[_char];
  }) : str : null;
}

/**
 * @category 文档对象 dom
 * @description 判断一个值是否为元素对象。
 * @param {Any} obj
 * @return {boolean}
 */
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}

/**
 * @category 文档对象 dom
 * @description 判断一个值是否是window对象。
 * @param {Any} obj
 * @return {boolean}
 */
function isWindow(obj) {
  return !!(obj && obj.self === obj);
}

/**
 * @category 文档对象 dom
 * @description 获取一个元素或window的视口宽度和高度
 * @param {Element|Window} [elOrWindow]
 * @return {width:Number,height:Number}
 * @example <pre>
 *   import { viewport } from 'tiny-utils'
 *   import { Viewport } from 'tiny-utils/lib/dom'
 *   viewport()  => { width: 1920, height: 1080 }
 * </pre>
 */

function viewport(elOrWindow) {
  var width = 0;
  var height = 0;

  if (isWindow(elOrWindow)) {
    var win = elOrWindow;
    width = win.innerWidth ||
    /* istanbul ignore next */
    win.document.documentElement.clientWidth;
    height = win.innerHeight ||
    /* istanbul ignore next */
    win.document.documentElement.clientHeight;
  } else if (isElement(elOrWindow)) {
    var el = elOrWindow;
    width = el.clientWidth;
    height = el.clientHeight;
  }

  return {
    width: width,
    height: height
  };
}

/**
 * @category 文档对象 dom
 * @description 判断一个元素是否位于视口（浏览器可视区域）内。
 * @param {Element} el
 * @return {boolean}
 */

function isInViewport(el) {
  if (!isElement(el)) return false;

  var _a = el.getBoundingClientRect(),
      top = _a.top,
      left = _a.left,
      right = _a.right,
      bottom = _a.bottom;

  var _b = viewport(window),
      width = _b.width,
      height = _b.height;

  return !(top < 0 || bottom > height || left < 0 || right > width);
}

/**
 * @category 游览器对象 bom
 * @object 封装一个有过期时间功能的localStorage
 */
var storage = {
  /**
   * @description 获取storage中单个item值
   * @param { string } key:存储的键名
   * @return {string | null}
   */
  getItem: function getItem(key) {
    var v = JSON.parse(localStorage.getItem(key) || '{}');

    if (v.time > 0 && Number(new Date()) > v.time) {
      // console.log(`参数${key}已过期`)
      return null;
    } else if (v.value === undefined) {
      return null;
    } else {
      return v.value;
    }
  },

  /**
   * @description 设置storage中item值
   * @param { string } key:存储的键名
   * @param { number | string | object } val:存储的值
   * @param { number } [time]:过期时间
   * @return {void}
   */
  setItem: function setItem(key, val, time) {
    var v = {
      value: val,
      time: time && time > 0 ? Number(new Date()) + time : 0
    };
    localStorage.setItem(key, JSON.stringify(v));
  },

  /**
   * @description 移除storage中单个item值
   * @param { string } key:存储的键名
   * @return {void}
   */
  removeItem: function removeItem(key) {
    localStorage.removeItem(key);
  },

  /**
   * @description 清空所有storage值
   * @param { string } key:存储的键名
   * @return {void}
   */
  clear: function clear() {
    localStorage.clear();
  }
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

//可继续遍历的数据类型
var mapTag = '[object Map]';
var setTag = '[object Set]';
var arrayTag = '[object Array]';
var objectTag = '[object Object]';
var argsTag = '[object Arguments]'; //不可继续遍历的数据类型

var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var numberTag = '[object Number]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';
var errorTag = '[object Error]';
var regexpTag = '[object RegExp]';
var funcTag = '[object Function]';
var deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];
/**
 * @category 对象 object
 * @description 深拷贝对象（支持绝大多数数据类型）
 * @param {any} target 需要拷贝的对象
 * @param {Object} [map] 保持已拷贝数据
 * @return {any}
 * @example
 * <pre>
 *   deepClone({
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
}) => {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
}
 * </pre>
 */

function deepClone(target, map) {
  if (map === void 0) {
    map = new WeakMap();
  } // 克隆原始类型


  if (!isObject(target)) {
    return target;
  } // 初始化，根据不同类型进行操作


  var type = getType(target);
  var cloneTarget;

  if (deepTag.indexOf(type) > -1) {
    cloneTarget = getInit(target);
  } else {
    return cloneOtherType(target, type);
  } // 防止循环引用


  if (map.get(target)) {
    return map.get(target);
  }

  map.set(target, cloneTarget); // 克隆set

  if (type === setTag) {
    target.forEach(function (value) {
      cloneTarget.add(deepClone(value, map));
    });
    return cloneTarget;
  } // 克隆map


  if (type === mapTag) {
    target.forEach(function (value, key) {
      cloneTarget.set(key, deepClone(value, map));
    });
    return cloneTarget;
  } // 克隆对象和数组


  var keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, function (value, key) {
    if (keys) {
      key = value;
    }

    cloneTarget[key] = deepClone(target[key], map);
  });
  return cloneTarget;
}

function forEach(array, iteratee) {
  var index = -1;
  var length = array.length;

  while (++index < length) {
    iteratee(array[index], index);
  }

  return array;
} //工具函数-判断是否为引用类型


function isObject(target) {
  var type = _typeof(target);

  return target !== null && (type === 'object' || type === 'function');
} //工具函数-获取实际类型


function getType(target) {
  return Object.prototype.toString.call(target);
} //工具函数-初始化被克隆的对象


function getInit(target, type) {
  var Ctor = target.constructor;
  return new Ctor();
} //工具函数-克隆Symbol


function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
} //工具函数-克隆正则


function cloneReg(targe) {
  var reFlags = /\w*$/;
  var result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
} //工具函数-克隆不可遍历类型


function cloneOtherType(targe, type) {
  var Ctor = targe.constructor;

  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);

    case regexpTag:
      return cloneReg(targe);

    case symbolTag:
      return cloneSymbol(targe);

    case funcTag:
      return targe || {};

    default:
      return null;
  }
}

/**
 * @category 正则校验 regexp
 * @description 判断是否是质数
 * @param {Number} num
 * @returns {Boolean}
 */
function isPrime(num) {
  var boundary = Math.floor(Math.sqrt(num));

  for (var i = 2; i <= boundary; i++) {
    if (num % i == 0) return false;
  }

  return num >= 2;
}

/**
 * @category 正则校验 regexp
 * @description 判断是否是邮箱
 * @param {string} str
 * @returns {Boolean}
 * @example
 * <pre>
 *   isEmail('hl.shen@shunwang.com') => true
 *   isEmail('hl.she') => false
 * </pre>
 */
function isEmail(str) {
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str);
}

/**
 * @category 正则校验 regexp
 * @description 判断是否是包含中文
 * @param {string} str
 * @returns {Boolean}
 * @example
 * <pre>
 *   isCn('cn') => false
 *   isCn('中文') => true </pre>
 */
function isCn(str) {
  return /[\u4E00-\u9FA5]/.test(str);
}

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
function checkIDCard(idcode) {
  if (typeof idcode === 'string' && idcode.length === 18) {
    // 加权因子
    var weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 校验码

    var checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var code = String(idcode);
    var last = idcode[17]; // 最后一位

    var seventeen = code.substring(0, 17); // ISO 7064:1983.MOD 11-2 判断最后一位校验码是否正确

    var arr = seventeen.split('');
    var len = arr.length;
    var num = 0;

    for (var i = 0; i < len; i++) {
      num = num + Number(arr[i]) * weightFactor[i];
    } // 获取余数


    var resisue = num % 11;
    var lastNo = checkCode[resisue]; // 身份证号格式的正则思路

    var idcardPatter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/; // 判断格式是否正确

    var format = idcardPatter.test(idcode); // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码

    return last === lastNo && format;
  } else if (typeof idcode === 'string' && idcode.length === 15) {
    // 身份证号格式的正则思路
    var idcardPatter = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/; // 判断格式是否正确

    var format = idcardPatter.test(idcode);
    return format;
  } else {
    //不合法输入，返回失败
    return false;
  }
}
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

function cardToGender(idcode) {
  //校验身份证
  if (!checkIDCard(idcode)) {
    return '无效的身份证号';
  }

  idcode = idcode.replace(/\s*/g, '');
  var sexStr = '';

  if (idcode.length === 15) {
    console.log((idcode.substring(14, 1), 10));
    sexStr = parseInt(idcode.substring(14, 1), 10) % 2 ? '男' : '女';
  } else if (idcode.length === 18) {
    sexStr = parseInt(idcode.substring(17, 1), 10) % 2 ? '男' : '女';
  }

  return sexStr;
}
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

function cardToBirthday(idcode, split) {
  if (split === void 0) {
    split = '-';
  }

  idcode = idcode.replace(/\s*/g, '');
  var tmpStr = '';

  if (idcode.length === 15) {
    tmpStr = idcode.substring(6, 12);
    tmpStr = '19' + tmpStr;
    tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6);
  } else if (idcode.length === 18) {
    tmpStr = idcode.substring(6, 14);
    tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6);
  }

  return tmpStr;
}

/**
 * @category 字符 string
 * @function 数字补零操作
 * @param {(number | string)} value  值
 * @param {number} [digits] - 位数
 * @return {string}
 * @example
 * <pre>
 *   addZero(5) => '05'
 *   addZero(10) => '10'
 *   addZero(5, 3) => '005'
 * </pre>
 */
function addZero(value, digits) {
  var digit = digits || 2;
  var isNegative = Number(value) < 0;
  var buffer = value.toString();
  var size = 0; // Strip minus sign if number is negative

  if (isNegative) {
    buffer = buffer.slice(1);
  }

  size = digit - buffer.length + 1;
  buffer = new Array(size).join('0').concat(buffer); // Adds back minus sign if needed

  return (isNegative ? '-' : '') + buffer;
}

/**
 * @category 字符 string
 * @function 数字补零操作
 * @param {unknown} value  值
 * @return {boolean}
 * @example
 * isString(5) => false
 * @example
 * isString('111') => true
 */
function isString(value) {
  var _toString = Object.prototype.toString;

  var type = _toString.call(value).split(' ')[1].replace(']', '');

  return type.toLowerCase() === 'string';
}

/**
 * @category 字符 string
 * @function 格式化一个数值
 * @param {number} number  值
 * @param {number} [digits=-1]  保留的小数位数，如果为-1则表示保留所有小数位数，如果该值> -1，则保留的最后一位为四舍五入所得
 * @param {string} [dot = "."]  整数与小数部分的分隔符
 * @param {string} [sep = ","]  千分位分隔符
 * @return {string}
 * @example
 * numberFormat(3.1415) => 3.1415
 * @example
 * numberFormat(3.1415, 3) => 3.142
 */
function numberFormat(number, digits, dot, sep) {
  if (digits === void 0) {
    digits = -1;
  }

  if (dot === void 0) {
    dot = '.';
  }

  if (sep === void 0) {
    sep = ',';
  }

  if (!isNumber(number)) {
    return '';
  }

  var tenExp = Math.pow(10, digits);
  var result = number >= 0 ? '' : '-';
  var decPartStr;

  if (digits > -1) {
    number = Math.round(number * tenExp) / tenExp;
  }

  var abs = Math.abs(number);
  var intPart = Math.floor(abs);
  var decPart = (abs * tenExp - intPart * tenExp) / tenExp;
  var intPartStr = intPart.toString();

  if (decPart === 0) {
    decPartStr = '';
  } else {
    decPartStr = decPart.toString().slice(2);
  }

  if (digits > -1) {
    for (var i = 0; i < digits; i++) {
      if (!decPartStr[i]) {
        decPartStr += '0';
      }
    }

    decPartStr = decPartStr.slice(0, digits);
  }

  var intLen = intPartStr.length;
  var start = intLen % 3;

  for (var i = 0; i < intLen; i++) {
    result += intPartStr[i];

    if ((i + 1 - start) % 3 === 0 && i !== intLen - 1) {
      result += sep;
    }
  }

  if (decPartStr) {
    result += dot;
    result += decPartStr;
  }

  return result;
} //判断传入是否是数字类型

var isNumber = function isNumber(o) {
  return Object.prototype.toString.call(o) === "[object Number]";
};

/**
 * @category url
 * @description 获取url参数,以对象的结果返回
 * @param  {String} url  default: window.location.href
 * @returns {Object}  返回key值对象
 *
 * @example
 * url(http://localhost:4002?a=1&b=2&c=3) => { a: 1, b: 2, c: 3 }
 */
function urlToObj(str) {
  if (str === void 0) {
    str = window.location.href;
  }

  var url = str;
  var params = Object.create(null);

  if (typeof str !== 'string' || url.indexOf('?') === -1) {
    return params;
  }

  var searchPart = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);

  if (searchPart === '') {
    return {};
  }

  var search = searchPart.split('&');

  for (var i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return params;
}

/**
 * @category url
 * @desc   obj转url参数
 * @param  {String} baseUrl
 * @param  {Object} obj
 * @return {String}
 */
function objToUrl(baseUrl, obj) {
  var parameters = '';
  var url = baseUrl;

  for (var key in obj) {
    parameters += key + '=' + obj[key] + '&';
  }

  if (parameters) {
    parameters = parameters.replace(/&$/, '');

    if (/\?/.test(baseUrl)) {
      //如果问号不在最后，添加&
      if (!/\?$/.test(baseUrl)) {
        url = url + '&';
      }

      url = url + parameters;
    } else {
      url = url.replace(/\/?$/, '?') + parameters;
    }
  }

  return url;
}

/*
 * Modified FileSaver.js
 * A saveAs() FileSaver implementation.
 *
 * By Eli Grey, http://eligrey.com
 *
 * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
 * source  : http://purl.eligrey.com/github/FileSaver.js
 */
var isMacOSWebView = /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);

function bom(file) {
  if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(file.type)) {
    return new Blob([String.fromCharCode(0xfeff), file], {
      type: file.type
    });
  }

  return file;
}

function corsEnabled(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', url, false);

  try {
    xhr.send(); // eslint-disable-next-line
  } catch (e) {}

  return xhr.status >= 200 && xhr.status <= 299;
}

function downloadUrl(url, fileName) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';

  xhr.onload = function () {
    download(xhr.response, fileName);
  };

  xhr.onerror = function () {
    console.error('could not download file');
  };

  xhr.send();
}

function click(node) {
  try {
    node.dispatchEvent(new MouseEvent('click'));
  } catch (e) {
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    node.dispatchEvent(evt);
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


var download;
/* istanbul ignore else */

if ('download' in HTMLAnchorElement.prototype && !isMacOSWebView) {
  download = function download(file, name) {
    var a = document.createElement('a');
    var fileName = name || file.name || 'download';
    a.download = fileName;
    a.rel = 'noopener';

    if (typeof file === 'string') {
      a.href = file;

      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          downloadUrl(file, fileName);
        } else {
          a.target = '_blank';
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      var URL_1 = window.URL || window.webkitURL;
      a.href = URL_1.createObjectURL(file);
      setTimeout(function () {
        return URL_1.revokeObjectURL(a.href);
      }, 4e4); // 40s

      setTimeout(function () {
        return click(a);
      }, 0);
    }
  };
} else {
  if ('msSaveOrOpenBlob' in navigator) {
    download = function download(file, name) {
      var fileName = name || file.name || 'download';

      if (typeof file === 'string') {
        if (corsEnabled(file)) {
          downloadUrl(file, fileName);
        } else {
          var a_1 = document.createElement('a');
          a_1.href = file;
          a_1.target = '_blank';
          setTimeout(function () {
            return click(a_1);
          });
        }
      } else {
        navigator.msSaveOrOpenBlob(bom(file), fileName);
      }
    };
  } else {
    download = function download(file, name) {
      var popup = window.open('', '_blank');

      if (popup) {
        popup.document.title = 'downloading...';
        popup.document.body.innerText = 'downloading...';
      }

      var fileName = name || file.name || 'download';

      if (typeof file === 'string') {
        downloadUrl(file, fileName);
        return;
      }

      var force = file.type === 'application/octet-stream'; // @ts-ignore

      var safari = window.safari || '';
      var isSafari = /constructor/i.test(String(window.HTMLElement)) || String(safari);
      var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);

      if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== 'undefined') {
        // Safari doesn't allow downloading of blob URLs
        var reader_1 = new FileReader();

        reader_1.onloadend = function () {
          var url = reader_1.result || '';
          url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');

          if (popup) {
            popup.location.href = url;
          } else {
            window.location.href = url;
          }

          popup = null;
        };

        reader_1.readAsDataURL(file);
      } else {
        var URL_2 = window.URL || window.webkitURL;
        var url_1 = URL_2.createObjectURL(file);
        if (popup) popup.location.href = url_1;else location.href = url_1;
        popup = null;
        setTimeout(function () {
          URL_2.revokeObjectURL(url_1);
        }, 4e4); // 40s
      }
    };
  }
}

var download$1 = download;

/**
 * @category url
 * @function 判断url是否是一个绝对 URL
 * @param {string} url
 * @return {boolean}
 * @example
 * isAbsolute('baidu.com') => false
 * @example
 * isAbsolute('https://www.baidu.com') => true
 */
function isAbsolute(url) {
  return isString$1(url) && /^https?:\/\//.test(url);
} //判断传入是否是字符类型

var isString$1 = function isString(o) {
  return Object.prototype.toString.call(o) === "[object String]";
};

export { addZero, cardToBirthday, cardToGender, checkIDCard, dateFormat, deepClone, download$1 as download, escapeHTML, getDaysDiffBetweenDates, isAbsolute, isAndroid, isCn, isElement, isEmail, isIOS, isIPad, isIPhone, isInViewport, isLinux, isMacOS, isMobile, isPrime, isSameDay, isString, isTablet, isWechat as isWeChat, isWindow, isWindows, numberFormat, objToUrl, sortArrItem, storage, timeAgo, uniqueArr, urlToObj, viewport };
//# sourceMappingURL=index.esm.js.map
