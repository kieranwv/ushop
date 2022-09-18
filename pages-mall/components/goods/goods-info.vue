<template>
	<view class="slot">
		<view class="count">
			<view class="price" v-if="goodsType == 'normal'">
				<text>￥</text>
				<text>{{ data.price }}</text>
				<text>￥{{ data.oldPrice }}</text>
			</view>
			<view class="points" v-if="goodsType == 'points'">
				<text>5000积分</text>
				<text>+</text>
				<text>50.00元</text>
			</view>
			<view class="sale">
				<text>月销</text>
				<text>{{ $replaceSale(data.sales) }}</text>
			</view>
		</view>
		<view class="title">
			<u-tag text="11.11" type="warning" size="mini" mode="dark" />
			<text>{{ data.title }}</text>
		</view>
		<view class="notice">
			<text>11.11特卖狂欢节,用券更省</text>
			<text>查看</text>
			<u-icon name="arrow-right" :color="appThemeColor" size="24"></u-icon>
		</view>
	</view>
</template>

<script>
export default {
	name: 'goods-info',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 商品类型
		goodsType: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			appThemeColor: this.$appTheme.appThemeColor
		};
	}
};
</script>

<style lang="scss" scoped>
.slot {
	margin-bottom: 16rpx;
	background-color: $app-theme-bg-color;
}
.count {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 26rpx 30rpx;
	.price {
		text:nth-child(1) {
			font-size: 28rpx;
			color: $app-theme-text-money-color;
		}
		text:nth-child(2) {
			font-size: 40rpx;
			color: $app-theme-text-money-color;
			margin-right: 24rpx;
		}
		text:nth-child(3) {
			font-size: 28rpx;
			color: $app-theme-card-gray-light-color;
			text-decoration-line: line-through;
		}
	}
	.points {
		text:nth-child(1) {
			font-size: 40rpx;
			color: $app-theme-text-money-color;
			margin-right: 12rpx;
			vertical-align: bottom;
			line-height: 1;
		}
		text:nth-child(2) {
			font-size: 28rpx;
			color: $app-theme-text-money-color;
			margin-right: 12rpx;
			vertical-align: bottom;
			line-height: 1;
		}
		text:nth-child(3) {
			font-size: 40rpx;
			color: $app-theme-text-money-color;
			vertical-align: bottom;
			line-height: 1;
		}
	}
	.sale {
		text:nth-child(1) {
			font-size: 28rpx;
			color: $app-theme-card-gray-deep-color;
			margin-right: 8rpx;
		}
		text:nth-child(2) {
			font-size: 28rpx;
			color: $app-theme-card-gray-deep-color;
		}
	}
}
.title {
	padding: 0 30rpx 16rpx 30rpx;
	text {
		vertical-align: middle;
		padding-left: 8rpx;
		font-size: 32rpx;
		font-weight: 500;
		color: $app-theme-text-black-deep-color;
	}
}
.notice {
	padding: 0 30rpx 30rpx 30rpx;
	font-size: 28rpx;
	text:nth-child(1) {
		color: $app-theme-text-gray-color;
		margin-right: 20rpx;
	}
	text:nth-child(2) {
		color: $app-theme-color;
	}
}
</style>
