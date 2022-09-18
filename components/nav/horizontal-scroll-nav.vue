<template>
	<view class="slot">
		<scroll-view class="scroll" scroll-x="true">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="title">
					<image src="../../static/bg/bg-community.png"></image>
					<text>{{ item.text }}</text>
				</view>
				<view class="info">
					<image src="../../static/bg/bg-user.png"></image>
					<view class="num">
						<text>{{ item.num }}</text>
						<text>人参与</text>
					</view>
				</view>
				<u-image class="bg" width="360rpx" height="190rpx" :src="item.bg"></u-image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: 'horizontal-scroll-nav',
	props: {
		// 列表
		list: {
			type: Array,
			default: () => {
				return [];
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	height: auto;
	width: 100%;
	.scroll {
		width: 100%;
		white-space: nowrap;
	}
	.item {
		display: inline-block;
		width: 360rpx;
		height: 190rpx;
		margin-right: 30rpx;
		padding: 24rpx;
		position: relative;
		border-radius: 12rpx;
		overflow: hidden;
		&:nth-child(1) {
			margin-left: 30rpx;
		}
		.bg {
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 12rpx;
			overflow: hidden;
			z-index: 19;
		}
		.title {
			width: calc(100% - 48rpx);
			position: absolute;
			left: 24rpx;
			top: 24rpx;
			z-index: 39;

			image {
				vertical-align: middle;
				padding-right: 4rpx;
				width: 32rpx;
				height: 32rpx;
			}

			text {
				vertical-align: middle;
				font-size: 28rpx;
				font-weight: 500;
				color: #ffffff;
				line-height: 44rpx;
				white-space: pre-wrap;
			}
		}

		.info {
			display: flex;
			align-items: center;
			position: absolute;
			left: 24rpx;
			bottom: 24rpx;
			z-index: 39;
			image {
				width: 26rpx;
				height: 24rpx;
				margin-right: 8rpx;
				vertical-align: middle;
			}

			.num {
				vertical-align: middle;
				font-size: 20rpx;
				font-weight: 500;
				color: #ffffff;
				line-height: 44rpx;

				text:nth-child(1) {
					vertical-align: middle;
					font-weight: bold;
					color: #f6f6f6;
					font-size: 28rpx;
					line-height: 2;
				}

				text:nth-child(2) {
					vertical-align: bottom;
					font-weight: bold;
					color: #f6f6f6;
					font-size: 20rpx;
					line-height: 2.6;
				}
			}
		}
	}
}
</style>
