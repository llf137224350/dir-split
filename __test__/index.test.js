test('带盘符 - 绝对路径', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\d')).toEqual(['C:/a', 'C:/a/b', 'C:/a/b/c', 'C:/a/b/c/d']);
});

test('带盘符 - 绝对路径中包含相对路径-1', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\..\\d')).toEqual(['C:/a', 'C:/a/b', 'C:/a/b/d']);
});
test('带盘符 - 绝对路径中包含相对路径-2', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\..\\..\\d')).toEqual(['C:/a', 'C:/a/d']);
});
test('带盘符 - 绝对路径中包含相对路径-3', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\..\\..\\..\\d')).toEqual(['C:/d']);
});

test('不带盘符 - 绝对路径', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('\\a\\b\\c\\d')).toEqual(['/a', '/a/b', '/a/b/c', '/a/b/c/d']);
});

test('不带盘符 - 绝对路径中包含相对路径-1', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('\\a\\b\\c\\..\\d')).toEqual(['/a', '/a/b', '/a/b/d']);
});
test('不带盘符 - 绝对路径中包含相对路径-2', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('\\a\\b\\c\\..\\..\\d')).toEqual(['/a', '/a/d']);
});
test('不带盘符 - 绝对路径中包含相对路径-3', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('\\a\\b\\c\\..\\..\\..\\d')).toEqual(['/d']);
});

test('带盘符 - 绝对路径自定义分隔符', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\d', '\\')).toEqual(['C:\\a', 'C:\\a\\b', 'C:\\a\\b\\c', 'C:\\a\\b\\c\\d']);
});

test('带盘符 - 绝对路径中包含相对路径自定义分隔符-1', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\..\\d', '\\')).toEqual(['C:\\a', 'C:\\a\\b', 'C:\\a\\b\\d']);
});
test('带盘符 - 绝对路径中包含相对路径自定义分隔符-2', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\..\\..\\d', '\\')).toEqual(['C:\\a', 'C:\\a\\d']);
});
test('带盘符 - 绝对路径中包含相对路径自定义分隔符-3', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('C:\\a\\b\\c\\..\\..\\..\\d', '\\')).toEqual(['C:\\d']);
});

// 支持. 或 ..开头
test('支持. 或 ..开头', () => {
  const dirSplit = require('dir-split');
  expect(dirSplit('./../../', '/', '/Users/snail/Desktop/test1/test2')).toEqual(['/Users', '/Users/snail', '/Users/snail/Desktop']);
});
