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
				<view class="title-slot">
					<u-icon size="32" name="arrow-leftward" @click="$u.route({ type: 'navigateBack', delta: 1 })"></u-icon>
					<view class="title">{{ title }}</view>
					<view></view>
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
const app = getApp();
export default {
	name: 'navbar-search',
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
			statusBarHeight: app.globalData.statusBarHeight
		};
	},
	methods: {
		// 去搜索页面
		goSearchPage() {
			uni.navigateTo({
				url: '/pages/search'
			});
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

.title-slot {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.back {
	}
	.title {
		font-size: 36rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		color: $app-theme-text-black-color;
	}
}
.search-slot {
}
</style>
