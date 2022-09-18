// api请求地址
export const HTTP_URL_DEV = 'http://sdyy.apicloud-system.com/cm-app-api'
export const HTTP_URL_PROD = 'http://sdyy.apicloud-system.com/cm-app-api'

// api前缀
export const HTTP_URL_DEV_PREFIX = '/api'
export const HTTP_URL_PROD_PREFIX = '/api'

// 基于uview-ui的http配置
export const UVIEWUI_HTTP_CONFIG = {
	// 地址
	baseUrl: process.env.NODE_ENV === 'development' ?
		HTTP_URL_DEV + HTTP_URL_DEV_PREFIX : HTTP_URL_PROD + HTTP_URL_PROD_PREFIX,
	// 请求方式
	method: 'GET',
	// 参数类型
	dataType: 'json',
	// 是否显示请求中的loading
	showLoading: true,
	// 请求loading中的文字提示
	loadingText: '请求中...',
	// 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
	loadingTime: 800,
	// 是否在拦截器中返回服务端的原始数据
	originalData: false,
	// 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
	loadingMask: true,
	// 配置请求头信息
	header: {
		'content-type': 'application/json;charset=UTF-8',
	},
}

// 此处配置请求拦截器
export const httpRequest = (config) => {
	const token = uni.getStorageSync('APP_USER_TOKEN')
	config.headers = {
		Authorization: token
	}
	return config;
}

// 此处配置响应拦截器
export const httpResponse = (res) => {
	if (res.status == 0 || 200) {
		return res
	} else if (res.status == 500 && process.env.NODE_ENV === 'development') {
		uni.showModal({
			title: '仅在开发模式下提示',
			content: '错误信息：' + res.msg
		})
		return res
	} else if (res.status == 500 && process.env.NODE_ENV === 'production') {
		uni.showToast({
			title: '服务器异常，请联系客服！',
			icon: 'none',
			duration: 3000
		})
		return res
	}
}

// http安装方法
export const installHttpConfig = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig(UVIEWUI_HTTP_CONFIG);
	Vue.prototype.$u.http.interceptor.request = httpRequest
	Vue.prototype.$u.http.interceptor.response = httpResponse
}
