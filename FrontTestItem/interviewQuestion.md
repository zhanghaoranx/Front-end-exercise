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

## 9、let、const、var三者有什么区别
### 1.作用域
- var：函数作用域。声明的变量在函数内有效，但不会局限于代码块内（如 if 或 for 语句块），所以可能导致变量污染。
- let 和 const：块级作用域。只在当前代码块中有效，避免了变量提升带来的不确定性
### 2.变量提升
- var：存在变量提升，声明的变量会在代码执行前被提升到顶部，并初始化为 undefined。
- let 和 const：也会提升，但不会初始化，使用前必须先声明，否则会抛出 ReferenceError。
### 3.重复声明
- var：允许在同一作用域内重复声明相同变量，不会报错。
- let 和 const：在同一作用域内不允许重复声明相同变量。
### 4.是否可重新赋值
- var 和 let：声明的变量可以重新赋值。
- const：声明的变量为常量，不可重新赋值。
### 5.适用场景
- var：现在已较少使用，因容易引发作用域污染和变量提升问题。
- let：适合声明可变的变量，推荐在块级作用域中使用。
- const：适合声明不可变的常量，且在赋值后不可修改，推荐默认使用 const，只有需要变更时再用 let。

## 10、数组去重有哪些方法
### 1.使用 Set
### 利用 Set 数据结构，它会自动去重。
```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];
// 结果：[1, 2, 3, 4]
```
### 2.filter + indexOf
### 通过 filter 结合 indexOf 方法，保留第一次出现的元素。
```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
// 结果：[1, 2, 3, 4]
```
### 3.reduce
### 使用 reduce 累加器实现去重。
```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = arr.reduce((acc, item) => {
  if (!acc.includes(item)) acc.push(item);
  return acc;
}, []);
// 结果：[1, 2, 3, 4]
```
### 4.forEach + includes
### 手动遍历数组并使用 includes 进行判断。
```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [];
arr.forEach(item => {
  if (!uniqueArr.includes(item)) uniqueArr.push(item);
});
// 结果：[1, 2, 3, 4]
```
### 5.Map 记录
### 适用于复杂对象去重，通过 Map 存储已出现的值。
```javascript
const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
const uniqueArr = [];

const map = new Map();
arr.forEach(item => {
  if (!map.has(item.id)) {  // 判断 `Map` 中是否已存在该 id
    map.set(item.id, true);  // 将 id 存入 `Map` 中
    uniqueArr.push(item);    // 将去重后的对象添加到结果数组中
  }
});
// 结果：[{ id: 1 }, { id: 2 }]
```

## 11、说一下深拷贝和浅拷贝，如何自己实现一个深拷贝
### 深拷贝和浅拷贝的区别
- 浅拷贝：只复制对象的第一层属性，对象内部嵌套的引用类型（如数组或对象）仍然指向原对象中的内存地址。也就是说，浅拷贝后的对象内部嵌套的引用类型数据仍然共享。
  - 浅拷贝方法示例：Object.assign、扩展运算符 ...
- 深拷贝：完全复制对象，包括嵌套的引用类型，使拷贝后的对象和原对象完全独立。深拷贝后的对象内部无论是基本类型还是引用类型都不与原对象共享。
### 实现深拷贝的方法
### 1.使用 JSON.parse(JSON.stringify(obj))
这是最简单的方法，但有局限性（如无法拷贝函数、undefined、Date 等类型）。
```javascript
const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj));
```
### 2.递归方法（自定义深拷贝）
为了更全面地实现深拷贝，可以手动写一个递归函数，遍历对象的每一层并进行复制。
```javascript
function deepClone(obj) {
  // 检查是否是基本类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理 Date 类型
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 处理 Array 类型
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let item of obj) {
      arrCopy.push(deepClone(item)); // 递归拷贝数组元素
    }
    return arrCopy;
  }

  // 处理普通对象类型
  const objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]); // 递归拷贝对象属性
    }
  }
  return objCopy;
}

// 测试
const original = { a: 1, b: { c: 2 }, d: [3, 4], e: new Date() };
const copied = deepClone(original);
```
## 12、vue的生命周期有哪一些？说一下它们每个阶段做什么操作
### 1.创建阶段
- `beforeCreate`  
  实例初始化阶段，`data` 和 `methods` 等尚未被初始化，不能访问 `data`、`computed` 和 `methods` 中的内容。
  - 用途：初始化一些没有依赖数据的操作，如初始化非响应式属性
- `created`
实例创建完成，`data`、`methods`、`computed`等已经被初始化，但未挂载到DOM上，`$el`不可用。
  - 用途：可以进行数据请求、数据初始化等操作。
### 2.挂载阶段
- `beforeMount`  
在挂载开始之前执行，此时模板已编译好，虚拟DOM已经创建完成，但还未渲染到真实DOM中。
  - 用途：一般较少使用，除非在DOM挂载前需要执行一些操作。
- `mounted`
实例挂载完成，真实DOM已渲染，此时可以访问并操作真实DOM
  - 用途：适合操作DOM，执行需要依赖真实DOM的操作，如获取节点、初始化第三方插件。
### 3.更新阶段
- `beforeUpdate`  
在响应数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。
  - 用途：在更新之前执行某些操作，例如保存未更新的数据状态。
- `updated`  
响应式数据更新完成后调用，此时DOM也已完成重新渲染。
  - 用途：可以执行依赖于DOM更新后的操作（避免频繁使用，因为频繁更新可能导致性能问题）。
### 4.销毁阶段
- `beforeDestroy`  
实例销毁之前调用，实例仍然可以正常使用，数据和DOM都可访问。
  - 用途：在实例被销毁前清除定时器、解绑事件等清理工作，避免内存泄露。
- `destroyed`  
实例销毁后调用，所有的绑定和事件监听器都会被移除，子实例也会被销毁。
  - 用途：用于最后的清理操作。

## 13、组件通讯方式有哪一些
### 1.父子组件通信
- `props`和`$emit`
  - 父组件通过`props`向子组件传递数据。
  - 子组件通过$emit发送事件来通知父组件。
```javascript
// 父组件
<ChildComponent :message="parentMessage" @update="handleUpdate" />

// 子组件
props: ['message'],
this.$emit('update', newValue);
```
### 2. 非父子组件通信
- 事件总线（Event Bus）
  - 使用空的Vue实例作为事件总线，让非父子关系的组件之间传递事件和数据。
```javascript
// 创建事件总线
const EventBus = new Vue();

// 组件 A 中触发事件
EventBus.$emit('eventName', data);

// 组件 B 中监听事件
EventBus.$on('eventName', (data) => {
  // 处理 data
});
```
- 依赖注入（provide/inject）
  - 父组件使用provide提供数据，后代组件使用inject获取，适合跨多级组件的传递。
```javascript
// 父组件
provide() {
  return { value: this.value };
}

// 子组件
inject: ['value']
```
### 3.状态管理（Vuex）
- Vuex
  - 全局状态管理模式，适合复杂项目中的状态共享。通过state、getters、mutations和actions管理和共享数据。
```javascript
// 读取 Vuex 状态
computed: {
  value() {
    return this.$store.state.value;
  }
}

// 修改 Vuex 状态
this.$store.commit('mutationName', payload);
```
### 4.`ref` 和 `attrs` / `listeners`
- `ref`
  - 父组件可以通过`ref`直接访问子组件实例方法和属性。
```javascript
// 父组件
<ChildComponent ref="child" />
this.$refs.child.method();
```
- `$attrs`和`$listeners`
  - 用于向深层嵌套的子组件传递`props`和事件监听器，适合需要多层级传递时使用。

## 14、Vuex有几个属性及作用
### 1.`state`
- 作用：存储全局的应用状态数据、类似于组件中的`data`。
- 用法：通过`this.$store.state`访问状态。
```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  }
});
// 访问
this.$store.state.count;
```
### 2.`getters`
- 作用：类似于组件中的计算属性，`getters`用于对`state`中的数据进行处理并返回结果。
- 用法：通过`this.$store.getters`访问。
```javascript
const store = new Vuex.Store({
  state: { count: 0 },
  getters: {
    doubleCount: state => state.count * 2
  }
});
// 访问
this.$store.getters.doubleCount;
```
### 3.`mutations`
- 作用：用于同步更改`state`中的数据，是修改`state`的唯一方式。
- 用法：通过`commit`提交
```javascript
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
// 提交
this.$store.commit('increment');
```
### 4.`actions`
- 作用：用于执行异步操作（如请求API）或复杂的逻辑操作，最终提交`mutations`来修改状态。
- 用法：通过`dispatch`分发。
```javascript
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    increment(state) { state.count++; }
  },
  actions: {
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    }
  }
});
// 分发
this.$store.dispatch('asyncIncrement');
```
### 5.`modules`
- 作用：用于将状态、`getters`、`mutations`和`actions`进行模块化，适合大型应用，将不同功能的状态分开管理。
- 用法：在创建`store`时定义模块。
```javascript
const moduleA = {
  state: { count: 0 },
  mutations: { increment(state) { state.count++; } },
  actions: { incrementAction({ commit }) { commit('increment'); } }
};

const store = new Vuex.Store({
  modules: { a: moduleA }
});
// 访问
this.$store.state.a.count;
```  
## 15、vue的监听属性和计算属性有什么区别？
### 1.计算属性（`computed`）
- 特点：计算属性基于它们的依赖进行缓存，只有依赖的数据发生变化时才会重新计算，否则返回缓存值。
- 适用场景：适合用于基于现有数据计算出新数据，且该计算过程不需要异步操作。
- 用法
```javascript
computed: {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```
- 优点：缓存机制能避免不必要的重新计算，性能更好。
### 2.监听属性（watch）
- 特点：监听属性监听数据变化，并在变化时执行特定的回调函数。
- 适用场景：适合用于执行异步或较为复杂的逻辑操作，如数据请求、深度监听对象或数组。
- 用法：
```javascript
watch: {
  firstName(newVal, oldVal) {
    console.log(`First name changed from ${oldVal} to ${newVal}`);
  }
}
```
- 优点：可以响应式的处理更复杂的逻辑，且可监听到数据的变化过程（例如newVal和oldVal）

## 16、说一下防抖和节流。怎么实现？
### 防抖（Debounce）和节流（Throttle）都是优化高频触发事件（如滚动、输入、调整窗口大小等）的方法。它们的主要区别在于：防抖是让事件在一段时间不触发后执行，而节流是让事件在固定时间间隔内只执行一次。
### 1.防抖（Debounce）
- 作用：在事件触发时，延迟执行，如果在延迟时间内事件再次触发，则重新计时。
- 适用场景：用户输入搜索关键词、调整窗口大小等，适合频繁触发但只希望在最后一次触发后执行的场景。
### 实现防抖函数：
```javascript
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);  // 清除之前的定时器
    timer = setTimeout(() => {  // 重新设置定时器
      func.apply(this, args);
    }, delay);
  };
}

// 使用
window.addEventListener('resize', debounce(() => {
  console.log('窗口大小改变后触发');
}, 500));
```
### 2.节流（Throttle）
- 作用：限制事件的执行频率，即使事件持续触发，也只会在每个固定时间间隔内执行一次。
- 适用场景：页面滚动、按钮点击等，适合需要控制执行频率的场景。
### 实现节流函数：
```javascript
function throttle(func, interval) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      func.apply(this, args);  // 在间隔时间后执行
      lastTime = now;
    }
  };
}

// 使用
window.addEventListener('scroll', throttle(() => {
  console.log('页面滚动');
}, 500));
```
## 17、Vue的导航守卫有哪一些？
### 1.全局守卫
- `beforeEach`  
每次导航前调用，主要用于权限验证或页面访问控制。
```javascript
router.beforeEach((to, from, next) => {
  // 验证逻辑
  next(); // 放行导航
});
```
- `beforeResolve`  
  在组件内的 beforeRouteEnter 解析完成后执行。适合需要等待所有导航前置守卫完成后的操作。
```javascript
router.beforeResolve((to, from, next) => {
  next();
});
```
- `afterEach`  
导航完成后调用（不会阻止导航），用于如记录日志等操作。
```javascript
router.afterEach((to, from) => {
  // 导航后执行的逻辑
});
```
### 2.路由独享守卫
定义在特定路由配置中的守卫，仅对该路由有效：
- `beforeEnter`  
在进入某个特定路由前调用，常用于设置路由级别的权限验证。
```javascript
const routes = [
  {
    path: '/home',
    component: Home,
    beforeEnter: (to, from, next) => {
      // 路由级守卫
      next();
    }
  }
];
```
### 3.组件内守卫
定义在单个组件内，适用于组件的生命周期控制：
- `beforeRouteEnter`  
  在组件加载前调用，只有在导航成功后才进入组件，无法访问 `this`，但可以通过回调方式访问组件实例。
```javascript
beforeRouteEnter(to, from, next) {
  next(vm => {
    // 在导航完成后，访问组件实例 vm
  });
}
```
- `beforeRouteUpdate`  
当同一路由被复用（例如`/user/1`到`/user/2`）时调用，适合更新组件的数据。
```javascript
beforeRouteUpdate(to, from, next) {
  // 当路由参数更新时处理逻辑
  next();
}
```
- `beforeRouteLeave`  
在导航离开组件时调用，常用于确认用户是否要离开当前页面（如未保存表单数据）。
```javascript
beforeRouteLeave(to, from, next) {
  // 离开前确认
  next();
}
```

## 18、登录拦截怎么实现？
### 在 Vue 应用中，登录拦截通常通过路由守卫实现。在用户访问需要登录权限的页面时，检查用户的登录状态，未登录则重定向到登录页面。
### 实现步骤：
### 1.设定登录状态
在应用状态（如Vuex）或浏览器存储（如`loaclStroage`、`sessionStorage`）中保存用户登录状态或令牌（token）。
### 2.设置路由元信息
在需要登录访问的路由中添加`meta`字段，用于标记该路由是否需要登录权限。
```javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // 需要登录权限
  },
  {
    path: '/login',
    component: Login
  }
];
```
### 3.全局路由守卫进行拦截
使用Vue Router的`beforeEach`全局导航守卫，在导航前检查用户是否登录。
```javascript
router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem('token')); // 检查登录状态
  
  // 判断路由是否需要权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // 用户未登录，重定向到登录页
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      // 用户已登录，允许访问
      next();
    }
  } else {
    // 无需权限的路由，直接访问
    next();
  }
});
```
### 4.登录成功后的重定向
在登录页中，通过`redirect`参数返回用户最初想访问的页面。
```javascript
// 登录页面示例
methods: {
  login() {
    // 登录逻辑，通过验证后
    localStorage.setItem('token', 'userToken'); // 保存 token
    
    // 重定向到之前想访问的页面
    const redirect = this.$route.query.redirect || '/';
    this.$router.push(redirect);
  }
}
```
### 实现效果：
- 当用户访问需要登录的页面时，`beforeEach` 会拦截并检查登录状态。
- 未登录用户会被重定向到登录页面，并保存跳转前的路由信息。
- 登录成功后，会将用户重定向回原始页面。

## 19、介绍一下promise
### `Promise`是ES6引入的一种用于处理异步操作的对象，提供了一种更优雅的方式来管理回调函数，解决了传统回调函数（“回调地狱”）的问题。
### Promise的三种状态
#### 1.`pending`（待定）：Promise刚创建时的初始状态，尚未完成。
#### 2.`fulfilled`（已完成）：异步操作成功，调用`resolve`，并返回结果。
#### 3.`rejected`（已失败）：异步操作失败，调用`reject`，并返回错误信息。
#### 状态一旦从`pending`转为`fulfilled`或`rejected`，就不能再改变。

### 基本用法
### 1.创建一个promise  
#### `Promise`构造函数接受一个回调函数，回调函数提供两个参数：`resolve`（表示成功）和`reject`（表示失败）。
```javascript
const promise = new Promise((resolve, reject) => {
  const success = true; // 模拟异步任务
  if (success) {
    resolve('成功！');
  } else {
    reject('失败！');
  }
});
```
### 2.处理结果：`then`和`catch`
- `then`:处理成功的结果。
- `catch`处理失败的结果。
```javascript
promise
  .then(result => {
    console.log(result); // 输出：成功！
  })
  .catch(error => {
    console.error(error);
  });
```
### 3.链式调用
可以通过链式调用将多个异步任务依次执行。
```javascript
new Promise(resolve => resolve(1))
  .then(res => res + 1) // 返回 2
  .then(res => console.log(res)) // 输出 2
  .catch(err => console.error(err));
```

### 常用方法
1.`Promise.all`并行执行多个Promise，等所有Promise完成后返回结果数组；如果有一个失败，则返回失败。
```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(results => console.log(results)) // [1, 2]
  .catch(error => console.error(error));
```
2.`Promise.race`并行执行多个Promise，返回第一个完成的结果（无论是成功还是失败）。
```javascript
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('A'), 100)),
  new Promise(resolve => setTimeout(() => resolve('B'), 50))
]).then(result => console.log(result)); // 输出：B
```
3.`Promise.allSettled`等所有Promise完成，无论成功还是失败，返回每个Promise的状态和结果。
```javascript
Promise.allSettled([Promise.resolve(1), Promise.reject('Error')])
  .then(results => console.log(results));
```
4.`Promise.any`返回第一个成功的Promise，如果所有Promise都失败，则返回一个AggregateError。
```javascript
Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Success')
]).then(result => console.log(result)); // 输出：Success
```
## 20、什么是闭包？如何实现？
#### 闭包（Closure） 是指 函数可以访问其定义时所在的词法作用域，即使这个函数是在其词法作用域之外调用。
#### 通俗地说，闭包让内部函数记住了外部函数的变量，即使外部函数已经执行完毕并被销毁。
### 闭包的特点
1.内部函数可以访问外部函数的变量
2.外部函数执行完后，其作用域链不会被销毁，仍然被内部函数引用。
3.闭包可以让变量的值保持在一个安全的环境中。

### 闭包的实现
闭包通常通过在函数内返回一个函数来实现。
```javascript
function outerFunction() {
  let count = 0; // 外部函数的变量
  return function() {
    count++; // 内部函数可以访问 count
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // 输出 1
counter(); // 输出 2
```
- `counter`是`outerFunction`返回的内部函数，它可以访问`conut`变量，即使`outerFunction`已经执行完毕。
- `count`的值始终保存在闭包的作用域中。
### 使用闭包的场景
1.数据缓存  
闭包可以保存一些状态或数据，便于后续使用。
```javascript
function createCache() {
  const cache = {};
  return function(key, value) {
    if (value !== undefined) {
      cache[key] = value; // 设置值
    }
    return cache[key]; // 获取值
  };
}

const cache = createCache();
cache('a', 100); // 设置缓存
console.log(cache('a')); // 输出 100
```
2.封装私有变量  
使用闭包可以模拟私有变量，避免全局污染。
```javascript
function Counter() {
  let count = 0; // 私有变量
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = Counter();
console.log(counter.increment()); // 输出 1
console.log(counter.decrement()); // 输出 0
```
3.绑定事件  
在事件处理函数中使用闭包保存数据。
```javascript
function bindEvent(element, message) {
  element.addEventListener('click', function() {
    console.log(message); // 闭包访问 message
  });
}

const button = document.querySelector('button');
bindEvent(button, 'Button clicked!');
```
### 闭包的优缺点
- 优点：
  - 数据持久化：可以保持函数的局部变量。
  - 模拟私有变量：实现封装和安全性。
- 缺点：
  - 占用内存：由于外部作用域不会销毁，可能导致内存泄露。
  - 调试困难：变量作用域变得复杂，增加调试难度。