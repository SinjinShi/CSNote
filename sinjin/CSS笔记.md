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
2. ::first-line
3. 