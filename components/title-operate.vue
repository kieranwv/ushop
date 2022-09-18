<template>
	<view class="slot" :style="{ padding, backgroundColor, alignItems: align }">
		<view class="name" :style="[{ fontSize: titleSize }, titleColor ? { color: titleColor } : {}]">{{ title }}</view>
		<view class="more" v-if="showMore" @click="clickMore">
			{{ moreLabel ? moreLabel : '' }}
			<u-icon size="20" name="arrow-right"></u-icon>
		</view>
		<!-- 自定义右侧占位 -->
		<view class="more" v-else><slot></slot></view>
	</view>
</template>

<script>
export default {
	name: 'title-operate',
	props: {
		// 标题
		title: {
			type: String,
			default: '标题'
		},
		// 显示更多
		showMore: {
			type: Boolean,
			default: false
		},
		// 更多按钮的名称
		moreLabel: {
			type: String,
			default: '更多商品'
		},
		// 内边距
		padding: {
			type: String,
			default: '30rpx'
		},
		// 背景
		backgroundColor: {
			type: String,
			default: ''
		},
		// 标题字体大小
		titleSize: {
			type: String,
			default: '34rpx'
		},
		// 对齐方式
		align: {
			type: String,
			default: 'flex-end'
		},
		// 标题颜色
		titleColor: {
			type: String,
			default: ''
		}
	},
	methods: {
		clickMore() {
			this.$emit('clickMore');
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	justify-content: space-between;
	.name {
		color: $app-theme-text-black-color;
	}
	.more {
		display: flex;
		align-items: center;
		color: $app-theme-text-gray-color;
	}
}
</style>
