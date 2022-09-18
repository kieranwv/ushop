<template>
	<view class="like">
		<u-icon name="heart" size="22" :color="appThemeColor"></u-icon>
		<text>喜欢</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			appThemeColor: this.$appTheme.appThemeColor
		};
	}
};
</script>

<style lang="scss" scoped>
.like {
	padding: 0rpx 24rpx;
	height: 44rpx;
	border-radius: 999rpx;
	border: 2rpx solid $app-theme-color;
	background-color: rgba($app-theme-color, 0.1);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	line-height: 44rpx;
	text {
		margin-left: 8rpx;
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-color;
	}
}
</style>
