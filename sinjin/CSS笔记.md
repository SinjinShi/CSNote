# CSS笔记

> replaced element
> Nonreplaced element

块级元素
行内元素

大小写敏感，默认全部小写

## stylesheet

```html

<html>
    <head>
        <title></title>
        <meta ...>
        <link>
        <style>
    </head>

    <body>
    </body>
</html>

```

---

`外部样式表`  放再 head 元素内

文档样式表

嵌入式样式表

行内样式

首选样式表
--不同标题将导致只有一个第一个标题样式表生效

候选样式表

永久样式表

```css

/* 使用 @import 必须放在 style 元素中，且再其他的css 规则前，
一个style 元素可以放置多个元素， 
可以在外部样式表中使用 @import 引用其他外部样式表，必须放再其他的css 规则前 */

<style type="text/css ">

    @import url(sheet.css);

</style>
```

> 样式表内不能有标记符

![样式组成](images/2021-12-28-09-32-40.png)

css 不支持 嵌套注释

---

媒体查询

媒体 类型

媒体描述符

特性查询

## 选择器

### 属性

群组选择符

通用选择符 `*`

类选择符

```html
<style type="text/css">
    /* 类选择器写在一起，表示同时拥有这两个类的元素，与顺序无关 */
    p.prop-1.prop-2 {
    color: #ccc;
    }

</style>

<!-- 可以拥有多个类，空格隔开，命名规则使用小写 -->
<p class="prop-1 prop-2 ">倒霉孩子</p>

```

ID选择符

```html
<style type="text/css">
    /* 由于 ID 唯一，所以通常不标明 元素类型*/
    p#unique {
        color:#fff
    }

</style>

<!-- 一个元素仅能有一个id，该id 在文档中唯一，不可以使用空格分隔 -->
<p class="prop-1 prop-2 " id="unique">倒霉孩子</p>

```

> ID选择符的样式权重 > 类选择符

属性选择符

```css
/* 简单属性选择符 */
a[alt][title] {fon-weight:bold;}

/* 精准属性值选择符
    如果属性有多个值，则顺序要相同才可以匹配 */
a[alt="#"] {fon-weight:bold;}

/* 部分匹配属性值选择符 (有多种部分匹配符)*/
a[alt|="en"] {color:white;}

/* 起始值属性选择符 */
/* 不区分大小写标识符 */
```

### 结构

祖辈元素（上层）
后代元素（下层）
特例：连续元素 可以叫做 父元素 和 子元素

```css
/* 后代选择符（上下文选择符，后代元素都生效 */
/* ul 下的所有后代 li 元素 */
ul li {color:#fff;}

/* 子连接符 > ,子元素生效 */
ul>li {color:#fff;}

/* 紧领同胞连接符  +，选择紧临的同级元素，中间如果有其他同级或者子级元素，不生效 */
h1+p {color:#fff;}
/* 一般同胞连接符 ~， 选择 后续所有同级元素*/
ul~li {color:#fff;}

```

### 伪类

伪类允许拼接

`结构伪类`

:root
:empty
:only-child
:only-of-type
:first-child
:last-child
:first-of-type
:last-of-type

:nth-child(2n+1)
//n取值0，1，2，3.html元素是从一开始计算的
nth-child(odd) //奇数
nth-child(even) //偶数
:nth-last-child(2n+1)

:nth-of-type()
:nth-last-of-type()

`动态伪类`

> 链接伪类

link
visited

> 用户操作伪类

focus（注意和ui状态伪类区分）
hover
active

---

`UI状态伪类`

enabled
disabled
checked
default

>可选性伪类

required
optional（required 属性为false 也可匹配）

> 有效性伪类

valid
invalid

> 范围伪类

in-range
out-of-range

>可变性伪类

read-write
read-only

5. target 伪类
6. lang 伪类 lang(fr)
7. 否定伪类 :not(xxx)
   1. 可以串联
   2. 不可以嵌套

#### 伪元素选择符

伪元素只能在选择符的最后
一个选择符中只能有一个伪元素

1. ::first-letter
2. ::first-line （修饰块级元素）
3. ::before
4. ::after

## 特指度 和 层叠

### 特指度

通用符 连接符 特指度

继承，层叠

```css
/* 行内样式 > ID选择符 > 属性选择符 */
`#id > *[id="id"]`

/* 重要声明 > 非重要声明 */

p.dark {color: #333 !important; background: white;}


```

继承 零特指度 > 通用符的无特指度

盒模型属性不继承

inherit 继承来的属性有特指度

### 层叠

权重
来源
特指度
先后顺序

链接 LVFHA

## 值与单位

1. 值
   1. 关键字
      1. none/underline..
      2. 全局关键字 (属性值all)
         1. inherit
         2. initial
         3. unset
   2. 字符串
      1. 注意引号配对
      2. 转义
   3. url
      1. 相对路径
      2. 绝对路径
      3. 其他服务器上的相对路径
      4. `body {background: url(images/icon.png)}` url 与 括号之间不能有空格，
   4. image
      1. url
      2. image-set
      3. gradient
   5. 标识符
      1. identifier
2. 数字与百分数
   1. 整数
   2. 数字
   3. 百分数
   4. 弹性值
   5. 距离
      1. 绝对长度单位 in cm mm q pt pc px 
      2. 相对长度单位 em ex rem ch
      3. 视区单位   vw vh vmin vmax
      4. 计算值 calc() 20个算子
3. 颜色
   1. 具名2颜色
   2. RGB RGBa(整数和百分数不能混用)，alpha->opacity 不透明度 只能在0-1之间，不能用百分数
   3. HSL HSLa
   4. transparent
   5. currentColor
4. angle 
   1. deg
   2. grad
   3. rad
   4. turn
5. 时间 频率
   1. s ms
   2. hz khz
6. 位置
7. 自定义值

## 字体

1. 通用字体族
2. 使用引号
   1. 字体名称存在空格 或者 符号
   2. 区别于字体族
3. font-face
   1. 懒加载
   2. 但是浏览器实现时会提前全部下载
4. 兼容性载入
5. font-style
6. font-weight
   1. normal(400) bold(700) bolder lighter 100-900

## 文本属性

1. 段落格式
   1. 缩进 text-indent
   2. 文本对齐 text-align
      1. justify
   3. text-align-last > text-align

### 行高的继承

## flex

 flex-flow