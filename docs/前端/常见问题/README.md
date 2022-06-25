# 常见问题

在前端项目中遇到的一些问题及解决方案

1. [滚动穿透](https://www.cnblogs.com/padding1015/p/10568070.html)

2. [grid 网格布局](https://segmentfault.com/a/1190000041371479)
3. 闭包



4. 防抖（Debouncing）

需要理解闭包

来源：https://zhuanlan.zhihu.com/p/72923073

防抖 : 持续触发事件时，不执行函数，等一定时间间隔后，如果没有再次触发，仅执行一次函数。避免多次触发，频繁执行操作，消耗大量资源。如查询请求

```js
// 防抖动函数
  function debounce(func, delay) {
  let timeout
  return function() {
    clearTimeout(timeout) // 如果持续触发，那么就清除定时器，定时器的回调就不会执行。
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}
```





1. 节流（Throttling）

需要理解闭包

节流函数 : 持续触发事件在一段时间内只能执行一次函数，避免消耗过多的资源，同时能保证持续执行。


```js
function throttling(func,delay) {
  let flag = true;
  return function () {
    if (flag == false) return;
    flag = false;
    setTimeout(() => {
      func.apply(this,arguments);
      flag = true;
    }, delay);
  }
}
```

