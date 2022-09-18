<template>
	<u-popup v-model="show" mask mode="bottom" mask-close-able closeable border-radius="16" @close="close">
		<view class="inner">
			<view class="item" v-for="(item, index) in ops" :style="{ width: 100 / ops.length + '%' }" @click="chose(item, index)">
				<u-image width="100rpx" height="100rpx" :src="item.icon"></u-image>
				<view class="label">{{ item.label }}</view>
			</view>
		</view>
	</u-popup>
</template>

<script>
export default {
	props: {
		// 配置项
		ops: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {
			show: false
		};
	},
	methods: {
		// 打开popup
		open() {
			this.show = true;
		},
		// 关闭
		close() {
			this.$emit('close');
		},
		// 选择
		chose(item, index) {
			if (item.type == 'page') {
				uni.navigateTo({
					url: item.url
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.inner {
	padding: 100rpx 30rpx 80rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		.label {
			margin-top: 16rpx;
			width: 100%;
			text-align: center;
			font-size: 26rpx;
			color: $app-theme-text-black-color;
		}
	}
}
</style>
