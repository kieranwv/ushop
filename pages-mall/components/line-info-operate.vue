<template>
	<view class="slot">
		<view class="line" v-for="(item, index) in ops" :key="index">
			<view class="label">{{ item.label || '未命名' }}</view>
			<view class="value">{{ item.value || '无' }}</view>
			<view class="operate">
				<text v-if="item.operate == 'copy'" class="copy" @click="$copyByUniappApi(item.value)">复制</text>
				<text v-if="item.operate == 'more'" class="more" @click="goMore(item.moreUrl)">{{ moreLabel }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'line-info-operate',
	props: {
		// 配置项
		ops: {
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
	padding: 30rpx 0rpx;
}
.line {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30rpx;
	.label {
		width: 204rpx;
		font-size: 28rpx;
		color: $app-theme-text-color;
	}
	.value {
		width: 320rpx;
		text-align: left;
		font-size: 28rpx;
		color: $app-theme-text-color;
	}
	.operate {
		width: 100rpx;
		.copy {
			font-size: 28rpx;
			color: $app-theme-color;
		}
	}
}
</style>
