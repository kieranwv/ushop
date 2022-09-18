<template>
	<view class="slot" :style="showBorderBottom ? '' : 'border-bottom:none;margin-bottom:0'">
		<view class="user">
			<view class="info">
				<u-avatar size="80" src="../../../static/user/1.png"></u-avatar>
				<view class="basic">
					<view class="name">{{ data.userName }}</view>
					<view class="evaluate"><u-rate :count="5" v-model="data.star" disabled :inactive-color="rateInActiveColor" :active-color="rateActiveColor"></u-rate></view>
				</view>
			</view>
			<view class="date">{{ data.date }}</view>
		</view>
		<view class="content">{{ data.content }}</view>
		<view class="pictures"><u-image width="164rpx" height="164rpx" src="../../../static/goods/4.png" v-for="(pic, cur) in data.pics" :key="cur"></u-image></view>
	</view>
</template>

<script>
export default {
	name: 'evaluate-card',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 是否显示底部边框
		showBorderBottom: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			rateActiveColor: this.$appTheme.appThemeColor,
			rateInActiveColor: this.$appTheme.appThemeCardGrayColor
		};
	}
};
</script>

<style lang="scss" scoped>
.slot {
	border-bottom: 1rpx solid $app-theme-border-color;
	padding-bottom: 24rpx;
	margin-bottom: 24rpx;
}
.user {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	.info {
		display: flex;
		justify-content: flex-start;
		.basic {
			margin-left: 16rpx;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			align-content: space-between;
			.name {
				width: 100%;
				font-size: 28rpx;
				color: $app-theme-text-black-color;
				// 为了与 u-rate 组件左侧视觉对齐
				padding-left: 10rpx;
			}
			.evaluate {
			}
		}
	}
	.date {
		font-size: 26rpx;
		color: $app-theme-text-gray-color;
	}
}
.content {
	padding-top: 26rpx;
	padding-bottom: 24rpx;
	font-size: 28rpx;
	color: $app-theme-text-black-color;
}

.pictures {
}
</style>
