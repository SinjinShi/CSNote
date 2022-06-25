# VUE面试题
6、为什么data是个函数并且返回一个对象呢？
防止组件被多个页面使用时，造成的变量互相污染

使用过哪些Vue的修饰符呢？
.lazy：输入框失焦时才会更新v-model的值
.trim：讲v-model绑定的值首位空格给去掉
.number：将v-medol绑定的值转数字
.stop：阻止事件冒泡
.capture：事件的捕获
.self：点击事件绑定本身才触发
.once：事件只触发一次
.prevent：阻止默认事件
.native：绑定事件在自定义组件上时，确保能执行
.left、.middle、.right：鼠标左中右键的触发
passive：相当于给移动端滚动事件加一个.lazy
camel：确保变量名会被识别成驼峰命名
.sync：简化子修改父值的步骤