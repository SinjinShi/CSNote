# JS 入门笔记

[阮一峰JS入门](https://wangdoc.com/javascript/basic/introduction.html)
[阮一峰ES6入门](https://es6.ruanyifeng.com/)

[现代js教程](https://zh.javascript.info/)


## 基础语法

### 变量

8种基础变量
undefined, null, boolean, string, symbol, bigint, number, and object

Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

NaN -> not a number

case sensitive

let
const: all uppercase letters,with words separated by an underscore

floats 格式在操作的时候可能会被四舍五入导致数据不准确



在 HTML 标签中，我们推荐使用双引号，JS 中我们推荐使用单引号。

最佳实践：script 使用内嵌式，并在body标签内最后位置使用，确保所有元素都加载完成，防止 JS 无法找到对象导致错误

console.log

console.warn

console.error




## Javascript

变量名称 
- 只能由字母(A-Z、a-z)、数字(0-9)、下划线(_)、美元符( $ )组成,不能以数字开头
- 驼峰式
- 变量名长度不能超过255个字符
- 不能使用关键字 和 保留字

```
if、else、switch、break、case、default、for、in、do、while、

var、let、const、void、function、continue、return、

try、catch、finally、throw、debugger、

this、typeof、instanceof、delete、with、

export、new、class、extends、super、with、yield、import、static、

true、false、null、undefined、NaN

```


```

enum、await

abstract、boolean、byte、char、double、final、float、goto、int、long、native、short、synchronized、transient、volatile、

arguments eval Infinity

# 以下关键字只在严格模式中被当成保留字，在ES6中是属于关键字
implements、interface、package、private、protected、public

```

基础数据类型：基本数据类型（值类型）：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。
 
引用数据类型（引用类型）：Object 对象。

数据类型之间最大的区别：

基本数据类型：参数赋值的时候，传数值。

引用数据类型：参数赋值的时候，传地址。

：JS 中，所有的变量都是保存在栈内存中的。

基本数据类型：

基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。

引用数据类型：

对象是保存到堆内存中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而变量保存了对象的内存地址（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。

在字符串中我们可以使用\作为转义字符，当表示一些特殊符号时可以使用\进行转义。

模板字符串

布尔型和数字型相加时，结果为数字， true 按 1 来算 ，false 按 0 来算。

### Number

    console.log(0.1 + 0.2 ===  0.30000000000000007); //true



使用双精度保存，64位

变量大于或小于 这个范围返回

无穷大（正无穷）：Infinity

无穷小（负无穷）：-Infinity

注意 typeof Infinity 返回结果是 number

可以考虑 引用开源库 decimal.js 进行数学计算

---

NaN Not a Number

typeof NaN的返回结果是 number。

Undefined 和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身。

-、*、/、%这几个符号会自动进行隐式转换 成数学计算， + 优先充当 字符串的 连字符


### Null

空对象 null 虽然是一个单独的数据类型，但null 相当于是一个 object，只不过地址为空（空指针）

需要与 undefined 做区分

null == undefined //true

null === undefined 的结果是 false

10 + null 结果为 10。

10 + undefined 结果为 NaN。

任何值和 null 运算，null 可看做 0 运算。

任何数据类型和 undefined 运算都是 NaN。

### undefined

1. 变量已声明，但是未赋值
2. 变量未声明
3. 函数无返回
4. 调用函数未传参
   1. 为形参设置默认值可以避免


## 数据类型转换

typeof 

instanceof 


显式类型转换
toString()

null 和 undefined 没有 toString（）方法

```js

var a = 255;

//对于Number调用toString()时可以在方法中传递一个整数作为参数
//此时它将会把数字转换为指定的进制,如果不指定则默认转换为10进制
a = a.toString(2); // 转换为二进制

console.log(a); // 11111111
console.log(typeof a); // string

```
String()

本质上调用 toString() 
但是 会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。

Number()

情况一：字符串 --> 数字

（1）如果字符串中是纯数字，则直接将其转换为数字。

（2）如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0。

（3）只要字符串中包含了其他非数字的内容（小数点按数字来算），则转换为 NaN。怎么理解这里的 NaN 呢？可以这样理解，使用 Number() 函数之后，如果无法转换为数字，就会转换为 NaN。

情况二：布尔 --> 数字

（1）true 转成 1

（2）false 转成 0

情况三：null --> 数字，结果为：0

情况四：undefined --> 数字，结果为：NaN

parseInt(string)

parseInt()：将传入的数据先转换为字符串再处理，从左至右提取数值, 一旦遇到非数值就立即停止；停止时如何还没有提取到数值, 那么就返回NaN。

情况一：字符串 --> 数字

（1）只保留字符串最开头的数字，后面的其他内容自动消失。

（2）如果字符串不是以数字开头，则转换为 NaN。

（3）如果字符串是一个空串或者是一个全是空格的字符串，转换时会报错。

情况二：Boolean --> 数字，结果为：NaN

情况三：Null --> 数字，结果为：NaN

情况四：Undefined --> 数字，结果为：NaN

```js

var a = '110';
var num = parseInt(a, 16); //将 a 当作 16 进制处理，num = 110（16）= 272（10）

var a = '5';
var num = parseInt(a, 2); // 将 a 当成 二进制 来看待，转换成 十进制 的 num，由于 5 不是 二进制数，转换失败， 结果 NaN

```

parseFloat(string)

性质和 parseInt（）一致，需要注意只识别第一个小数点，第二个小数点自动消失

```js

var a = '123.456.789px';
console.log(parseFloat(a)); // 打印结果：123.456

```

1. Boolean()

）情况一：数字 --> 布尔。 0 和 NaN是 false，其余的都是 true。比如 Boolean(NaN)的结果是 false。

（2）情况二：字符串 ---> 布尔。空串是false，其余的都是 true。全是空格的字符串，转换结果也是 true。字符串'0'的转换结果也是 true。

（3）情况三：null 和 undefined 都会转换为 false。

（4）情况四：引用数据类型会转换为 true。注意，空数组[]和空对象{}，转换结果也是 true，这一点，很多人都不知道。



# 隐式类型转换

isNaN ()

自增/自减运算符：++、—-

正号/负号：+a、-a

加号：+

运算符：-、*、/

#隐式类型转换（特殊）
逻辑运算符：&&、||、! 。非布尔值进行与或运算时，会先将其转换为布尔值，然后再运算。&&、||的运算结果是原值，!的运算结果为布尔值。。

关系运算符：<、> <= >=等。关系运算符，得到的运算结果都是布尔值：要么是 true，要么是 false。具体可以看下一篇文章《运算符》。


```js
// 字符串运算

result1 = 1 + 2 + '3'; // 字符串：33

result2 = '1' + 2 + 3; // 字符串：123


```

Boolean + 数字 = 数字
Boolean 型和数字型相加时， true 按 1 来算 ，false 按 0 来算。这里其实是先调 Number() 函数，将 Boolean 类型转为 Number 类型，然后再和 数字相加。

null + 数字 = 数字
等价于：0 + 数字

undefined + 数字 = NaN
计算结果：NaN

任何值和 NaN 做运算的结果都是 NaN。

## 运算符

算数运算符

`+ - * / %`

取模运算

```js

余数 = m % n；

```

n < 0，先把 n 取绝对值后，再计算。等价于 m % (-n)

n = 0, 结果 NaN

取余运算结果的正负性，取决于 m，而不是 n。比如：10 % -3的运算结果是 1。-10 % 3的运算结果是-1

不要直接判断两个浮点数是否相等，对数据进行计算时需要注意精度问题,浮点数值的最高精度是 17 位小数，但在进行算术计算时，会丢失精度，导致计算不够准确。

```js

console.log((0.1 + 0.2)*1000); //

```



算数运算符的运算规则
（1）先算乘除、后算加减。

（2）小括号( )：能够影响计算顺序，且可以嵌套。没有中括号、没有大括号，只有小括号。

（3）百分号：取余。只关心余数。


自增/自减运算符

a++/++a 之后，a的值一定会变化

```js

    var b = 1;
    console.log(b++); // 1
    console.log(++b); // 3

```

一元运算符

typeof()

/+

/-



逻辑运算符

&& || !


与运算 返回的结果 为，逻辑判断运行到哪里，就返回哪里的值

第一个值为 false，停止计算，并返回第一个值 的 原值

第一个值为 true， 继续计算第二个值，并返回第二个值的原值

```js

console.log(3-3 && 2 < 4); //0
console.log(3-5 && 2 < 4); //true
console.log(3 < 2 && 2 < 4);//false
console.log(3 - 2 && "123");//123


```