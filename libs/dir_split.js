const path = require('path');
/**
 * 
 * @param {string}} dir 待拆分目录
 * @param {string} separator  默认 '/'
 * @param {string} baseDir  默认 '__dirname'
 * @returns 
 */
function dirSplit(dir, separator = '/', baseDir) {
  baseDir = baseDir || __dirname;
  if (!dir) {
    throw new Error('请传入待拆分的目录');
  }
  if (typeof dir !== 'string') {
    throw new Error('请传入字符串类型目录，如：/usr/local');
  }
  dir = dir.replace(/\\/g, '/'); // 统一转为/分割形式
  if (dir.indexOf('/') === -1) {
    return dir;
  }
  let driveLetter = ''; // 盘符
  if (/^([a-z]:)/gi.test(dir)) {
    driveLetter = RegExp.$1;
    dir = dir.replace(driveLetter, '');
  }
  if (dir.startsWith('..') || dir.startsWith('.')) {
    // 传入的相对路径，转为全路径
    dir = path.resolve(baseDir, dir);
  }
  if (dir.includes('../') || dir.includes('./')) {
    // 中间包含了相对路径
    dir = path.resolve(dir);
  }
  if (!dir.startsWith('/')) {
    dir = '/' + dir;
  }
  const dirs = dir.split('/');
  dirs.forEach(function (item, index) {
    if (index === 0) {
      dirs[index] = driveLetter;
    } else {
      dirs[index] = dirs[index - 1] + separator + dirs[index];
    }
  });
  dirs.splice(0, 1);
  return dirs;
}

module.exports = dirSplit;
