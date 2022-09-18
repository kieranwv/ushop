<template>
	<view class="page">
		<Navbar title="支付成功" :backFunction="backGoods"></Navbar>

		<!-- 支付状态 -->
		<view class="status">
			<view class="status-success-icon"><u-icon name="checkbox-mark" :color="appThemeBgColor" size="44"></u-icon></view>
			<view class="status-name">支付成功</view>
			<view class="money">
				<text>￥</text>
				<text>418.00</text>
			</view>
		</view>

		<!-- 付款信息 -->
		<view class="pay-info">
			<view class="item">
				<view class="label">付款方式</view>
				<view class="value">招商银行信用卡(8800)</view>
			</view>
			<view class="item">
				<view class="label">收款方</view>
				<view class="value">商家信息</view>
			</view>
		</view>

		<!-- 支付获得 -->
		<view class="points">
			<text>本次支付获得</text>
			<text>2</text>
			<text>积分</text>
		</view>
		<!-- <view class="get">
			<view class="title">本次消费获得</view>
			<view class="list">
				<view class="item">
					<view class="name">约膜代金券</view>
					<view class="money">
						<text class="num">30</text>
						<text class="unit">元</text>
					</view>
					<view class="operate"><u-button type="primary" size="mini" shape="circle">领取</u-button></view>
				</view>
				<view class="item">
					<view class="name">奖励金</view>
					<view class="money">
						<text class="num">2</text>
						<text class="unit">笔</text>
					</view>
					<view class="operate"><u-button type="primary" size="mini" shape="circle">领取</u-button></view>
				</view>
				<view class="item">
					<view class="name">积分</view>
					<view class="money2">
						<text class="num">2</text>
						<text class="unit">分</text>
					</view>
					<view class="desc">{{ '已有36800分 >' }}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			appThemeBgColor: this.$appTheme.appThemeBgColor
		};
	},
	methods: {
		backGoods() {
			uni.navigateBack({
				delta: 3
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
}
.status {
	padding: 80rpx 0 84rpx 0;
	.status-success-icon {
		width: 88rpx;
		height: 88rpx;
		margin: 0 auto;
		margin-bottom: 16rpx;
		background-color: $app-theme-color;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}
	.status-name {
		font-size: 34rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: $app-theme-color;
		margin-bottom: 40rpx;
		text-align: center;
	}
	.money {
		text-align: center;
		text:nth-child(1) {
			font-size: 40rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: $app-theme-text-color;
		}
		text:nth-child(2) {
			font-size: 60rpx;
			font-family: Helvetica;
			color: $app-theme-text-color;
		}
	}
}

.pay-info {
	margin: 0 24rpx;
	padding-bottom: 24rpx;
	border-bottom: 1px solid $app-theme-border-color;

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
	}
	.label {
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-text-gray-color;
	}
	.value {
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-text-color;
	}
}
.points {
	margin: 30rpx;
	background: $app-theme-bg-gray-deep-color;
	border-radius: 999rpx;
	border: 2rpx solid $app-theme-border-color;
	text-align: center;
	height: 80rpx;
	line-height: 80rpx;
	text {
		vertical-align: middle;
		font-size: 26rpx;
		color: $app-theme-text-color;
		margin-right: 8rpx;
	}
	text:nth-child(2) {
		vertical-align: middle;
		color: $app-theme-text-money-color;
		font-size: 32rpx;
	}
	text:nth-child(3) {
		vertical-align: middle;
		margin-right: 0;
	}
}
.get {
	margin: 0 24rpx;
	.title {
		padding: 24rpx 0 16rpx 0;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-text-gray-color;
		text-align: center;
	}
	.list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.item {
			width: 218rpx;
			background: $app-theme-bg-gray-deep-color;
			border-radius: 4px;
			border: 1px solid $app-theme-border-color;
			padding: 24rpx 0 22rpx 0;
			.name {
				text-align: center;
				font-size: 13px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-color;
			}
			.num {
				font-size: 50rpx;
				font-family: Helvetica;
				color: $app-theme-text-color;
			}
			.unit {
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-color;
			}
			.money {
				text-align: center;
				margin-top: 8rpx;
				margin-bottom: 12rpx;
			}
			.money2 {
				text-align: center;
				margin-top: 8rpx;
				margin-bottom: 12rpx;
				.num {
					color: $app-theme-text-money-color;
				}
				.unit {
					color: $app-theme-text-money-color;
				}
			}
			.operate {
				display: flex;
				justify-content: center;
			}
			.desc {
				text-align: center;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-gray-color;
			}
		}
	}
}
</style>
