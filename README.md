# 目录拆分

> 解析属性表达式从对象中读取属性
```javascript
const dirSplit = require("dir-split");
// 带盘符 - 默认分隔符
console.log(dirSplit('C:\\a\\b\\c\\d')); // [ 'C:/a', 'C:/a/b', 'C:/a/b/c', 'C:/a/b/c/d' ]
console.log(dirSplit('C:\\a\\b\\c\\..\\d')); // [ 'C:/a', 'C:/a/b', 'C:/a/b/d' ]
console.log(dirSplit('C:\\a\\b\\c\\..\\..\\d')); // [ 'C:/a', 'C:/a/d']
console.log(dirSplit('C:\\a\\b\\c\\..\\..\\..\\d')); // [ 'C:/d' ]
// 不带盘符 - 默认分隔符
console.log(dirSplit('\\a\\b\\c\\d')); // [ '/a', '/a/b', '/a/b/c', '/a/b/c/d' ]
console.log(dirSplit('\\a\\b\\c\\..\\d')); // [ '/a', '/a/b', '/a/b/d' ]
console.log(dirSplit('\\a\\b\\c\\..\\..\\d')); // [ '/a', '/a/d' ]
console.log(dirSplit('\\a\\b\\c\\..\\..\\..\\d')); // [ '/d' ]

// 带盘符 - 自定义\\分隔符
console.log(dirSplit('C:\\a\\b\\c\\d')); // [ 'C:\\a', 'C:\\a\\b', 'C:\\a\\b\\c', 'C:\\a\\b\\c\\d' ]
console.log(dirSplit('C:\\a\\b\\c\\..\\d')); // [ 'C:\\a', 'C:\\a\\b', 'C:\\a\\b\\d' ]
console.log(dirSplit('C:\\a\\b\\c\\..\\..\\d')); // [ 'C:\\a', 'C:\\a\\d' ]
console.log(dirSplit('C:\\a\\b\\c\\..\\..\\..\\d')); // [ 'C:\\d' ]
// 不带盘符 - 自定义\\分隔符
console.log(dirSplit('\\a\\b\\c\\d')); // [ '\\a', '\\a\\b', '\\a\\b\\c', '\\a\\b\\c\\d' ]
console.log(dirSplit('\\a\\b\\c\\..\\d')); // [ '\\a', '\\a\\b', '\\a\\b\\d' ]
console.log(dirSplit('\\a\\b\\c\\..\\..\\d')); // [ '\\a', '\\a\\d' ]
console.log(dirSplit('\\a\\b\\c\\..\\..\\..\\d')); // [ '\\d' ]

// 支持. 或 ..开头
console.log(dirSplit('./../../', '/', __dirname)); // [ '/Users', '/Users/snail', '/Users/snail/Desktop' ]

```
