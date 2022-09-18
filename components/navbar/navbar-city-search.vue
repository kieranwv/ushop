<template>
	<view class="slot">
		<view class="navbar" :style="[{ minHeight: navBarHeight + 'px' }]">
			<view
				class="inner"
				:style="[
					{ minHeight: menuHeight + 'px' },
					{ lineHeight: menuHeight + 'px' },
					{ paddingLeft: menuRight * 2 + 'px' },
					{ paddingRight: menuRight * 2 + 'px' },
					{ paddingTop: navBarHeight - menuHeight - menuTop + 'px' },
					{ paddingBottom: '20rpx' }
				]"
			>
				<view class="loaction-slot">
					<view class="loaction-title" v-if="locationStatus == 1"><text>正在获取地理位置...</text></view>
					<view class="loaction-title" v-if="locationStatus == 2" @click="goCitySelectPage">
						<text>{{ cityListSelected ? cityListSelected : locationCity }}</text>
						<u-icon style="margin-left: 8rpx;" :size="18" color="#171717" name="arrow-down-fill"></u-icon>
					</view>
					<view class="loaction-title" v-if="locationStatus == 3" @click="getLocation(true)"><text>地理位置获取失败，点击重试</text></view>
				</view>
				<view class="search-slot" :style="{ paddingTop: menuTop + 'px' }">
					<u-search @click="goSearchPage" disabled :placeholder="placeholder" :showAction="false" shape="square" borderRadius="0rpx" bg-color="#F4F5F8"></u-search>
				</view>
			</view>
		</view>
		<view class="slot-height" :style="[{ height: navBarHeight + menuHeight + menuTop + 11 + 'px' }]"></view>
	</view>
</template>

<script>
import { getLocation, getLocationAgain } from '@/utils/location.js';
const app = getApp();
export default {
	name: 'navbar-city-search',
	props: {
		// 标题
		title: {
			type: String,
			default: '标题'
		},
		// 占位内容
		placeholder: {
			type: String,
			default: '请输入'
		},
		// 已经选择的城市
		cityListSelected: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			// 导航栏高度
			menuTop: app.globalData.menuTop,
			navBarHeight: app.globalData.navBarHeight,
			menuRight: app.globalData.menuRight,
			menuBotton: app.globalData.menuBotton,
			menuHeight: app.globalData.menuHeight,
			statusBarHeight: app.globalData.statusBarHeight,
			// 定位数据
			locationData: {},
			// 当前城市
			locationCity: '',
			// 获取地理位置状态，1正在获取，2获取成功，3失败
			locationStatus: 1
		};
	},
	mounted() {
		if (this.cityListSelected) {
			this.locationStatus = 2;
		} else {
			this.getLocation();
		}
	},
	methods: {
		// 跳转城市选择页面
		goCitySelectPage() {
			uni.navigateTo({
				url: '/pages/home/city-list?nowCity=' + this.locationCity
			});
		},

		// 去搜索页面
		goSearchPage() {
			uni.navigateTo({
				url: '/pages/search'
			});
		},

		// 获取地理位置
		async getLocation(isAgain = false) {
			this.locationStatus = 1;
			if (!isAgain) {
				getLocation(res => {
					this.setLocationData(res);
				});
			} else {
				getLocationAgain(res => {
					this.setLocationData(res);
				});
			}
		},

		// 设置定位数据
		setLocationData(res) {
			if (res.status) {
				this.locationStatus = 2;
				this.locationData = res.data;
				this.locationCity = res.data.ad_info.city;
				this.$store.commit('user/COMMIT_LOACTION_INFO', res.data);
			} else {
				this.locationStatus = 3;
				uni.showToast({
					title: '获取地理位置失败',
					duration: 3000,
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	width: 100vw;
}
.navbar {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 899;
	overflow: hidden;
}

.inner {
	width: 100%;
	height: 100%;
	background-color: $app-theme-bg-color;
}

.loaction-slot {
	display: flex;
	align-items: center;
	.loaction-title {
		display: flex;
		align-items: center;
		text {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: $app-theme-text-black-color;
		}
	}
}
.search-slot {
}
</style>
