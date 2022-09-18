<template>
	<view class="slot">
		<view class="status"><text v-if="type == '0'">退款成功</text></view>
		<view class="desc">
			<text v-if="type == '0'">{{ ponitsDate }}</text>
		</view>
		<view class="operate"></view>
	</view>
</template>

<script>
export default {
	name: 'back-status',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 类型
		type: {
			type: [String, Number],
			default: '0'
		},
		// 当前节点日期
		ponitsDate: {
			type: String,
			default: '2022-01-11 14:19:56'
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.slot {
	position: relative;
	padding: 30rpx;
	background-color: $app-theme-color;
	color: $app-theme-text-white-color;
	margin-bottom: 24rpx;
	.status {
		margin-bottom: 20rpx;
		font-size: 30rpx;
	}
	.desc {
		font-size: 26rpx;
	}
	.operate {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}
}
</style>
