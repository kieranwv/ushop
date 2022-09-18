<template>
	<view class="slot" @click="goPostDetail">
		<view class="pic"><u-image height="360rpx" mode="widthFix" :src="data.img"></u-image></view>
		<view class="inner">
			<view class="title">{{ data.title }}</view>
			<view class="info">
				<view class="user">
					<view class="avatar"><image :src="data.avatar" mode="aspectFill"></image></view>
					<text>{{ data.name }}</text>
				</view>
				<view class="num">
					<u-icon name="thumb-up"></u-icon>
					<text style="padding-left: 4rpx;">{{ data.num }}</text>
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
		}
	},
	methods: {
		goPostDetail() {
			uni.navigateTo({
				url: '/pages-community/pages/post/detail'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: inline-block;
	background-color: $app-theme-bg-color;
	width: 100%;
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
		margin-bottom: 30rpx;
		width: 100%;
		word-break: break-all;
		white-space: pre-wrap;
		font-weight: 400;
		font-size: 28rpx;
		color: $app-theme-text-black-color;
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
		.user {
			display: flex;
			align-items: center;
			.avatar {
				width: 40rpx;
				height: 40rpx;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				image {
					width: 100%;
					height: 100%;
				}
			}
			text {
				font-size: 20rpx;
				color: $app-theme-card-gray-color;
			}
		}
		.num {
			font-size: 24rpx;
			font-weight: 400;
			color: $app-theme-card-gray-color;
		}
	}
}
</style>
