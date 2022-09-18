<template>
	<view class="slot">
		<view class="integral">
			<view class="inte_img">
				<image src="../../../static/goods/points-header.png" mode=""></image>
				<view class="inte_right">
					<span>更多</span>
				</view>
			</view>
			<view class="commodity">
				<view style="padding: 24rpx 24rpx 24rpx 24rpx;" v-for="(item, index) in list" :key="index" @click="goGoods(item)">
					<view class="com_list">
						<view class="list_left"><image :src="item.img"></image></view>
						<view class="list_right">
							<view class="right_top">{{ item.title }}</view>
							<view class="right_bottom">
								<view class="bottom_left">
									<image :src="item.icon"></image>
									<span class="bottom_num">{{ item.num }}</span>
									<span>+{{ item.money }}元</span>
								</view>
								<view class="bottom_right">兑换</view>
							</view>
						</view>
					</view>
					<view class="borders"></view>
				</view>
			</view>
		</view>
		<view style="height: 350rpx;"></view>
	</view>
</template>

<script>
export default {
	name: 'pionts',
	props: {
		list: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	methods: {
		goGoods(item) {
			uni.navigateTo({
				url: '/pages-mall/pages/goods/detail?goodsType=points'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	position: relative;
}
.integral {
	margin: 28rpx 30rpx 30rpx 30rpx;
	position: relative;

	.inte_img {
		position: relative;

		image {
			width: 100%;
			height: 174rpx;
		}

		.inte_right {
			display: flex;
			align-items: center;
			position: absolute;
			top: 35rpx;
			right: 20rpx;

			span {
				font-size: 28rpx;
				font-family: PingFang-SC-Regular, PingFang-SC;
				font-weight: 400;
				color: #ffecca;
				line-height: 40rpx;
			}

			image {
				width: 32rpx;
				height: 32rpx;
			}
		}
	}

	.commodity {
		background-color: #ffffff;
		position: absolute;
		top: 100rpx;
		// margin-top: -100rpx;
		border-radius: 8rpx;
		z-index: $app-zIndex-absolute;

		.com_list {
			display: flex;
			// padding: 24rpx 24rpx 24rpx 24rpx;

			.list_left {
				image {
					width: 170rpx;
					height: 170rpx;
				}
			}

			.list_right {
				margin-left: 24rpx;
				width: 100%;

				.right_top {
					font-size: 28rpx;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					color: #171717;
					height: 88rpx;
					margin-top: 6rpx;
					margin-bottom: 26rpx;
				}

				.right_bottom {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-bottom: 12rpx;

					.bottom_left {
						display: flex;
						align-items: center;
						image {
							width: 32rpx;
							height: 32rpx;
							margin-right: 10rpx;
						}

						span {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #696969;
							line-height: 34rpx;
						}

						.bottom_num {
							font-size: 32rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #fd4558;
							line-height: 44rpx;
							margin-right: 8rpx;
						}
					}

					.bottom_right {
						font-size: 26rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						text-align: center;
						color: #ffffff;
						line-height: 56rpx;
						width: 132rpx;
						height: 56rpx;
						background: #5758f6;
						border-radius: 30rpx;
					}
				}
			}
		}
		.borders {
			width: 100%;
			height: 2rpx;
			background: #efefef;
		}
	}
}
</style>
