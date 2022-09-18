<template>
	<view class="slot">
		<view class="pic"><u-image width="180rpx" height="180rpx" :src="data.goods.img"></u-image></view>
		<view class="info">
			<view class="title">{{ data.goods.title }}</view>
			<view class="express">
				<view class="left">
					<text>运单号</text>
					<text>{{ data.expressCode }}</text>
				</view>
				<view class="right" @click="$copyByUniappApi(data.expressCode)">复制</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'express-goods-card',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.slot {
	position: relative;
	padding: 30rpx;
	background-color: $app-theme-color;
	color: $app-theme-text-white-color;
	margin-bottom: 24rpx;
	display: flex;
	align-items: flex-start;
	.pic {
		border-radius: 16rpx;
		overflow: hidden;
		margin-right: 24rpx;
	}
	.info {
		.title {
			font-size: 28rpx;
			color: $app-theme-text-white-color;
			margin-bottom: 24rpx;
		}
		.express {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				text:nth-child(1) {
					font-size: 24rpx;
					color: rgba($app-theme-text-white-color, 0.8);
					margin-right: 16rpx;
				}
				text:nth-child(2) {
					font-size: 24rpx;
					color: $app-theme-text-white-color;
				}
			}
			.right {
				font-size: 24rpx;
				color: rgba($app-theme-text-white-color, 0.8);
			}
		}
	}
}
</style>
