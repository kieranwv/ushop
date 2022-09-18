/** 
 * 获取地理位置工具函数
 * @LOCATION_API_KEY 坐标点转位置信息的key
 * @getLocationDetail 坐标点转位置信息接口，此api基于腾讯地图
 * @getLocation 获取位置权限以及调用 getLocationInfo()
 * @getLocationInfo 根据权限获取位置信息
 * @getLocationAgain 权限被拒绝之后调用
 * 
 * 使用方法：传入一个回调函数用以接收定位结果
 * getLocation((res)=>{})
 * 
 * 该方法需要在小程序开发者中配置服务器域名
 * 参考：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html
 */

const LOCATION_API_KEY = '5T3BZ-TDDL3-Q3K3G-36KRY-RSYH3-Y6B6R'

// 根据经纬度获取地址详情接口
const getLocationDetail = (latitude, longitude) => uni.$u.get(
	`https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude.toString()},${longitude.toString()}&key=${LOCATION_API_KEY}`
)


// 获取地理位置
export const getLocation = (callBack) => {
	uni.getSetting({
		success: async (res) => {
			if (res.authSetting['scope.userLocation']) {
				getLocationInfo(callBack)
			} else {
				uni.authorize({
					scope: 'scope.userLocation',
					success: () => {
						getLocationInfo(callBack)
					},
					fail: () => {
						uni.showToast({
							title: '位置权限获取失败',
							icon: 'none'
						});
						callBack({
							status: false,
							data: null
						})
					}
				})
			}
		}
	});
}


// 获取权限之后获取定位信息
export const getLocationInfo = (callBack) => {
	uni.getLocation({
		type: ' wgs84',
		success: async (res) => {
			let e = await getLocationDetail(res.latitude, res
				.longitude)
			if (e.status == 0) {
				uni.setStorage({
					key: 'USER_LOCATION_INFO',
					data: e.result
				})
				callBack({
					status: true,
					data: e.result
				})
			} else {
				callBack({
					status: false,
					data: null
				})
			}
		}
	});
}

// 获取地理位置（被拒后再次）
export const getLocationAgain = (callBack) => {
	uni.openSetting({
		success: (res) => {
			if (res.authSetting['scope.userLocation']) {
				// 授权成功
				uni.getLocation({
					type: 'wgs84',
					success: async (res) => {
						let e = await getLocationDetail(res.latitude,
							res.longitude)
						if (e.status == 0) {
							uni.setStorage({
								key: 'USER_LOCATION_INFO',
								data: e.result
							})
							callBack({
								status: true,
								data: e.result
							})
						} else {
							callBack({
								status: false,
								data: null
							})
						}
					},
					fail() {
						callBack({
							status: false,
							data: null
						})
					}
				});
			} else {
				callBack({
					status: false,
					data: null
				})
			}
		},
		fail() {
			callBack({
				status: false,
				data: null
			})
		}
	})
}
