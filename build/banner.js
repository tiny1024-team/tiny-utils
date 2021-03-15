import pkg from '../package.json';

export default `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.name} is a utility library of zero dependencies for javascript.
 * (c) 2020-${new Date().getFullYear()}
 * Released under the ${pkg.license} License.
 * version ${pkg.version}
 */
`