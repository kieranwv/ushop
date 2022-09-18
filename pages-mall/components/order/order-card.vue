<template>
	<view class="slot" @click.stop="goOrderInfo">
		<!-- 商品卡片 -->
		<OrderGoodsCard :data="data" showBorderBottom>
			<view class="status-slot">
				<text v-if="data.status == 0">待付款</text>
				<text v-if="data.status == 1">待发货</text>
				<text v-if="data.status == 2">待收货</text>
				<text v-if="data.status == 3">待评价</text>
				<text v-if="data.status == 4">退款售后</text>
				<text v-if="data.status == 5">已完成</text>
			</view>
		</OrderGoodsCard>
		<!-- 待付款 -->
		<view class="operate" v-if="data.status == 0">
			<u-button type="default" style="margin-right: 24rpx;" size="small" shape="circle" @click="cancelOrder()">取消订单</u-button>
			<u-button type="primary" size="small" shape="circle" @click="goPay()">去付款</u-button>
		</view>
		<!-- 待发货 -->
		<view class="operate" v-if="data.status == 1"><u-button type="primary" size="small" shape="circle" @click="pushDelivery()">提醒发货</u-button></view>
		<!-- 待收货 -->
		<view class="operate" v-if="data.status == 2">
			<u-button type="default" style="margin-right: 24rpx;" size="small" shape="circle" @click="applyAfterSales()">申请售后</u-button>
			<u-button type="primary" size="small" shape="circle" @click="confirmReceipt()">确认收货</u-button>
		</view>
		<!-- 待评价 -->
		<view class="operate" v-if="data.status == 3">
			<u-button type="default" style="margin-right: 24rpx;" size="small" shape="circle" @click="applyAfterSales()">申请售后</u-button>
			<u-button type="primary" size="small" shape="circle" @click="goEvaluate()">去评价</u-button>
		</view>
		<!-- 待评价 -->
		<view class="operate" v-if="data.status == 4">
			<u-button type="default" style="margin-right: 24rpx;" size="small" shape="circle" @click="deleteOrder()">删除记录</u-button>
			<u-button type="primary" size="small" shape="circle" @click="goOrderInfo()">查看详情</u-button>
		</view>
		<!-- 已完成 -->
		<view class="operate" v-if="data.status == 5">
			<u-button type="default" style="margin-right: 24rpx;" size="small" shape="circle" @click="deleteOrder()">删除记录</u-button>
			<u-button type="primary" size="small" shape="circle" @click="goOrderInfo()">查看详情</u-button>
		</view>
	</view>
</template>

<script>
import { orderOperate } from '@/pages-mall/mixins/order-operate.js';
import OrderGoodsCard from '@/pages-mall/components/order/order-goods-card.vue';
export default {
	name: 'order-card',
	// 工单操作方法混入
	mixins: [orderOperate],
	components: {
		OrderGoodsCard
	},
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
	background-color: $app-theme-bg-color;
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	padding: 30rpx;
	margin-bottom: 30rpx;
	.goods {
		display: flex;
		align-items: center;
		align-content: space-between;
		padding-bottom: 26rpx;
		border-bottom: 1rpx solid $app-theme-border-color;
		margin-bottom: 32rpx;
		.pic {
			margin-right: 24rpx;
		}
		.info {
			width: 280rpx;
			margin-right: 20rpx;
			.title {
				width: 100%;
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				font-size: 28rpx;
				font-weight: 400;
				color: $app-theme-text-black-color;
				margin-bottom: 14rpx;
			}
			.desc {
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
				margin-bottom: 18rpx;
				.item {
					margin-right: 24rpx;
					text:nth-child(1) {
						font-size: 24rpx;
						color: $app-theme-card-gray-color;
						margin-right: 8rpx;
					}
					text:nth-child(2) {
						font-size: 24rpx;
						color: $app-theme-card-gray-deep-color;
					}
				}
			}
			.price {
				text:nth-child(1) {
					font-size: 16rpx;
					color: $app-theme-text-black-color;
				}
				text:nth-child(2) {
					font-size: 28rpx;
					color: $app-theme-text-black-color;
				}
			}
		}
		.status {
			width: 120rpx;
			.status-label {
				width: 100%;
				text-align: right;
				font-size: 28rpx;
				color: $app-theme-color;
				margin-bottom: 100rpx;
			}
			.num {
				width: 100%;
				text-align: right;
				text:nth-child(1) {
					font-size: 24rpx;
					color: $app-theme-text-gray-white-color;
					vertical-align: bottom;
				}
				text:nth-child(2) {
					font-size: 28rpx;
					color: $app-theme-text-gray-white-color;
					vertical-align: bottom;
				}
			}
		}
	}
}
.operate {
	display: flex;
	justify-content: flex-end;
}
</style>
