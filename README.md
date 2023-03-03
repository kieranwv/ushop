<p>wingscloud/assets
	<img width="100%" src="https://github.com/wingscloud/assets/blob/main/logos/banner.svg" />
</p>

# 项目特点

- 基于成熟的产品设计、UI 设计，可以直接作为实际项目使用；

- 一套代码实现 Android / IOS、小程序、H5页面、轻应用等；

- 提供面向社区电商场景的 42 张页面模板，包含商城、订单、社区等全流程页面；

- 主题色变量抽离，可全局灵活修改主题颜色；

- 集成 uView UI ，采用模块化开发，二次封装业务组件，维护性高、扩展性高；

- 提供灵活的微信小程序分包策略，按照不同的功能模块进行代码解耦分离；

# 快速上手

1. 您需要安装 [Hbuilder X](https://www.dcloud.io/hbuilderx.html) App 开发板，以及关于 [Uniapp](https://uniapp.dcloud.net.cn/) 的前置知识。

2. Wings Cloud Template Shop 项目版本更新时，通过 [Github Release](https://github.com/wingscloud/template-shop/releases) 下载相应版本的源码压缩包。

3. 通过下载安装好的 Hbuilder X 打开项目。
	  > 您也可以通过命令行运行项目，更多用法参考 [这里](https://uniapp.dcloud.net.cn/worktile/CLI.html)

4. 运行 --> 运行到微信小程序模拟器，什么是 [微信小程序模拟器](https://developers.weixin.qq.com/doc/)。

5. 运行完成后，您将在微信小程序模拟器中看到页面。

# 源码目录结构

```
├── .hbuilderx                // HbuilderX IDE 配置
├── /api                      // 接口管理目录
├── /components               // 公共组件
├── /mixins                   // 混入方法            
├── /pages                    // 主页面      
├── /pages-xxx                // 分包页面      
├── /static                   // 静态资源
├── /store                    // 全局状态管理
├── /utils                    // 工具函数
├── /uview-ui                 // UI 组件库
├── ...
├── App.vue                   // 根组件
├── main.js                   // 入口文件
├── package.json              // 配置
├── pages.json                // 页面配置
└── theme.scss                // app 主题颜色
└── uni.scss                  // uni 主题变量
└── vue.config.js             // Vue-cli 配置
```

# 界面展示

<table>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/login.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/home.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/city-list.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/shop-home.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/community.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/mine.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/shop-detail.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/shop-cart.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/order-pay.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/order-list.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/order-after-sale.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/address.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/publish-community.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/publish-post.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/address.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/mine-list.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/order-express.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/assets/blob/main/template-shop/post.jpg?raw=true" /></td>
	</tr>
</table>

# 参与共建

欢迎提交 PR。

# 开源协议

Wings Cloud 相关开源软件遵循 [Apache 2.0 协议](https://www.apache.org/licenses/LICENSE-2.0.html)，允许商业使用，但务必保留 LICENSE 信息。
