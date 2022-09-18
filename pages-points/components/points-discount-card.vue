<template>
	<view class="slot" :class="data.bgImgType">
		<view class="inner">
			<view class="left">
				<view class="discounts">
					<text>￥</text>
					<text>{{ data.discounts }}</text>
				</view>
				<view class="standard">满{{ data.standard }}可用</view>
			</view>
			<view class="center">
				<view class="title">{{ data.title }}</view>
				<view class="desc">适用范围：{{ data.use }}</view>
			</view>
			<view class="right">
				<view class="point" v-if="data.bgImgType == 'yellow'" :style="{ color: yellowColor }">{{ data.points }}积分</view>
				<view class="point" v-if="data.bgImgType == 'blue'" :style="{ color: blueColor }">{{ data.points }}积分</view>
				<view class="operate" v-if="data.bgImgType == 'yellow'" :style="{ backgroundColor: yellowColor }">去兑换</view>
				<view class="operate" v-if="data.bgImgType == 'blue'" :style="{ backgroundColor: blueColor }">去兑换</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'points-goods-card',
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
		return {
			yellowColor: this.$appTheme.appThemePointsSignYellowColor,
			blueColor: this.$appTheme.appThemePointsSignBlueColor
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.slot {
	width: 100%;
	height: 188rpx;
	margin-bottom: 24rpx;
	&.yellow {
		background-image: url('@/pages-points/static/discounts-yellow.png');
		background-size: cover;
	}
	&.blue {
		background-image: url('@/pages-points/static/discounts-blue.png');
		background-size: cover;
	}
	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		.left {
			width: 150rpx;
			padding-left: 36rpx;
			.discounts {
				margin-bottom: 8rpx;
				text:nth-child(1) {
					vertical-align: bottom;
					font-size: 22rpx;
					line-height: 1;
					color: $app-theme-text-white-color;
				}
				text:nth-child(2) {
					vertical-align: bottom;
					font-size: 64rpx;
					line-height: 1;
					color: $app-theme-text-white-color;
				}
			}
			.standard {
				font-size: 22rpx;
				color: $app-theme-text-white-color;
			}
		}
		.center {
			.title {
				margin-bottom: 20rpx;
				font-size: 32rpx;
				color: $app-theme-text-black-color;
			}
			.desc {
				font-size: 24rpx;
				color: $app-theme-points-sign-value-color;
			}
		}
		.right {
			width: 150rpx;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			padding-right: 24rpx;
			align-items: center;

			.point {
				width: 100%;
				text-align: center;
				font-size: 30rpx;
				margin-bottom: 15rpx;
			}
			.operate {
				width: 130rpx;
				height: 48rpx;
				border-radius: 6rpx;
				font-size: 24rpx;
				color: $app-theme-text-white-color;
				text-align: center;
				line-height: 48rpx;
			}
		}
	}
}
</style>
