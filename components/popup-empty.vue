<template>
	<u-popup v-model="show" mask mode="bottom" mask-close-able closeable>
		<view class="inner"><slot></slot></view>
	</u-popup>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			// 数据源
			data: {}
		};
	},
	methods: {
		// 打开popup
		open(data) {
			this.data = data;
			this.show = true;
		},
		// 关闭
		close() {}
	}
};
</script>

<style lang="scss" scoped>
.inner {
	padding: 30rpx 30rpx 0 30rpx;
	display: flex;
	align-items: flex-end;
}
</style>
