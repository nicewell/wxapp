# wxapp
- [douban-zce](https://github.com/zce/weapp-douban)
- [keke](https://chuanke.baidu.com/v5189664-196974-1130316.html)
- [keke](https://chuanke.baidu.com/v4702151-193232-1107660.html)

### 项目进程

#### 留言板

#### 号码归属地查询

- [api](http://api.mob.com/#/)
- [号码归属地查询-api](http://api.mob.com/#/apiwiki/mobile)

#### 天气wxapp
> 功能阐述：
> 根据用户位置自动获取天气，展示当天和未来几天天气信息

- 认识小程序[**入坑**]
- 上手小程序[**踩坑**]
- 项目实战开发[**填坑**]
- 总结项目经验[**避坑**]
- 项目开发阶段涉及内容&接口
    - 页面布局
    - 业务逻辑处理
    - 模板
    - 引用
    - 位置获取
    - 网络通信
    - 百度地图接口
    - 天气接口

- [百度天气api接口](https://blog.csdn.net/younghaiqing/article/details/54799303)
- [中国天气网api接口-cdn](https://blog.csdn.net/x_iya/article/details/52189750)
- [中国天气网api接口-api](http://wthrcdn.etouch.cn/weather_mini?city=武汉)

#### 电影APP
> 功能阐述：
> 查询影院热映、推荐电影、查询电影和查看电影详情功能

- 项目开发阶段涉及内容&接口
    - 网络通信
    - 豆瓣电影接口[豆瓣api]
    - 模板
    - 页面引用
    - js封装引用
    - loading
    - swiper
    - tips
        - [通过快速入门知道api地址](https://api.douban.com/v2/book/1220562)
        - [通过任一电影详情url携带ID](https://movie.douban.com/subject/4920389/)
        - [通过所得ID进行访问](https://api.douban.com/v2/movie/subject/4920389)
- 关于豆瓣api注意
- `url: 'https://api.douban.com/v2/movie/in_theaters'`因权限问题，用豆瓣官方返回403
- [`url: 'https://douban.uieee.com/v2/movie/in_theaters`](https://github.com/zce/weapp-demo/blob/master/README.md)返回400
- [`'Content-Type': 'json'`](https://blog.csdn.net/oliver_web/article/details/54427313)需要修改header的type
