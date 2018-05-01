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

## 新闻app
- [news-api](https://www.jianshu.com/p/e6f072839282)
- 

- [ ] 关于bug
    - 封装在外部的 common.showLoading('str')
    - 为什么两个页面都执行了 common.showLoading('str')
    - 不是当前页面？
    - 执行顺序是什么样子的？

- [x] 完成电影wxapp
- [ ] 下拉加载
- [ ] 增加历史查询记录
- [ ] 查询记录设置存活时间和条目数量

---
## you-now
- [ ] Promise

---
## video
- [ ] [js-斗地主游戏，打地鼠游戏，万年历](https://ke.qq.com/course/231377)
- [ ] [wxapp-游戏，点餐，电影，瀑布流，天气预报](https://ke.qq.com/course/183479)
- [ ] [微信小程序棒子老虎鸡](https://ke.qq.com/course/277454)
- [ ] [电商小程序开发](https://ke.qq.com/course/282732)
- [ ] [会员 卡券 红包 积分 模板消息](https://ke.qq.com/course/280316)
- [ ] [小程序菜单栏联动](https://ke.qq.com/course/243926)
- [ ] []()
- [ ] []()
