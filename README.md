<div align="center">
  <a href="https://github.com/kaivanwong/u-shop" target="_blank">
    <img width="180" src="./static/app/logo.png"/>
  </a>
</div>

<div align="center">
  <h1>uShop 社区电商微信小程序</h1>
  <div>
  
  基于 uni-app 的社区电商小程序页面模板

[![license](https://img.shields.io/github/license/kaivanwong/u-shop)](./LICENSE)
[![github](https://img.shields.io/github/package-json/v/kaivanwong/u-shop)](https://github.com/kaivanwong/u-shop)

  </div>
</div>

### 🌈 简介

面向社区电商应用场景的微信小程序模板，涵盖商品模块、订单模块、用户模块、社区模块、积分商城等内容。所有页面均使用模块化、组件化开发，代码维护性高，您可以使用该模板页面进行业务快速开发。

### 📌 完成页面

- [×] 登录/注册页面、微信登录页面

- [×] 首页推荐（地区选择、金刚区、商品、帖子推荐）

- [×] 商品分类/列表

- [×] 商品详情（SKU、评价、精选晒单、推荐）

- [×] 购物车功能

- [×] 下单界面（收货地址维护、优惠卷，支付界面）

- [×] 我的订单（详情、取消、付款、申请售后、评价、物流等）

- [×] 个人中心（设置、个人首页）

- [×] 社区模块（圈子、帖子）

- [×] 创建圈子、帖子页面

- [×] 我的关注、粉丝、社区、点赞

- [×] 我的收藏、我的优惠卷、收货地址维护

- [×] 积分商城模块

### 部分界面展示

由于本地静态图片较多，暂时未上线发布，您可以参考图片或者 Clone 代码后运行。

<table>
    <tr>
        <td><img width="100%" src="./.readme/login.jpg"></td>
        <td><img width="100%" src="./.readme/home.jpg"></td>
        <td><img width="100%" src="./.readme/city-list.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/shop-home.jpg"></td>
        <td><img width="100%" src="./.readme/community.jpg"></td>
        <td><img width="100%" src="./.readme/mine.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/shop-detail.jpg"></td>
        <td><img width="100%" src="./.readme/shop-cart.jpg"></td>
        <td><img width="100%" src="./.readme/order-pay.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/order-list.jpg"></td>
        <td><img width="100%" src="./.readme/order-after-sale.jpg"></td>
        <td><img width="100%" src="./.readme/address.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/publish-community.jpg"></td>
        <td><img width="100%" src="./.readme/publish-post.jpg"></td>
        <td><img width="100%" src="./.readme/address.jpg"></td>
    </tr>
    <tr>
        <td><img width="100%" src="./.readme/mine-list.jpg"></td>
        <td><img width="100%" src="./.readme/order-express.jpg"></td>
        <td><img width="100%" src="./.readme/post.jpg"></td>
    </tr>
</table>

### 使用

#### 关于 uview-ui，[点我访问 uview-ui 1.x](https://v1.uviewui.com/)

uView 是 uni-app 生态专用的 UI 框架，uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码， 可发布到 iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自 uni-app 网)。

- 注意：针对业务需要，对 uview-ui 组件进行了部分修改，请勿直接从官网替换组件

- 修改的内容列表：

1. u-waterfall 增加了左右两列边距的参数，marginLeft、marginRight

2. u-search 增加了调节圆角大小的参数，borderRadius

3. u-button 增加了 dark、white 配色，增加了 small 的 size，节流默认值由 1000 调整为 400
4. theme.scss 修改了 primary 配色，增加了 dark 配色

5. u-input 增加了 selectIconName 参数，可以自定义 type='select'模式下的右侧图标

6. u-upload 增加了删除图片 modal 的确认按钮颜色参数，deleteConfirmBtnColor

#### 目录说明

- /api 基于 uview-ui 的请求处理，以及模块化管理 api
- /components 全局组件
- /mixins 全局混入方法
- /pages 主包
- /pages-mall 电商副包
- /pages-mine 我的副包
- /pages-community 社区副包
- /pages-points 积分商城副包
- /static 静态资源
- /utils 工具函数
- /store vuex 全局状态管理
- /uview-ui uview-ui 包
- App.vue 根组件，配置 uniapp 应用生命周期及全局 data
- main.js 入口文件，禁止不必要的全局引入
- manifest.json uniapp 应用配置
- pages.json uniapp 页面配置
- template.h5.html h5 渲染模板
- theme.scss app 主题配置
- uni.scss 全局 scss 变量，注意此文件不要放置样式文件，仅限于 scss 变量
- vue.config.js webpack 配置

#### 关于 api 管理以及请求方法

避免重复封装，导致不必要的体积增长，使用基于 uview-ui 的 api 请求方法，再此基础上做了二次封装

- api 采用模块化管理，目录：/api/modules

```
使用方法：第一项为url，第二项为入参，第三项为header
export const xxxApi = (Vue, vm) => {
	return {
		xxxx: (code) => vm.$u.get('/xxx/xxx', {
			code
		},{token:xxx}),
	}
}
```

- 如何在页面中使用？

```
使用方法：this.$u.api.xxxx(xxx)
```

- 关于拦截器以及请求配置，目录：/api/config.js

```
请求地址：HTTP_URL_DEV / HTTP_URL_PROD
请求前缀：HTTP_URL_DEV_PREFIX / HTTP_URL_PROD_PREFIX
uview-ui 的请求配置：UVIEWUI_HTTP_CONFIG
请求拦截器：httpRequest
响应拦截器：httpResponse
```

- 自定义请求封装，目录：/api/custom-request.js

#### 关于 vuex 状态管理

- user 模块

包括了用户登录、退出、微信登录、定位等常用方法封装及状态持久

#### 关于 mixins 全局混入

- smsCode.js 验证码获取方法

#### 关于 utils 工具函数

- location.js 微信定位（含坐标转位置详情，需配置）

#### 如何修改主题色

- 修改 uview-ui 的颜色配置

```
目录：/uview-ui/theme.scss

$u-main-color: #303133;
$u-content-color: #606266;
...

直接修改主题颜色即可
```

- 修改 fun-uniapp 的颜色配置

```
目录：/theme.scss
$app-theme-color: #5758f6;
$app-theme-bg-color: #ffffff;
...

直接修改主题颜色即可
```

- 其他的主题色配置

```
uniapp的pages.json配置

"tabBar": {
	"color": "#333",
	"selectedColor": "#333",
	...
},
```

#### 开发细则

- 全局样式处理

```
路径：@/theme.scss

此class名用于页面最外层
.page {
	min-height: 100vh;
	background-color: $app-theme-bg-gray-color;
}

此class名用于组件最外层
.slot{

}
```

- 关于全局自定义 navbar

考虑后期扩展性问题，将全部页面都设置为 `"navigationStyle": "custom"` ，页面内部统一使用基于 uview-ui 的二次封装组件——navbar，路径：/components/navbar/navbar
一些特殊导航栏的页面，如应用首页，商城首页等，也在/components/navbar 路径下

```
使用方法：
<Navbar title="选择城市"></Navbar>
```

- 关于模块化开发

考虑到业务的扩展性，根据不同业务需要，将组件进行二次封装成组件，如商品卡片/购物车底部按钮/订单 tab 等

```
例子：
路径：/pages/home/index.vue
<!-- 精选晒单 -->
<view class="recommendTopic ">
	<!-- 带操作的标题组件 -->
	<TitleOperate title="精选晒单"></TitleOperate>
	<view class="list">
		<!-- 瀑布流组件 -->
		<u-waterfall ref="topicWaterFall" v-model="recommendTopicList" marginLeft="7rpx" marginRight="7rpx">
			<template v-slot:left="{ leftList }">
				<CardTopic v-for="(item, index) in leftList" :key="index" :data="item"></CardTopic>
			</template>
			<template v-slot:right="{ rightList }">
				<CardTopic v-for="(item, index) in rightList" :key="index" :data="item"></CardTopic>
			</template>
		</u-waterfall>
	</view>
</view>
```

- 图片及图标

所有的图片必须保持纵横比，基于 uniapp 的 image 组件，或者基于 uview-ui 的 u-image，建议使用 u-image（网络图片），自带图片加载失败的占位符，注意，如果要显示占位符，height 必须传一个固定值

```
例子：
<image :src="data.img" mode="widthFix"></image>
或者
<u-image height='360rpx' mode="widthFix" :src="data.img"></u-image>

建议使用网络图片时使用 u-image ，使用本地图片时使用 image
```

图标全部使用 u-icon 组件，其他的图标需要进行网络加载或者本地加载（如果图标体积小的话可以本地加载，体积大建议网络加载）

```
例子：
<u-icon name="thumb-up"></u-icon>
```

### 开源协议

[MIT licensed](./LICENSE) © 2022-PRESENT Kaivan Wong
