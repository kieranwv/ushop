<template>
	<u-navbar
		:back-icon-name="backIconName"
		:title="title"
		:custom-back="backFunction"
		:back-icon-color="$appTheme.appThemeTextBlackColor"
		:title-color="$appTheme.appThemeTextBlackColor"
		:back-icon-size="32"
		:border-bottom="false"
	></u-navbar>
</template>

<script>
export default {
	name: 'navbar',
	props: {
		// 返回图标名称
		backIconName: {
			type: String,
			default: 'arrow-leftward'
		},
		// 标题
		title: {
			type: String,
			default: ''
		},
		// 自定义返回
		backFunction: {
			type: Function,
			default: null
		},
	}
};
</script>

<style></style>
