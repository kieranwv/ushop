<template>
	<view class="page">
		<Navbar title="确认支付"></Navbar>

		<!-- 金额展示 -->
		<view class="money-show">
			<view class="desc">实付金额</view>
			<view class="money">
				<text>￥</text>
				<text>418.00</text>
			</view>
			<view class="time">支付剩余时间 07:58</view>
		</view>

		<!-- 支付方式 -->
		<view class="pay-type">
			<u-radio-group v-model="payType">
				<view class="title">选择支付方式</view>
				<view class="item" @click="payType = 'wxPay'">
					<view class="left">
						<view class="logo"><image src="../../static/icon-wx-pay.png" mode=""></image></view>
						<view class="name">微信支付</view>
					</view>

					<view class="check"><u-radio shape="circle" :active-color="appThemeColor" icon-size="16" name="wxPay"></u-radio></view>
				</view>
				<view class="item" @click="payType = 'aliPay'">
					<view class="left">
						<view class="logo"><image src="../../static/icon-ali-pay.png" mode=""></image></view>
						<view class="name">支付宝</view>
					</view>
					<view class="check"><u-radio shape="circle" :active-color="appThemeColor" icon-size="16" name="aliPay"></u-radio></view>
				</view>
			</u-radio-group>
		</view>

		<!-- 支付 -->
		<view class="btn">
			<u-button type="primary" shape="circle" @click="goPayResult">
				<text v-show="payType == 'wxPay'">微信支付</text>
				<text v-show="payType == 'aliPay'">支付宝支付</text>
				<text>￥418.00</text>
			</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			payType: 'wxPay',
			appThemeColor: this.$appTheme.appThemeColor
		};
	},
	methods: {
		goPayResult() {
			uni.navigateTo({
				url: '/pages-mall/pages/order/pay-result'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
}
.money-show {
	padding: 24rpx 0 48rpx 0;
	.desc {
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		font-family: PingFang-SC-Medium, PingFang-SC;
		font-weight: 500;
		color: #2d2b36;
		margin-bottom: 8rpx;
	}
	.money {
		margin-bottom: 22rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		text:nth-child(1) {
			font-size: 48rpx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #2d2b36;
		}
		text:nth-child(2) {
			font-size: 72rpx;
			font-family: DINAlternate-Bold, DINAlternate;
			font-weight: bold;
			color: #2d2b36;
		}
	}
	.time {
		text-align: center;
		font-size: 24rpx;
		font-family: PingFang-SC-Medium, PingFang-SC;
		font-weight: 500;
		color: #2d2b36;
	}
}

.pay-type {
	padding: 0 30rpx;
	margin-top: 80rpx;
	.title {
		font-size: 30rpx;
		font-family: PingFangSCSemibold-, PingFangSCSemibold;
		font-weight: normal;
		color: #2d2b36;
		padding-bottom: 4rpx;
	}
	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 24rpx;
		padding-top: 26rpx;
		border-bottom: 1rpx solid #efefef;
		.left {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			.logo {
				width: 64rpx;
				height: 64rpx;
				margin-right: 30rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.name {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #171717;
			}
		}

		.check {
		}
	}
}

/deep/.u-icon {
	display: flex !important;
}

.btn {
	padding: 0 30rpx;
	position: absolute;
	bottom: 70rpx;
	left: 0;
	width: 100%;
}
</style>
