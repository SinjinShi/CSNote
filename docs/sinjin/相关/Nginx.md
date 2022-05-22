# Nginx

## Why nginx？

Nginx 性能高

### 架构好

现在 CPU 受限于散热，频率无法提高，目前主要向多核发展，所以单进程/单线程应用性能无法提高

Nginx 通过多进程充分使用 CPU 的多核性能

- master 进程：负责读取配置、绑定端口、创建子进程；
- worker 进程：负责大多数的逻辑，比如，处理网络请求、读写磁盘、和其他服务通信等；
- cache manager、cache loader：缓存相关逻辑；

1. 默认Nginx 有几个核心就会创建几个 worker 进程
2. master 进程监听了 80、443 端口，worker 进程属于 master 的子进程，在 linux 中子进程将默认继承父进程监听的端口；不会端口冲突
3. 支持热更新

### 细节优化

Linux 作为分时操作系统，会将 CPU 的执行时间分为许多碎片，交由所有进程轮番执行。这些时间片有长有短，从5毫秒到800毫秒不等，内核分配其长短时，会依据进程的静态优先级来分配。

Nginx 为了让 worker 进程能分到更长的时间片，会增加 worker 进程的静态优先级，

## 使用入门

Nginx 的配置系统由一个主配置文件和其他一些辅助的配置文件构成。这些配置文件均是纯文本文件，全部位于 Nginx 安装目录下的 conf 目录下。

```shell
# 使用'#'进行注释

# 配置指令-指令参数-指令上下文
# main 上下文
user  nginx;
worker_processes  1;
error_log  logs/error.log  info;

events {
    worker_connections  1024;
}

http {
    server {
        listen          80;
        server_name     www.example.com;
        location / {
            index index.html;
        }
    }
}

mail {
    auth_http  127.0.0.1:80/auth.php;
    pop3_capabilities  "TOP"  "USER";
    imap_capabilities  "IMAP4rev1"  "UIDPLUS";

    server {
        listen     110;
        protocol   pop3;
        proxy      on;
    }
}


```

### 常见指令

include

从其他文件引入配置，可用来对复杂的 Nginx 配置做拆分；

server

server 块用来配置 “虚拟服务器” ，每一个 server 块都相当于一台 “虚拟服务器”，“虚拟服务器” 是一个与实体服务器相对应的概念，将一台实体服务器进行划分，对外表现为多个服务器，可以充分利用服务器的硬件资源，并且可以不用为每一个要运行的网站提供单独的 Nginx 服务器；

listen

用来配置 “虚拟服务器” 监听的 ip 和 port，只能配置在 server 块中 

server_name

用来配置 “虚拟服务器” 的网址，只能配置在 server 块中
优先级，根据匹配优先度匹配

rewrite 和 proxy_pass

### 使用场景

> 域名 -> 域名

将某一个域名的请求在本地拦截之后，转发到 nginx 中，nginx 将请求转发到其他域名；

```php
server {
    listen 80;
    server_name www.baidu.com;
    location / {
        proxy_pass http://www.google.com;
    }
}

```

> 域名 -> 本地 ip

将某一个域名的请求拦截之后，转到到 nginx 中，nginx 将对应的请求打到本地的其他 ip；

```php
server {
    listen 80;
    server_name www.baidu.com;
    location / {
        proxy_pass http://127.0.0.1:8001;
    }
}
```

> 路径 -> 域名

根据不同路径将请求转发至不同的域名；

```php

server {
    listen 80;
    server_name www.baidu.com;
    
    location ^~ /to_google {
        proxy_http_version 1.1;
        rewrite .* /;
        proxy_pass http://google.com/;
    }
}
```

> 接口跨域

解决前端本地开发环境调用线上接口时跨域的问题；

server {
    listen 80;
    
    location ^~ /api {
        proxy_pass http://example.com;
        
        add_header Access-Control-Allow-Methods *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Origin $http_origin;

        if ($request_method = OPTIONS){
            return 200;
        }
    }
}

## 参考

- [Nginx入门](https://mp.weixin.qq.com/s/JrQa88BhRiFFOc7P6zMZZQ)