<template>
	<view class="slot" @click="$u.route('/pages-community/pages/community/info', { type: 0 })">
		<view class="content">这里是简介的内容好听的音乐分享简介的内容啊啊啊啊啊啊啊啊啊啊啊</view>
		<u-icon size="22" name="arrow-right" :color="appThemeCardGrayDeepColor"></u-icon>
	</view>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			appThemeCardGrayDeepColor: this.$appTheme.appThemeCardGrayDeepColor
		};
	}
};
</script>

<style lang="scss" scoped>
.slot {
	z-index: $app-zIndex-normal;
	position: relative;
	background-color: $app-theme-bg-color;
	padding: 30rpx;
	box-sizing: border-box;
	border-bottom: 1px solid $app-theme-border-color;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.content {
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-text-black-color;
	}
}
</style>
