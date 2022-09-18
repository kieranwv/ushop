<template>
	<view class="slot">
		<view class="item" v-for="(item, index) in list" :key="index">
			<view class="left">
				<u-image style="margin-right:24rpx" width="92rpx" height="92rpx" :src="item.icon"></u-image>
				<view class="info">
					<view class="title">{{ item.title }}</view>
					<view class="desc">{{ item.desc }}</view>
				</view>
			</view>
			<view class="right">
				<view class="sign" v-if="!item.isOver">
					<u-image style="margin-right: 4rpx;" width="32rpx" height="32rpx" src="@/pages-points/static/points.png"></u-image>
					<text class="num">+{{ item.pointsNum }}</text>
				</view>
				<view class="signed" v-else>已签到</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'task',
	props: {
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
	padding: 0 24rpx;
	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 24rpx;
		padding-top: 24rpx;
		border-bottom: 1rpx solid $app-theme-border-color;
		.left {
			display: flex;
			align-items: center;
			.info {
				.title {
					font-size: 32rpx;
					color: $app-theme-text-black-color;
					margin-bottom: 8rpx;
				}
				.desc {
					font-size: 24rpx;
					color: $app-theme-points-sign-value-color;
				}
			}
		}
		.right {
			.sign {
				font-size: 28rpx;
				color: $app-theme-text-white-color;
				background-color: $app-theme-color;
				width: 70px;
				height: 60rpx;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.signed {
				font-size: 28rpx;
				color: $app-theme-color;
				width: 70px;
				height: 60rpx;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				border: 1px solid $app-theme-color;
			}
		}
	}
}
</style>
