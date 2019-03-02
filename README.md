# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


01  安装node
运行
>> node -v
>> npm -v
 确保这两个命令可用

02 安装vue客户端工具vue-cli
>>npm install --global vue-cli

03 创建vue项目
>> vue init webpack 项目名

04 启动项目
>> npm run dev

05 运行项目
http://127.0.0.1:8080/#/

06 其他注意
安装 fastclick，解决点击延迟300毫秒的问题
>npm install fastclick --save
安装styleus，方便编写样式
>npm install stylus --save
>npm install stylus-loader --save
安装轮播图（参考https://github.com/surmon-china/vue-awesome-swiper）
>npm install vue-awesome-swiper@2.6.7 --save

07 安装axios，请求ajax
npm install axios --save
