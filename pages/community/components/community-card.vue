<template>
	<view class="slot" :class="{ border }" @click="clickCard">
		<view class="pic"><u-image width="124rpx" height="124rpx" :src="data.pics"></u-image></view>
		<view class="info">
			<view class="title">{{ data.cateName }}</view>
			<view class="desc">{{ data.desc }}</view>
			<view class="num" v-if="!showActive">
				<text>{{ 5594 }}人已加入</text>
				<text>{{ 1209 }}篇内容</text>
			</view>
			<view class="num" v-if="showActive">
				<text>{{ 4 }}圈友</text>
				<text>{{ 3 }}动态</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'community-card',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 是否显示下边框
		border: {
			type: Boolean,
			default: false
		},
		// 是否显示动态
		showActive: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		clickCard() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	align-items: center;
	padding-top: 24rpx;
	padding-bottom: 24rpx;
	&.border {
		border-bottom: 1rpx solid $app-theme-border-color;
	}
	.pic {
		margin-right: 24rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}
	.info {
		width: 380rpx;
		.title {
			font-size: 28rpx;
			color: $app-theme-text-black-color;
			margin-bottom: 8rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.desc {
			font-size: 24rpx;
			color: $app-theme-text-gray-color;
			margin-bottom: 16rpx;
		}
	}
	.num {
		font-size: 24rpx;
		color: $app-theme-text-gray-color;
		text:nth-child(1) {
			margin-right: 32rpx;
		}
	}
}
</style>
