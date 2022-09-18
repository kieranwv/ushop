<template>
	<view class="slot">
		<view class="title">
			<view class="left">
				<text>已经连续签到</text>
				<text>{{ totalDay }}</text>
				<text>天</text>
			</view>
			<view class="right">
				<u-image width="24rpx" height="24rpx" src="@/pages-points/static/points-sign.png"></u-image>
				<text>积分规则</text>
			</view>
		</view>
		<view class="list">
			<view class="day" v-for="(item, index) in list" :key="index" :class="{ active: item.signed }" @click="sign(item, index)">
				<view class="label">{{ item.label }}</view>
				<view class="value">{{ item.value }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					label: '+1',
					value: '1天',
					signed: true
				},
				{
					label: '+2',
					value: '2天',
					signed: true
				},
				{
					label: '+3',
					value: '3天',
					signed: true
				},
				{
					label: '+4',
					value: '4天',
					signed: true
				},
				{
					label: '+5',
					value: '5天',
					signed: false
				},
				{
					label: '+6',
					value: '6天',
					signed: false
				},
				{
					label: '+7',
					value: '7天',
					signed: false
				}
			]
		};
	},
	computed: {
		totalDay() {
			return this.list.filter(item => item.signed).length;
		}
	},
	methods: {
		sign(item, index) {
			this.list[index].signed = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	background-color: $app-theme-bg-color;
	padding: 40rpx 30rpx 30rpx 30rpx;
	box-shadow: $app-theme-shadow;
	position: relative;
	z-index: $app-zIndex-normal;
	margin: 0 24rpx;
	border-radius: 16rpx;
}
.title {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 30rpx;
	.left {
		text:nth-child(1),
		text:nth-child(3) {
			font-size: 28rpx;
			color: $app-theme-text-black-color;
			margin-right: 6rpx;
		}
		text:nth-child(2) {
			font-size: 48rpx;
			font-weight: bold;
			color: $app-theme-color;
			margin-right: 6rpx;
		}
	}
	.right {
		display: flex;
		text {
			font-size: 28rpx;
			color: $app-theme-text-black-color;
			margin-left: 6rpx;
		}
	}
}
.list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.day {
		padding: 16rpx 12rpx;
		border-radius: 8rpx;
		background-color: $app-theme-points-sign-bg-color;
		.label {
			width: 30px;
			height: 30px;
			background-color: $app-theme-points-sign-label-bg-color;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 14rpx;
			color: $app-theme-text-black-color;
		}
		.value {
			text-align: center;
			font-size: 24rpx;
			color: $app-theme-points-sign-value-color;
		}
		&.active {
			background-color: $app-theme-color;
			.label {
				background: $app-theme-deep-color;
				color: $app-theme-text-white-color;
			}
			.value {
				color: $app-theme-text-white-color;
			}
		}
	}
}
</style>
