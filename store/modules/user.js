export default {
	namespaced: true,
	state: {
		// 微信基础信息
		WX_BASIC_INFO: {},
		// 用户信息
		USER_INFO: {},
		// 定位信息
		LOCATION_INFO: {}
	},
	mutations: {
		// 更新定位信息
		COMMIT_LOACTION_INFO(state, data) {
			uni.setStorage({
				key: 'LOCATION_INFO',
				data
			})
			state.LOCATION_INFO = data
		},
		// 更新用户信息
		COMMIT_USER_INFO(state, data) {
			uni.setStorage({
				key: 'USER_INFO',
				data
			})
			state.USER_INFO = data
		},
	},
	actions: {
		// 手机号+验证码登录方法
		loginByPhone() {

		},

		// 微信登录方法
		loginByWx() {

		},

		// 退出登录
		logout() {

		},

		// 获取用户定位信息
		getLoaction() {}
	}
}
