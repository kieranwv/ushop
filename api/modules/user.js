export const useWxApi = (Vue, vm) => {
	return {
		// 获取openid
		getOpenId: (code) => vm.$u.get('/appletsUser/openId', {
			code
		}),
		// 通过openid登录
		loginByOpenId: (openId) => vm.$u.get('/appletsUser/loginByOpenId', {
			openId
		})
	}
}
