// for in 和 for of的区别
// 1.循环数组

// 区别一：for in 和 for of 都可以循环数组，for in 输出的是数组的index下标，而for of 输出的是数组的每一项的值。

const arr = ['a', 'b', 'c', 'd']
 
// for ... in
for (const key in arr) {
  console.log(key) // 输出 0,1,2,3
}
 
// for ... of
for (const key of arr) {
  console.log(key) // 输出 a,b,c,d
}

// 2.循环对象

// 区别二：for in 可以遍历对象，for of 不能遍历对象，只能遍历带有iterator(迭代器)接口的，例如Set,Map,String,Array

const object = { name: 'zs', age: 23 }
// for ... in
for (const key in object) {
  console.log(key) // 输出 name,age
  console.log(object[key]) // 输出 zs,23
}
// for ... of
// for (const key of object) {
//   console.log(key) // 报错 Uncaught TypeError: object is not iterable
// }

// 3.数组对象

const list = [{ name: 'lx' }, { age: 23 }]
  for (const val of list) {
    console.log(val) // 输出{ name: 'lx' }, { age: 23 }
    for (const key in val) {
      console.log(val[key]) // 输出 lx,23
    }
  }