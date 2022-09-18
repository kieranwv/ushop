<script>
export default {
	globalData: {
		// 胶囊距上距离
		menuTop: 0,
		// 导航栏高度
		navBarHeight: 0,
		// 胶囊距右方间距（方保持左、右间距一致）
		menuRight: 0,
		// 胶囊距底部间距（保持底部间距一致）
		menuBotton: 0,
		// 胶囊高度（自定义内容可与胶囊高度保证一致）
		menuHeight: 0,
		// 状态栏高度
		statusBarHeight: 0,
		// 安全距离
		safeAreaHeight: 0,
		// 胶囊宽度
		menuWidth: 0
	},
	onLaunch(options) {
		const that = this;
		// 获取系统信息
		const systemInfo = uni.getSystemInfoSync();
		// 胶囊按钮位置信息
		const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
		// 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
		that.globalData.menuTop = menuButtonInfo.top - systemInfo.statusBarHeight;
		that.globalData.menuWidth = menuButtonInfo.width;
		that.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
		that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
		that.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
		that.globalData.menuHeight = menuButtonInfo.height;
		that.globalData.statusBarHeight = systemInfo.statusBarHeight;
		that.globalData.safeAreaHeight = systemInfo.safeAreaInsets.bottom;
	}
};
</script>

<style lang="scss">
// ===
// === 注意：此处导入的css，会作用于全部.vue文件，请适量导入
// ===

@import 'uview-ui/index.scss';
/* 解决小程序和app滚动条的问题 */
/* #ifdef MP-WEIXIN || APP-PLUS */
::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
}
/* #endif */

/* 解决H5 的问题 */
/* #ifdef H5 */
uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
}
/* #endif */
</style>
