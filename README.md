# tiny-tools

工具函数库

前端函数工具库

工具库还在完善中……

参考资料：

1. [micell](https://github.com/micell/micell)
2. [utils-pro](https://github.com/cosyer/utils-pro.git)
3. [bbo](https://github.com/tnfe/bbo)
4. [rgutil](https://github.com/GuCangRan/rgutil)
5. [just](https://github.com/angus-c/just.git)
6. [jtools](https://github.com/Pasoul/jtools)
7. [fetools](https://github.com/iyolee/fetools)

## 介绍

tiny-tools 是一个函数工具，包括数组处理、时间处理、dom 处理、对象处理、常用验证等函数

## 文件命名规范

函数工具方法文件命名统一采用驼峰式命名

## 查看文档

`本地`

```sh
yarn run docs
```

## 安装

```sh
// yarn
yarn add tiny-tools -S

// npm
npm install tiny-tools -S
```

通过`<script>`标签来直接使用

指定版本：

```html
<script src="dist/tiny-tools.min.js"></script>
```

ES 模块版本

```html
<script src="dist/tiny-tools.esm.browser.js"></script>
```

## 使用

`js`

```js
import { isAndroid } from 'tiny-tools'
const isDeviceAndroid = isAndroid()
```

`ts`

```ts
import { sortArrItem } from 'tiny-tools'
import { objType } from 'tiny-tools/lib/array'
const temp: objType[] = [
  { name: 'zzx', score: 90, age: 12 },
  { name: 'lyy', score: 90, age: 5 },
  { name: 'zjf', score: 50, age: 10 },
]
//根据 score 排序,score 相同时根据 age 排序
sortArrItem(sortArrItem(temp, 'age', 0), 'score', 0)
```

## 打包

| 类型 | 文件名                      | 功能                                        |
| :--: | :-------------------------- | :------------------------------------------ |
| cjs  | tiny-tools.cjs.js     | CommonJS，适用于 Node 和 Browserify/Webpack |
| cjs  | tiny-tools.cjs.min.js | CommonJS，适用于 Node 和 Browserify/Webpack |
| umd  | tiny-tools.umd.js     | 通用模块定义，以 amd，cjs 和 iife 为一体    |
| umd  | tiny-tools.umd.min.js | 通用模块定义，以 amd，cjs 和 iife 为一体    |
| esm  | tiny-tools.esm.js     | 软件包保存为 ES 模块文件                    |
| esm  | tiny-tools.esm.min.js | 软件包保存为 ES 模块文件                    |

## 依赖

### Rollup

| 插件名 | 来源 | 说明 |
| :-: | :-: | :-- |
| `rollup-plugin-terser` | 社区 | 采用 Terser 压缩 JavaScript |
| `rollup-plugin-typescript2` | 社区 | ts 转 js 的编译器 |
| `@rollup/plugin-replace` | 官方 | 自动替换文件中的环境变量 |
| `@rollup/plugin-node-resolve` | 官方 | 提供打包引入库的功能 |
| `@rollup/plugin-commonjs` | 官方 | 解决 rollup.js 无法识别 CommonJS 模块 |
| `@rollup/plugin-json` | 官方 | 提供导入 json 文件功能 |
| `@rollup/babel` | 官方 | 用于处理 es6 代码的转换，使转换出来的代码可以用于不支持 es6 的环境使用 |

### Babel

|              依赖名               | 说明                      |
| :-------------------------------: | :------------------------ |
|           `@babel/core`           | Babel 核心依赖            |
|        `@babel/preset-env`        | Babel 默认预设            |
|         `@babel/runtime`          | Babel helper 辅助函数依赖 |
|     `@babel/runtime-corejs3`      | Babel polyfill 填充库     |
| `@babel/plugin-transform-runtime` | 对 Babel 各依赖联动管理   |

### 游览器兼容

IE9+  
Edge 12+  
Chrome 41+  
Firefox 40+  
Opera 28+