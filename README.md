
> 一个前端基于Vue.js，后端基于Node.js的博客内容管理器


###### 前端：Vue.js2.0
* Vue.js
* Vue-Router
* Vuex
* Vue-resource

###### 后端
* Node.js
* mongoDB (mongoose)
* Express

###### 工具和语言
* Webpack
* ES6
* SASS

## Directory

```
│  .babelrc           babel配置
│  .editorconfig
│  .eslintignore
│  .eslintrc.js       eslintrc配置
│  .gitignore
│  index.html         入口页面
│  package.json
│  README.md
│  setup.html         初始化账户页面
│  webpack.config.js  webpack配置
│
├─dist                打包生成
│
├─server              服务端
│      api.js         Restful接口
│      db.js          数据库
│      index.js
│      init.json      初始数据
│
└─src
    │  main.js        项目入口
    │  setup.js       初始化账户
    │
    ├─assets          外部引用文件
    │  ├─css
    │  ├─fonts
    │  ├─img
    │  └─js
    │
    ├─components      vue组件
    │  ├─back         博客控制台组件
    │  ├─front        博客页面组件
    │  └─share        公共组件
    │
    ├─router          路由
    │
    ├─store           vuex文件
    │
    └─style           全局样式
```


## Setup
####环境
* Node.js **v6**
* mongoDB [Download](https://www.mongodb.com/download-center?jmp=nav#community)
[安装方法](https://docs.mongodb.com/manual/installation/)

安装完成并建立数据库文件夹后，启动mongdb
``` bash
mongod
```

克隆远程库
```
git clone https://github.com/ycwalker/CMS-of-Blog.git
```
进入项目目录
```
cd CMS-of-Blog
```
安装依赖
```
npm install

```
打包生成 (已经打包dist目录，可以省略)
```
npm run build
```
运行服务器
```
npm start
```
打开浏览器输入http://localhost:3000/
打开账户建立页面，建立完毕，登入管理器

开发
```
npm run dev
```
Eslint
```$xslt
npm run lint
```

##### Notice
* server目录下的init.json，初始化数据放在该文件中。
* 推荐[MongoChef](http://3t.io/mongochef/)作为mongoDB可视化管理工具
