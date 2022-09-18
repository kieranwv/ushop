<template>
	<view class="slot">
		<u-navbar
			:back-icon-name="backIconName"
			:border-bottom="false"
			:is-back="isBack"
			:title-color="titleColor || appThemeTextWhiteColor"
			:back-icon-size="32"
			:back-icon-color="backIconColor || appThemeTextWhiteColor"
			:background="{ backgroundColor: backgroundColor || appThemeColor }"
			:title="title"
		></u-navbar>
		<view class="bg-img" :style="{ height }"><u-image width="100%" :src="bgImg" mode="widthFix"></u-image></view>
	</view>
</template>

<script>
export default {
	name: 'navbar-round-img',
	props: {
		// 标题
		title: {
			type: String,
			default: '标题'
		},
		// 背景图
		bgImg: {
			type: String,
			default: require('@/static/bg/bg.png')
		},
		// 是否带返回按钮
		isBack: {
			type: Boolean,
			default: false
		},
		// 返回图标名称
		backIconName: {
			type: String,
			default: 'arrow-leftward'
		},
		// 背景色
		backgroundColor: {
			type: String,
			default: null
		},
		// 高度
		height: {
			type: String,
			default: '36vh'
		},
		// 标题颜色
		titleColor: {
			type: String,
			default: null
		},
		// 返回按钮颜色
		backIconColor: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			appThemeTextWhiteColor: this.$appTheme.appThemeTextWhiteColor,
			appThemeColor: this.$appTheme.appThemeColor
		};
	}
};
</script>

<style lang="scss" scoped>
.bg-img {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: $app-zIndex-deep;
	width: 100%;
	overflow: hidden;
}
</style>
