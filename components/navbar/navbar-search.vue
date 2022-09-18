<template>
	<view class="slot">
		<view
			class="slot-inner"
			:style="[
				{ minHeight: navBarHeight + 'px' },
				{ lineHeight: menuHeight + 'px' },
				{ paddingLeft: menuRight * 2 + 'px' },
				{ paddingRight: menuRight * 2 + 'px' },
				{ paddingTop: navBarHeight - menuHeight - menuTop + 'px' },
				{ paddingBottom: '20rpx' }
			]"
		>
			<view class="search-slot" :style="[{ minHeight: menuHeight + 'px' }]">
				<view @click="$u.route({ type: 'navigateBack', delta: 1 })" class="left"><u-icon size="32" name="arrow-leftward"></u-icon></view>
				<u-search
					:placeholder="placeholder"
					:showAction="false"
					shape="square"
					borderRadius="0rpx"
					:bg-color="searchBgColor"
					:style="{ width: 'calc(100% - 100rpx - ' + menuWidth + 'px)' }"
					:class="showSlot ? 'active' : ''"
					:value="value"
					@change="searchChange"
					@confirm="searchConfirm"
				></u-search>
			</view>
			<view class="tabList" :style="{ paddingTop: '16px' }">
				<view class="tab" v-for="(item, index) in tabOps" :key="index" :class="{ active: current == index }" @click="change(index)">{{ item }}</view>
			</view>
		</view>
		<view class="slot-height" :style="[{ height: navBarHeight + menuHeight + 27 + 'px' }]"></view>
	</view>
</template>

<script>
const app = getApp();
export default {
	name: 'navbar-search',
	props: {
		value: {
			type: String,
			default: ''
		},
		// 配置项
		tabOps: {
			type: Array,
			default: () => {
				return ['tab1', 'tab2'];
			}
		},
		// 占位内容
		placeholder: {
			type: String,
			default: '请输入'
		},
	},
	data() {
		return {
			// 导航栏高度
			navBarHeight: app.globalData.navBarHeight,
			menuRight: app.globalData.menuRight,
			menuBotton: app.globalData.menuBotton,
			menuHeight: app.globalData.menuHeight,
			menuTop: app.globalData.menuTop,
			menuWidth: app.globalData.menuWidth,
			// 当前tab
			current: 0,
			// 背景色
			searchBgColor: this.$appTheme.appThemeSearchBgColor
		};
	},
	methods: {
		// 切换tab
		change(index) {
			this.current = index;
			this.$emit('change', index);
		},
		// 搜索内容改变
		searchChange(e) {
			this.$emit('input', e);
		},
		// 搜索
		searchConfirm(e) {
			this.$emit('confirm', e);
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	width: 100vw;
}
.slot-inner {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 899;
	overflow: hidden;
	background-color: $app-theme-bg-color;
	.search-slot {
		width: 100%;
		display: flex;
		align-items: center;
		.left {
			width: 30x;
			margin-right: 20px;
		}
	}
	.tabList {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		.tab {
			font-size: 28rpx;
			font-weight: 400;
			padding: 0 30rpx;
			color: $app-theme-navbar-tab-color;
			&.active {
				font-weight: 500;
				color: $app-theme-navbar-tab-color-active;
				font-size: 28rpx;
				position: relative;
				&::before {
					content: '';
					width: 30rpx;
					height: 6rpx;
					background: $app-theme-navbar-tab-color-active;
					border-radius: 1px;
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					transform: translate(-50%, 0);
				}
			}
		}
	}
}
</style>
