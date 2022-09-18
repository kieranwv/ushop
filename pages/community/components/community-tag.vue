<template>
	<view class="slot">
		<u-image style="line-height: 1;" width="24rpx" height="24rpx" src="../../../static/operate/setting.png"></u-image>
		<view style="margin-left: 8rpx;">养花草之生活随感靓靓</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	align-items: center;
	background-color: none;
	background-color: $app-theme-bg-gray-deep-color;
	padding: 8rpx 16rpx;
	border-radius: 6rpx;
	
	view {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-text-black-color;
	}
}
</style>
