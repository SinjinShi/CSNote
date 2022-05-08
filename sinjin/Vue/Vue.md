# Vue

> [官方文档](https://cn.vuejs.org/v2/guide/)

## 安装环境

1. 安装node
2. cmd `npm -v`  看版本
3. 安装cnpm 
   1. `npm install -g cnpm --registry=https://registry.npmmirror.com`
   2. 查看 镜像地址 `cnpm config get registry`
   3. 更新镜像地址 `cnpm config set registry https://registry.npmmirror.com/`
4. 安装 vue
   1. `cnpm i vue -g --save` (--save 保存版本  i install -g --global )
   2. `cnpm i -g @vue/cli` (安装vue-cli 3.0)

## 创建项目

```bash
# 创建项目
vue create my-app
cd my-app

# Project setup
cnpm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint

```


组件 定义与注册

vue.component
