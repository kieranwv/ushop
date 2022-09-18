<template>
	<view class="bg-white margin-top">
		<view class="common-logistics">
			<view class="logistic-item" v-for="(item, index) in logisticsData" :key="index">
				<view class="total-wrap" :style="{ marginTop: item.isFirstNode ? '22rpx' : '6rpx' }">
					<view class="item-container">
						<view class="item-container-left" :class="[index == 0 ? 'text-1A1A1A' : 'text-808080']">
							<view class="text-df">{{ item.monthDay }}</view>
							<view class="text-sm">{{ item.hourMinute }}</view>
						</view>
						<view class="item-container-center">
							<view class="tag-container">
								<image v-if="item.isFirstNode && String(item.status) != 'null'" :src="nodeIconUrl(item.status, index)" mode="scaleToFill"></image>
								<view v-else class="item-tag-container">
									<image
										class="item-tag"
										:src="[index == 0 ? '/pages-mall/static/express-dot-active.png' : '/pages-mall/static/express-dot.png']"
										mode="scaleToFill"
									></image>
								</view>
							</view>
							<view class="line-container" :style="{ height: item.isFirstNode ? '145rpx' : '88rpx', paddingTop: item.isFirstNode ? '22rpx' : '8rpx' }">
								<view v-if="index !== logisticsData.length - 1" class="line" :style="{ height: item.isFirstNode ? '120rpx' : '80rpx' }"></view>
							</view>
						</view>
						<view class="item-container-right" :style="{ paddingTop: item.isFirstNode ? '0' : '8rpx' }">
							<view v-if="item.isFirstNode" class="item-title text-dm text-bold" :class="[index == 0 ? 'text-1A1A1A' : 'text-808080']">{{ item.status }}</view>
							<view class="item-desc text-dm" :class="[index == 0 ? 'text-1A1A1A' : 'text-999999']" :style="{ marginTop: item.isFirstNode ? '10rpx' : '0' }">
								{{ item.context }}
							</view>
							<view class="item-time">{{ item.createTime }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		logisticsData: {
			type: [Object, Array]
		}
	},
	computed: {
		nodeIconUrl() {
			return function(data, isFirstIndex) {
				// 0在途，1揽收，2疑难，3签收，4退签，5派件，6退回，7转单，10待清关，11清关中，12已清关，13清关异常，14收件人拒签
				// 图标根据需要自行更改,这里只作演示
				if (data == '在途') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				} else if (data == '揽收') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				} else if (data == '在途') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				} else if (data == '疑难') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				} else if (data == '签收') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-over.png') : require('@/pages-mall/static/express-over.png');
				} else if (data == '退签') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				} else if (data == '派件') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				} else if (data == '退回') {
					return isFirstIndex === 0 ? require('@/pages-mall/static/express-ing.png') : require('@/pages-mall/static/express-ing.png');
				}
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.common-logistics {
	height: auto;
	box-sizing: border-box;
	padding: 20rpx 30rpx 50rpx;
}

.item-container {
	width: 100%;
	height: auto;
	display: flex;

	.item-container-left {
		width: 120rpx;
		max-width: 120rpx;
	}

	.item-container-center {
		width: 44rpx;
		height: auto;

		.tag-container {
			width: 44rpx;
			height: 44rpx;

			image {
				width: 44rpx;
				height: 44rpx;
				border-radius: 50%;
			}

			.item-tag-container {
				width: 44rpx;
				height: 44rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.item-tag {
					width: 14rpx;
					height: 14rpx;
					border-radius: 50%;
				}
			}
		}

		.line-container {
			box-sizing: border-box;
			width: 44rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			.line {
				width: 2rpx;
				background-color: #dcdcdc;
			}
		}
	}

	.item-container-right {
		width: 510rpx;
		max-width: 510rpx;
		box-sizing: border-box;
		padding: 0 10rpx 0 24rpx;

		.item-title {
			width: 100%;
			height: 40rpx;
			line-height: 44rpx;
			color: #222;
			font-size: 28rpx;
		}

		.item-desc {
			margin-top: 16rpx;
			width: 100%;
			min-height: 30rpx;
			line-height: 30rpx;
			word-wrap: break-word;
			word-break: normal;
		}

		.item-time {
			margin-top: 12rpx;
			width: 100%;
			height: 34rpx;
			line-height: 34rpx;
			font-size: 24rpx;
		}
	}
}

.line-state {
	width: 20rpx;
	height: 20rpx;
	border-radius: 50%;
}

.take-space {
	width: 100%;
	height: 80rpx;
}

.text-1A1A1A {
	color: #1a1a1a;
}

.text-999999 {
	color: #999999;
}

.text-808080 {
	color: #808080;
}
</style>
