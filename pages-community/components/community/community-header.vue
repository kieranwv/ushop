<template>
	<view class="slot">
		<view class="left">
			<view class="title">{{ title }}</view>
			<view class="info">
				<text>1人已加入</text>
				<text>2篇内容</text>
			</view>
		</view>
		<view class="right">
			<view class="btn" @click="addCommunity"><text>加入圈子</text></view>
			<view class="btn" @click="share">
				<u-icon style="margin-right: 10rpx;line-height: 1;" size="24" name="zhuanfa" :color="appThemeTextWhiteColor"></u-icon>
				<text>分享</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'community-header',
	props: {
		title: {
			type: String,
			default: '好听的音乐'
		}
	},
	data() {
		return {
			appThemeTextWhiteColor: this.$appTheme.appThemeTextWhiteColor
		};
	},
	methods: {
		// 分享圈子
		share() {
			this.$emit('share');
		},

		// 加入圈子
		addCommunity() {
			this.$emit('add');
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	padding: 120rpx 40rpx 32rpx 40rpx;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	z-index: $app-zIndex-normal;
	position: relative;
	.left {
		.title {
			font-size: 40rpx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: $app-theme-text-white-color;
			margin-bottom: 20rpx;
		}
		.info {
			text {
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-white-color;
				margin-right: 32rpx;
			}
		}
	}
	.right {
		display: flex;
		align-items: flex-end;
		.btn {
			padding: 10rpx 20rpx;
			background: rgba(17, 29, 48, 0.3);
			border-radius: 8rpx;
			border: 1px solid $app-theme-text-white-color;
			margin-left: 24rpx;
			text {
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-white-color;
				line-height: 1;
			}
		}
	}
}
</style>
