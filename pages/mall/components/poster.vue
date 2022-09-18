<template>
	<view class="slot">
		<view class="purchase">
			<view class="pur_left">
				<view class="left_img" @click="goShop()">
					<image src="../../../static/goods/mall-1.png"></image>
					<view style="position: absolute;bottom: 44rpx;left: 28rpx;">
						<view class="left_head">2022狮来运转系列</view>
						<view class="left_foot">立即抢购</view>
					</view>
				</view>
			</view>
			<view class="pur_right">
				<view class="right_top">
					<view class="top_img" @click="goShop()">
						<image src="../../../static/goods/mall-3.png" mode=""></image>

						<view style="position: absolute;top: 30rpx; left: 24rpx;">
							<view class="top_title">手提复古音响</view>
							<view class="top_pur">立即抢购</view>
						</view>
					</view>
				</view>
				<view class="right_bottom">
					<view class="bottom_img" @click="goShop()">
						<image src="../../../static/goods/mall-2.png" mode=""></image>

						<view style="position: absolute;top: 30rpx; left: 24rpx;">
							<view class="bottom_title">极简风客厅套餐</view>
							<view class="bottom_pur">立即抢购</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'poster',
	data() {
		return {};
	},
	methods: {
		goShop() {
			uni.navigateTo({
				url: '/pages-mall/pages/goods/detail?goodsType=normal'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.purchase {
	margin: 30rpx 30rpx 28rpx 30rpx;
	display: flex;

	.pur_left {
		.left_img {
			position: relative;

			image {
				width: 304rpx;
				height: 394rpx;
				// background-image: url("../../static/img/product_one.png");
			}
		}

		.left_head {
			font-size: 24rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #ffe7d3;
			line-height: 34rpx;
			margin-bottom: 10rpx;
		}

		.left_foot {
			font-size: 16rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			text-align: center;
			color: #9d724e;
			line-height: 32rpx;
			width: 116rpx;
			height: 32rpx;
			background: linear-gradient(90deg, #fdefe0 0%, #fbdabe 100%);
			border-radius: 14rpx;
		}
	}

	.pur_right {
		margin-left: 22rpx;

		.right_top {
			margin-bottom: 15rpx;

			.top_img {
				position: relative;

				image {
					width: 364rpx;
					height: 186rpx;
				}
			}

			.top_title {
				font-size: 24rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #2f3438;
				line-height: 34rpx;
				margin-bottom: 10rpx;
			}

			.top_pur {
				font-size: 16rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #ffffff;
				line-height: 32rpx;
				width: 116rpx;
				height: 32rpx;
				background: #1eb7cf;
				border-radius: 14rpx;
			}
		}

		.right_bottom {
			.bottom_img {
				position: relative;

				image {
					width: 364rpx;
					height: 186rpx;
				}
			}

			.bottom_title {
				font-size: 24rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #2f3438;
				line-height: 34rpx;
				margin-bottom: 10rpx;
			}

			.bottom_pur {
				font-size: 16rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				text-align: center;
				color: #ffffff;
				line-height: 32rpx;
				width: 116rpx;
				height: 32rpx;
				background: #e28843;
				border-radius: 14rpx;
			}
		}
	}
}
</style>
