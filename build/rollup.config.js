// babel插件用于处理es6代码的转换，使转换出来的代码可以用于不支持es6的环境使用
import babel from '@rollup/plugin-babel'
// resolve将我们编写的源码与依赖的第三方库进行合并
import nodeResolve from '@rollup/plugin-node-resolve'
// ts转js的编译器
import typescript from 'rollup-plugin-typescript2';
// 解决rollup.js无法识别CommonJS模块
import commonjs from '@rollup/plugin-commonjs'
// 全局替换变量比如process.env
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
// 压缩打包代码
// https://github.com/TrySound/rollup-plugin-terser
import { terser } from 'rollup-plugin-terser'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import pkg from '../package.json'
import banner from './banner';

const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
const input = resolve('../src/index.ts')
const outDir = resolve('../dist')

const getBabelOptions = ({ useESModules = false, corejs = false } = {}) => {
  let options = {
    exclude: ['node_modules/**', 'lib/**', 'dist/**', 'es/**'],
    babelHelpers: 'runtime',
    plugins: [['@babel/plugin-transform-runtime', {
      useESModules,
      corejs
    }]]
  }
  if (!corejs) {
    // babel 默认不支持 ts 需要手动添加
    options.extensions = [...DEFAULT_EXTENSIONS, '.ts']
  }
  return options
}

export default [
  // commonjs
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      banner,
      sourcemap: true
    },
    plugins: [
      json(),
      typescript({
        // https://github.com/ezolenko/rollup-plugin-typescript2
        clean: true,
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            experimentalDecorators: true, // 启动装饰器
            declaration: true,
            declarationDir: 'lib',
            allowJs: false,
            isolatedModules: false,
          }
        },
      }),
      nodeResolve(),
      babel(getBabelOptions()),
      commonjs()
    ]
  },
  // ES
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      banner,
      sourcemap: true
    },
    plugins: [
      json(),
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true }))
    ]
  },
  // ES browser
  {
    input,
    output: {
      file: `${outDir}/${pkg.name}.esm.browser.js`,
      format: 'es',
      sourcemap: true
    },
    plugins: [
      json(),
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },
  // ES browser production
  {
    input,
    output: {
      file: `${outDir}/${pkg.name}.esm.browser.js`,
      format: 'es',
      sourcemap: true
    },
    plugins: [
      json(),
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          drop_console: !isDev,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
        format: {
          comments: RegExp(`${pkg.name}`)
        }
      })
    ]
  },
  // UMD, 通用模块
  {
    input,
    output: {
      file: `${outDir}/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true
    },
    plugins: [
      json(),
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ corejs: 3 })),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },
  // UMD production
  {
    input,
    output: {
      file: `${outDir}/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true
    },
    plugins: [
      json(),
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ corejs: 3 })),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          drop_console: !isDev,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
        format: {
          comments: RegExp(`${pkg.name}`)
        }
      })
    ]
  }
]