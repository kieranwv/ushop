<template>
	<view class="slot">
		<view class="inner">
			<view class="price">
				<text>￥</text>
				<text>{{ data.price }}</text>
			</view>
			<view class="right"><u-button type="primary" @click="goPayResult">提交订单</u-button></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {
		goPayResult() {
			uni.navigateTo({
				url: '/pages-mall/pages/order/pay'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: $app-theme-bg-color;
	min-height: 100rpx;
	box-shadow: $app-theme-shadow;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.price {
			padding-left: 30rpx;
			text:nth-child(1) {
				font-size: 24rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: $app-theme-text-money-color;
			}
			text:nth-child(2) {
				font-size: 36rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-money-color;
			}
		}
		.right {
			display: flex;
			align-items: center;
			/deep/button {
				height: 100%;
				line-height: 100rpx;
				border-radius: 0 !important;
			}
		}
	}
}
</style>
