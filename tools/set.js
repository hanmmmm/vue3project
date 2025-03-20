{/* size属性   返回Set实例的成员总数。

  Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
Set.prototype.add()                   add(value)：添加某个值，返回 Set 结构本身。

Set.prototype.delete()                delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。

Set.prototype.has()                   has(value)：返回一个布尔值，表示该值是否为Set的成员

Set.prototype.clear()：清空所有成员      clear()：清除所有成员，没有返回值

四个遍历方法（用于遍历成员）

Set.prototype.keys()：返回键名的遍历器

Set.prototype.values()：返回键值的遍历器

Set.prototype.entries()：返回键值对的遍历器

Set.prototype.forEach()：使用回调函数遍历每个成员
需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
                        
原文链接：https://blog.csdn.net/m0_55030688/article/details/137121892 */}

// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// Set本身是一个构造函数，用来生成 Set 数据结构。

let set = new Set(['red', 'green', 'blue'])
console.log(set.size)  //3
for (let item of set.keys()) {

  console.log('第一',item) 
  // 第一 red
  // 第一 green
  // 第一 blue
}

for (let item of set.values()) {

  console.log('第二',item)
  // 第二 red
  // 第二 green
  // 第二 blue
}
// entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。
for (let item of set.entries()) {

  console.log(item);
  // [ 'red', 'red' ]
  // [ 'green', 'green' ]
  // [ 'blue', 'blue' ]
}

// Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。
set.forEach((value, key)=>{

  console.log(value,key);
  // red red
  // green green
  // blue blue
})


// 用途：用来数组去重
// [...new Set(array)]
var list = [1, 2, 3, 4, 5, 6, 'hello', 6, 6, 7, 9]
const uniqueList = new Set(list)
console.log(uniqueList);
// Set(9) { 1, 2, 3, 4, 5, 6, 'hello', 7, 9 }
// 扩展运算符（…）内部使用for…of循环，所以也可以用于 Set 结构。扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。
console.log([...uniqueList]);
// [ 1, 2, 3, 4, 5, 6, 'hello', 7, 9 ]
// Array.from方法可以将 Set 结构转为数组。
console.log('第三',Array.from(uniqueList))
// 第三 [ 1, 2, 3, 4, 5, 6, 'hello', 7, 9 ]


// // 字符串去重
console.log([...new Set('abcdda')])  //[ 'a', 'b', 'c', 'd' ]
console.log([...new Set('abcdda')].join("")) //abcd

const s = new Set();
s.add(1).add(2).add(2);
// 注意2被加入了两次
console.log(s); // Set(2) { 1, 2 }
console.log(s.size ); //2
console.log(s.has(1)) // true
console.log(s.has(2)) // true
console.log(s.has(3)) // false

console.log(s.delete(2)) // true
// console.log(s.has(2)) // false
// console.log(s); //Set(1) { 1 }


// 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

                        
// 原文链接：https://blog.csdn.net/qq_44741577/article/details/136030295
