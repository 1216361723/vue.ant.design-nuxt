# nuxt-app

> 用于底层框架搭建而创建

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


# 当前环境

> css 使用的是 sass 
>
> 因为我之前做的大部分项目用的都是sass，也会用less。只不过用习惯了 就选择了sass
>
> 权限控制
> -- 使用了路由守卫
>
> table 页面
>
> 跳转当前页面，判断当前 token 是否存在，存在则跳转到 table 页面，没有则重定向到 login页面
>
> 非正常访问路由
>
> 在已知地址，并且当前没有权限访问【未登录/菜单里面没有的路径】,进行一个拦截，重定向到 首页
>
> 个人牢骚
>
> 我其实项目做过很多很多的东西，前端能用到的我几乎都接触了个遍，图表，地图，表单，文件上传，富文本编辑器，webscoket，响应式，表格，权限，有道云翻译，语音视频播放，图片加载，等等各个东西都接触过，并非说你用一个东西 就非要对它底层和所有了解透，并且能说的条条是道。我不是那样的人，我一般使用一个东西，会去认真去看那库的所有东西。看完了，了解里面的大致东西，并感觉自己能够真正上手后，我就开始了撸码阶段。我觉得只要你在做项目的时候不拖沓，能够快速把东西做出来，并且质量可以那就是一个程序员的基本素养。如果每做一个东西，都要追求把所有东西懂透，摸扎实，那你还有多少时间进行开发项目呢？ 做项目开发利弊权衡。新的东西太多，不可能把所有的东西都吃透，那不是一时半会儿能够扎实的。
>
>  而且我个人的职业规划，也不是一直做一个前端程序员，我现在是想往 有技术的 PM 方向学习，能实际解决问题，能快速发现问题。能和人及时并有效的沟通。
>
