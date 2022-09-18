<template>
	<view class="slot" :style="showBorderBottom ? '' : 'border-bottom:none'">
		<view class="img"><u-image width="160rpx" height="160rpx" src="../../../static/goods/4.png"></u-image></view>
		<view class="info">
			<view class="title">{{ data.name }}</view>
			<view class="sku">{{ data.sku }}</view>
			<view class="price">
				<text>￥</text>
				<text>{{ data.price }}</text>
			</view>
			<view class="tag">不支持七天无理由退货</view>
		</view>
		<view class="num">×{{ data.num }}</view>
	</view>
</template>

<script>
export default {
	name: 'submit-goods-card',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 是否显示底部边框
		showBorderBottom: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	align-items: center;
	padding: 28rpx 0;
	border-bottom: 1rpx solid $app-theme-border-color;
	position: relative;
	.img {
		margin-right: 30rpx;
	}
	.info {
		width: 420rpx;
		.title {
			width: 100%;
			font-size: 28rpx;
			color: $app-theme-text-black-color;
			padding-bottom: 16rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.sku {
			font-size: 22rpx;
			color: $app-theme-text-gray-color;
		}
		.price {
			padding-top: 8rpx;
			text:nth-child(1) {
				font-size: 20rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: $app-theme-text-black-color;
			}
			text:nth-child(2) {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-black-color;
			}
		}
		.tag {
			margin-top: 8rpx;
			background: rgba($app-theme-text-money-color, 0.1);
			border-radius: 4rpx;
			color: $app-theme-text-money-color;
			padding: 4rpx;
			font-size: 20rpx;
			display: inline-block;
		}
	}
	.num {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
		color: $app-theme-text-gray-color;
	}
}
</style>
