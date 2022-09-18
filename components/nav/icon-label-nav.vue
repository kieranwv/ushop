<template>
	<view class="slot">
		<view class="tab" v-for="(item, index) in ops" :key="index" :class="{ active: currentTab == index }" @click="changeTab(item, index)">
			<view class="icon">
				<u-image width="56rpx" height="56rpx" :src="item.iconActive" v-show="currentTab == index"></u-image>
				<u-image width="56rpx" height="56rpx" :src="item.icon" v-show="currentTab != index"></u-image>
			</view>
			<view class="label">{{ item.label }}</view>
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
			currentTab: 0
		};
	},
	methods: {
		// 切换tab
		changeTab(item, index) {
			this.currentTab = index
			this.$emit('change', { item, index });
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: $app-theme-bg-color;
	height: 150rpx;
	.tab {
		.icon {
			display: flex;
			justify-content: center;
			margin-bottom: 14rpx;
		}
		.label {
			font-size: 26rpx;
			color: $app-theme-card-gray-deep-color;
		}

		&.active {
			.label {
				color: $app-theme-text-black-color;
			}
		}
	}
}
</style>
