<template>
	<view class="slot">
		<view class="left" v-if="isLogin" @click="$u.route('/pages-mine/pages/mine')">
			<u-avatar size="118" src="../../../static/user/1.png"></u-avatar>
			<view class="info">
				<view class="username">{{ data.nickName || '演示用户' }}</view>
				<view class="desc">{{ data.desc || '这个人很懒,没留下什么这个人很懒' }}</view>
			</view>
		</view>
		<view class="left" v-else @click="$u.route('/pages/login/index')">
			<u-avatar size="118"></u-avatar>
			<view class="info">
				<view class="username">登录</view>
				<view class="desc">点击登录跳转至登录页面</view>
			</view>
		</view>
		<view class="right"><u-icon size="20" name="arrow-right"></u-icon></view>
	</view>
</template>

<script>
export default {
	name: 'user-info',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		isLogin: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.slot {
	color: $app-theme-text-white-color;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 48rpx;
	position: relative;
	z-index: $app-zIndex-normal;
	.left {
		display: flex;
		align-items: center;
		.info {
			margin-left: 24rpx;
			display: flex;
			align-content: space-between;
			flex-wrap: wrap;
			.username {
				font-size: 32rpx;
				width: 100%;
				color: $app-theme-text-white-color;
				margin-bottom: 16rpx;
			}
			.desc {
				font-size: 24rpx;
				width: 100%;
				color: $app-theme-text-white-color;
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
	}
	.right {
		display: flex;
		align-items: center;
	}
}
</style>
