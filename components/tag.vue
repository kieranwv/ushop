<template>
	<view class="slot" @click="click"><slot></slot></view>
</template>

<script>
export default {
	name: 'tag',
	methods: {
		click() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: inline-block;
	margin-right: 24rpx;
	margin-bottom: 20rpx;
	width: calc(100% / 3 - 24rpx);
	height: 32px;
	background: $app-theme-bg-gray-deep-color;
	border-radius: 4px;
	font-size: 26rpx;
	text-align: center;
	font-weight: 400;
	line-height: 32px;
	color: $app-theme-text-color;
}
</style>
