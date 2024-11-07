# 前端面试知识库
## 1、axios常用的请求方法有哪些
### 1.GET
#### 用于从服务器获取数据，常用于请求数据而不提交数据。
```javascript
axios.get('/url', { params: { key: 'value' } })
```

### 2.POST
#### 用于向服务器提交数据，通常用于创建资源。
```javascript
axios.post('/url', { key: 'value' })
```

### 3.PUT
#### 用于更新服务器上的资源，通常用于完全替换资源。
```javascript
axios.put('/url', { key: 'value' })
```

### 4.DELETE
#### 用于删除服务器上的资源。
```javascript
axios.delete('/url', { data: { key: 'value' } })
```

### 5.PATCH
#### 用于部分更新服务器上的资源。
```javascript
axios.patch('/url', { key: 'value' })
```

### 其他配置选项
#### 除了这些请求方法，axios 还支持多种配置选项，比如：
- headers：自定义请求头。
- timeout：设置请求超时时间。
- responseType：指定响应数据类型（如 json、blob、text）。

## 2、vue的双向绑定原理是什么？里面的关键点在哪里？
### Vue 的双向绑定是通过 数据劫持 和 发布-订阅模式 实现的：  
### 1.数据劫持：Vue 利用 Object.defineProperty（Vue 2）或 Proxy（Vue 3）来监听数据的 getter 和 setter，这样一旦数据变化，Vue 就能捕捉到并作出反应。
### 2.发布-订阅模式：每个数据都维护一个依赖列表（Dep），里面存放了使用该数据的地方（Watcher）。当数据变化时，Dep 通知相关的 Watcher 更新视图。
### 3.模板编译：Vue 在编译模板时会分析数据依赖，绑定数据和视图，确保数据变化能触发相应的视图更新。
### 4.v-model：v-model 通过 :value 和 @input 实现输入框的双向绑定，让数据变化与视图实时同步。
### 核心要点是 监听数据变化 并 更新依赖的视图，使数据和视图保持一致。

## 3、实现水平垂直居中的方式？
### 1.使用 Flexbox
```css
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;    /* 垂直居中 */
}
```
### 2.使用 Grid
```css
.container {
  display: grid;
  place-items: center; /* 同时水平和垂直居中 */
}
```
### 3.绝对定位 + transform
```css
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
### 4.使用 margin 方式（适用于已知宽高）
```css
.element {
  width: 200px;
  height: 200px;
  margin: auto;
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
}
```

## 4、常用伪元素有哪一些?
> ::before
#### 在元素内容之前插入内容，可以用于装饰性图标、背景等。
> ::after
#### 在元素内容之后插入内容，常用于清除浮动或装饰性内容。
> ::first-line
#### 选择元素中的第一行文字，可以用来设置文字样式（如颜色、字体大小）。
> ::first-letter
#### 选择元素中的第一个字母，常用于首字母样式，如大写、加粗等。
> ::placeholder
#### 选择\<input>或\<textarea>元素的占位符文本，常用于设置占位符的颜色和样式。
> ::selection
#### 选择被用户高亮选中的文本部分，适用于自定义文本选中的背景色和文字色。

## 5、移动段如何适配不同屏幕尺寸？

### 1.媒体查询
#### 使用 @media 定义不同屏幕宽度下的样式。
```css
@media (max-width: 768px) {
  /* 针对小屏幕的样式 */
}
@media (min-width: 769px) and (max-width: 1024px) {
  /* 针对中等屏幕的样式 */
}
```
### 2.弹性布局（百分比布局）
#### 使用百分比定义宽度，让元素根据父级容器的宽度自适应。
```css
.container {
  width: 80%; /* 根据屏幕宽度调整 */
}
```
### 3.rem 或 em 单位
#### 使用 rem 或 em 作为字体和间距的单位，方便根据根元素的字体大小调整。
```css
html {
  font-size: 16px;
}
.element {
  font-size: 1.5rem; /* 根据根字体大小自适应 */
}
```
### 4.视口单位（vw, vh）
#### 使用 vw（视口宽度）和 vh（视口高度）适配不同屏幕尺寸。
```css
.element {
  width: 50vw; /* 视口宽度的 50% */
  height: 20vh; /* 视口高度的 20% */
}
```
### 5.Flexbox 和 Grid 布局
#### 使用弹性布局，使内容在不同屏幕宽度下自适应排列。

### 6.响应式框架（如 Bootstrap）
#### 利用框架提供的响应式栅格系统，快速适配不同屏幕。

## 6、本地存储有哪一些？他们三者有什么区别？
### Web 本地存储主要包括以下三种方式：localStorage、sessionStorage 和 Cookies。它们的主要区别在于数据的存储时长、作用范围、以及大小限制。
### 1.localStorage
- 特性：存储的数据没有过期时间，除非手动删除，否则数据会一直保存在浏览器中。
- 大小限制：约为 5MB（不同浏览器略有不同）。
- 作用域：同一浏览器的同一域名下的所有页面共享数据。
### 2.sessionStorage
- 特性：仅在浏览器会话（Session）期间有效，关闭标签页或浏览器后数据就会被清除。
- 大小限制：约为 5MB。
- 作用域：同一标签页（或浏览器窗口）中的数据共享，不同标签页或窗口不共享。
### 3.Cookies
- 特性：用于在客户端与服务器之间传递数据，默认在浏览器关闭后即失效，但可以通过设置 expires 或 max-age 属性指定过期时间。
- 大小限制：每个 Cookie 大小约为 4KB，单个域名下最多存储 20 个左右（不同浏览器略有不同）。
- 作用域：同一域名下的所有页面共享，支持跨域（通过设置 SameSite=None; Secure）。
### 一般来说，localStorage 和 sessionStorage 用于前端数据的持久化，而 Cookies 更适合需要传递到服务器的数据（如身份验证信息）。
## 7、js的数据类型？如何判断js的数据类型？
### JavaScript 中的数据类型可以分为 基本类型 和 引用类型。
#### 1.基本类型
- Number：数字类型（包括整数和浮点数）
- String：字符串类型
- Boolean：布尔值（true 或 false）
- Undefined：未定义值
- Null：空值
- Symbol：符号类型（ES6 引入）
- BigInt：大整数类型（ES2020 引入）
#### 2.引用类型
- Object：对象类型，包括普通对象、数组、函数等。
### 判断数据类型的方法
- typeof 操作符：适合判断基本类型（但对于 null 和 object 判断有误）
```javascript
typeof 123;          // "number"
typeof 'hello';      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof Symbol();     // "symbol"
typeof 123n;         // "bigint"
typeof {};           // "object"
typeof [];           // "object" （数组被判断为对象）
typeof null;         // "object" （这是一个历史遗留的 bug）
```
- instanceof 操作符：用于判断某个对象是否属于某个构造函数的实例，适合判断引用类型。
```javascript
[] instanceof Array;          // true
{} instanceof Object;         // true
function(){} instanceof Function; // true
```
- Object.prototype.toString.call()：可以准确判断所有类型
```javascript
Object.prototype.toString.call(123);        // "[object Number]"
Object.prototype.toString.call('hello');    // "[object String]"
Object.prototype.toString.call([]);         // "[object Array]"
Object.prototype.toString.call(null);       // "[object Null]"
Object.prototype.toString.call(undefined);  // "[object Undefined]"
```

### 总结
- 基本类型：使用 typeof 基本可行，但对 null 的判断例外。
- 引用类型：可以使用 instanceof 或 Object.prototype.toString.call() 来精确判断。

## 8、说一下ES6的新特性有哪些？

### 1.let 和 const 声明
### let 用于块级作用域变量，const 用于定义常量，无法重新赋值。
```javascript
let x = 10;
const y = 20;
```

### 2.箭头函数
### 简化函数定义，且不绑定 this。
```javascript
const add = (a, b) => a + b;
```

### 3.模板字符串
### 使用反引号 (``) 包裹字符串，可以嵌入变量和表达式。
```javascript
const name = 'Alice';
console.log(`Hello, ${name}!`);
```

### 4.解构赋值
### 允许从数组或对象中提取值到变量中。
```javascript
const [a, b] = [1, 2];
const { x, y } = { x: 10, y: 20 };
```

### 5.默认参数
### 函数参数可以设置默认值。
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
```

### 6.展开运算符（...）
### 可用于展开数组或对象，也可用于剩余参数。
```javascript
const arr = [1, 2, ...[3, 4]];
const obj = { ...{ a: 1 }, b: 2 };
```

### 7.for...of 循环
### 用于遍历可迭代对象（如数组、字符串等）。
```javascript
for (const item of [1, 2, 3]) {
  console.log(item);
}
```

### 8.增强的对象字面量
### 在对象字面量中可以直接使用变量名作为属性名，还支持方法定义的简写。
```javascript
const name = 'Alice';
const person = { name, greet() { console.log('Hi!'); } };
```

### 9.Promise
### 用于处理异步操作，解决回调地狱问题。
```javascript
const promise = new Promise((resolve, reject) => {
  resolve('Success!');
});
```

### 10.模块化（import 和 export）
### 允许模块化代码，使用 import 和 export 进行模块的导入和导出。
```javascript
// module.js
export const value = 42;
// main.js
import { value } from './module.js';
```

### 11.Symbol
### 一种新的原始数据类型，常用于定义唯一标识符。
```javascript
const sym = Symbol('unique');
```

### 12.Class 语法
### 基于原型的类定义，增强了面向对象编程的体验。
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
```