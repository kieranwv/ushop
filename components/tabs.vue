<template>
	<view class="slot" :style="{ padding, backgroundColor }">
		<u-tabs
			name="text"
			:list="listData"
			:is-scroll="true"
			:active-color="activeColor || default_activeColor"
			:inactive-color="inactiveColor || default_inactiveColor"
			:font-size="fontSize"
			:current="current"
			@change="change"
			:bar-style="{ backgrond: activeBarColor || default_activeBarColor }"
			bg-color="#FAFAFA"
			bar-height="6"
			:bg-color="backgroundColor"
			:item-width="itemWidth"
		></u-tabs>
	</view>
</template>

<script>
export default {
	name: 'tabs',
	data() {
		return {
			current: 0,
			default_activeBarColor: this.$appTheme.appThemeColor,
			default_activeColor: this.$appTheme.appThemeTextBlackColor,
			default_inactiveColor: this.$appTheme.appThemeTextBlackColor
		};
	},
	props: {
		// 配置项
		listData: {
			type: Array,
			default: () => {
				return [];
			}
		},
		// 激活颜色
		activeBarColor: {
			type: String,
			default: null
		},
		activeColor: {
			type: String,
			default: null
		},
		inactiveColor: {
			type: String,
			default: null
		},
		// 内边距
		padding: {
			type: String,
			default: '0 0rpx 20rpx'
		},
		// 背景色
		backgroundColor: {
			type: String,
			default: '#fafafa'
		},
		// 文字大小
		fontSize: {
			type: [String, Number],
			default: 30
		},
		// 宽度
		itemWidth: {
			type: [String, Number],
			default: 'auto'
		}
	},
	methods: {
		change(index) {
			this.current = index;
			this.$emit('change', index);
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
}
</style>
