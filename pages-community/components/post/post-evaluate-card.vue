<template>
	<view class="slot" :class="{ border }">
		<view class="header">
			<view class="user">
				<u-avatar size="62" src="../../../static/user/1.png"></u-avatar>
				<text>{{ data.username }}</text>
			</view>
			<view class="operate">
				<u-icon name="thumb-up" size="32rpx" :color="iconColor"></u-icon>
				<text>{{ data.thumbNum }}</text>
				<u-icon @click="report" size="30" name="warning" :color="iconColor"></u-icon>
			</view>
		</view>
		<view class="body">{{ data.content }}</view>
		<view class="footer">
			<view class="time">{{ data.createDate }}</view>
			<text>·</text>
			<view class="operate">回复TA</view>
		</view>
		<view class="reply">
			<view class="inner">
				<view class="item" v-for="(item, index) in data.replyList" :key="index">
					<view class="user">
						<u-avatar size="40" src="../../../static/user/1.png"></u-avatar>
						<text>{{ item.username }}</text>
						<text>{{ item.createDate }}</text>
					</view>
					<view class="content">{{ item.content }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			iconColor: this.$appTheme.appThemeTextGrayColor
		};
	},
	methods: {
		report() {
			this.$emit('report');
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	padding-top: 24rpx;
	padding-bottom: 26rpx;
	&.border {
		border-bottom: 1px solid $app-theme-border-color;
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.user {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text {
				margin-left: 16rpx;
			}
		}
		.operate {
			display: flex;
			align-items: center;

			text {
				margin-left: 8rpx;
				margin-right: 16rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-gray-color;
			}
		}
	}

	.body {
		padding: 18rpx 0;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-text-black-color;
	}
	.footer {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.time {
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-gray-color;
		}
		text {
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-gray-color;
			margin-right: 24rpx;
			margin-left: 12rpx;
		}
		.operate {
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-black-color;
		}
	}
	.reply {
		width: 100%;
		padding-left: 84rpx;
		padding-top: 40rpx;
		box-sizing: border-box;
		.inner {
			background: $app-theme-bg-gray-color;
			width: 100%;
		}
		.item {
			width: 100%;
			padding: 24rpx;
			.user {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				text:nth-child(2) {
					font-size: 26rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $app-theme-card-gray-deep-color;
					margin-left: 8rpx;
				}
				text:nth-child(3) {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $app-theme-text-gray-color;
					margin-left: 8rpx;
				}
			}
			.content {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-black-color;
			}
		}
	}
}
</style>
