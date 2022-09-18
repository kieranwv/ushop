<template>
	<view class="slot">
		<view class="item" v-for="(item, index) in ops" :key="index" @click="change(item, index)">
			<view class="left">
				<u-image :src="item.icon" width="40rpx" height="40rpx" style="margin-right: 24rpx;"></u-image>
				<view class="info">
					<view class="title">{{ item.title }}</view>
					<view class="desc">{{ item.desc }}</view>
				</view>
			</view>
			<view class="right"><u-icon size="20" name="arrow-right" :color="arrowColor"></u-icon></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		ops: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {
			arrowColor: this.$appTheme.appThemeTextGrayColor
		};
	},
	methods: {
		change(item, index) {
			this.$emit('change', { item, index });
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	padding: 30rpx;
	box-shadow: $app-theme-shadow;
	border-radius: 16rpx;
	background-color: $app-theme-bg-color;
	.item {
		margin-bottom: 54rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:last-child {
			margin-bottom: 0;
		}
		.left {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.info {
				.title {
					font-size: 28rpx;
					color: $app-theme-text-black-color;
					margin-bottom: 8rpx;
				}
				.desc {
					font-size: 24rpx;
					color: $app-theme-shop-gray-color;
				}
			}
		}
		.right {
			display: flex;
			align-items: center;
		}
	}
}
</style>
