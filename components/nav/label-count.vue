<template>
	<view class="slot">
		<view class="item" :style="{ width: 100 / ops.length + '%' }" v-for="(item, index) in ops" :key="index" @click="$u.route({ url: item.url })">
			<view class="count">{{ item.count || 0 }}</view>
			<view class="label">{{ item.label || '未命名' }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'label-count',
	props: {
		// 配置项
		ops: {
			type: Array,
			default: () => {
				return [];
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	background-color: $app-theme-bg-color;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	padding: 40rpx 0;
	.item {
		text-align: center;
		.count {
			font-size: 40rpx;
			font-family: DINAlternate-Bold, DINAlternate;
			font-weight: bold;
			color: $app-theme-text-black-color;
			margin-bottom: 16rpx;
		}
		.label {
			font-size: 24rpx;
			font-weight: 400;
			color: $app-theme-text-gray-color;
		}
	}
}
</style>
