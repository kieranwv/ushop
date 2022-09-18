// 用户模块api
import {
	useWxApi
} from './modules/user.js'

// 基础模块api
import {
	useFileApi
} from './modules/base.js'

// 商城模块api
import {
	useMallApi
} from './modules/mall.js'

// 社区模块api
import {
	useCommunityApi
} from './modules/community.js'


// 导出api全局安装方法
export const installApiModules = (Vue, vm) => {
	vm.$u.api = Object.assign(useFileApi(Vue, vm), useWxApi(Vue, vm), useMallApi(Vue, vm), useCommunityApi(Vue, vm))
}
