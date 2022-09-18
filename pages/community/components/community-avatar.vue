<template>
	<view class="slot">
		<view class="left">
			<u-avatar :src="data.userPhoto" mode="circle" size="80" show-level="true"></u-avatar>
			<view class="info">
				<view>
					<text class="username">{{ data.useername }}</text>
					<view class="tag" v-if="showTag">
						<u-tag v-if="data.typeOfficial === 1" text="官网" size="mini" bg-color="#9091EB" color="#F1F7FF" border-color="#9091EB" />
						<u-tag v-if="data.Overhead === 2" text="顶置" size="mini" bg-color="#FC7D6D" color="#F1F7FF" border-color="#FC7D6D" />
					</view>
				</view>
				<view class="time">{{ data.tiem }}</view>
			</view>
		</view>
		<view v-if="operateType == 'more'" @click.stop="more"><u-icon size="30" name="more-dot-fill" :color="iconColor"></u-icon></view>
		<view v-if="operateType == 'report'" @click.stop="report"><u-icon size="30" name="warning" :color="iconColor"></u-icon></view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: {}
		},
		showTag: {
			type: Boolean,
			default: false
		},
		operateType: {
			type: String,
			default: 'more'
		}
	},
	data() {
		return {
			iconColor: this.$appTheme.appThemeTextGrayColor
		};
	},
	methods: {
		// 举报
		report() {
			this.$emit('report');
		},
		// 更多
		more(){
			this.$emit('more')
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	justify-content: space-between;
	align-content: space-between;
}
.left {
	display: flex;
	.info {
		margin-left: 16rpx;
		.username {
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-black-color;
			margin-bottom: 8rpx;
		}
		.tag {
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-gray-color;
		}
	}
	.time {
		font-size: 24rpx;
		font-weight: 400;
		color: $app-theme-text-gray-color;
		line-height: 34rpx;
		margin-top: 8rpx;
	}
}
</style>
