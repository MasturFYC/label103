export { angka } from './end-of-ayah'
export { Bismillah, Surat } from './bismillah'
export { PageTitle } from './page-title'
export { PageDesc } from './page-desc'

export function isString(obj: Object) {
  return (Object.prototype.toString.call(obj) === '[object String]');
}