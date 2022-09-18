<template>
	<view class="slot">
		<view class="inner">
			<view class="price">
				<text>￥</text>
				<text>{{ data.price }}</text>
			</view>
			<view class="right">
				<u-button shape="circle" size="small" type="primary" @click="goPay" v-if="data.status == '0'">立即付款</u-button>
				<u-button shape="circle" size="small" type="primary" @click="pushDelivery" v-if="data.status == '1'">提醒发货</u-button>
				<u-button shape="circle" size="small" type="primary" @click="confirmReceipt" v-if="data.status == '2'">确认收货</u-button>
			</view>
		</view>
	</view>
</template>

<script>
import { orderOperate } from '@/pages-mall/mixins/order-operate.js';
export default {
	// 工单操作方法混入
	mixins: [orderOperate],
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {}
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
	border-top: 1px solid $app-theme-border-color;
	padding: 10rpx 0;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
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
			padding-right: 30rpx;
		}
	}
}
</style>
