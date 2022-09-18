<template>
	<view class="slot" @click="$u.route({ url: '/pages-mall/pages/goods/detail', params: { id: data.id, goodsType: 'normal' } })">
		<view class="pic"><u-image height="360rpx" mode="widthFix" :src="data.img"></u-image></view>
		<view class="inner">
			<view class="title">{{ data.title }}</view>
			<view class="info">
				<view class="money">
					<view class="now">
						<text>￥</text>
						<text>{{ data.money }}</text>
					</view>
					<view class="old" v-if="showOldMoney">
						<text>￥{{ data.oldMoney }}</text>
					</view>
				</view>
				<view class="sale">
					<text>月销</text>
					<text>{{ $replaceSale(data.num) }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 是否显示原价
		showOldMoney: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: inline-block;
	background-color: $app-theme-bg-color;
	overflow: hidden;
	margin-bottom: 16rpx;
	.pic {
		overflow: hidden;
		width: 100%;
		background-color: $app-theme-bg-color;
	}
	.inner {
		padding: 22rpx 18rpx 26rpx 24rpx;
	}
	.title {
		width: 100%;
		word-break: break-all;
		white-space: pre-wrap;
		font-weight: 400;
		font-size: 28rpx;
		color: $app-theme-text-black-color;
		margin-bottom: 12rpx;
		// 默认单行，如果需要瀑布流则改成多行
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.info {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.money {
			display: flex;
			align-items: flex-end;
			.now {
				text:nth-child(1) {
					font-size: 20rpx;
					color: $app-theme-text-money-color;
				}
				text:nth-child(2) {
					font-size: 28rpx;
					color: $app-theme-text-money-color;
				}
			}
			.old {
				text {
					font-size: 20rpx;
					color: $app-theme-card-gray-color;
					text-decoration-line: line-through;
				}
			}
		}
		.sale {
			font-size: 24rpx;
			font-weight: 400;
			color: $app-theme-card-gray-color;
		}
	}
}
</style>
