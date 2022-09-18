<template>
	<view class="slot" @click="goGoods()">
		<view class=""><u-image width="100%" height="316rpx" :src="data.img"></u-image></view>
		<view class="title">{{ data.title }}</view>
		<view class="price">
			<view class="points">
				<u-image style="margin-right: 4rpx;" width="32rpx" height="32rpx" src="@/pages-points/static/points.png"></u-image>
				<text>{{ data.points }}</text>
			</view>
			<view class="money">+{{ data.extraMoney }}元</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'points-goods-card',
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {
		// 去商品页
		goGoods() {
			uni.navigateTo({
				url: '/pages-mall/pages/goods/detail?goodsType=points'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	.title {
		font-size: 28rpx;
		color: $app-theme-text-black-color;
		padding: 12rpx 22rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.price {
		padding: 0rpx 22rpx 24rpx 22rpx;
		display: flex;
		align-items: flex-end;
		.points {
			display: flex;
			align-items: flex-end;
			margin-right: 8rpx;
			text {
				font-size: 32rpx;
				color: $app-theme-text-money-color;
				line-height: 1;
			}
		}
		.money {
			font-size: 24rpx;
			color: $app-theme-card-gray-deep-color;
			line-height: 1;
		}
	}
}
</style>
