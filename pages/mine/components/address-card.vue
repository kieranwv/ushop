<template>
	<view class="slot" :style="showBorderBottom ? '' : 'border-bottom:none'" @click="goPage()">
		<view class="info">
			<view class="item">
				<text class="tag" v-if="data.isHome">家</text>
				<text class="label">{{ data.province }}{{ data.city }}{{ data.area }}{{ data.street }}</text>
			</view>
			<view class="item">{{ data.address }}</view>
			<view class="item">
				<text>{{ data.name }}</text>
				<text>{{ data.phone }}</text>
			</view>
		</view>
		<view class="operate" v-if="showEdit && isGoSelect"><u-icon size="32" name="edit-pen"></u-icon></view>
		<view class="operate" v-if="!showEdit && isGoSelect"><u-icon size="20" name="arrow-right"></u-icon></view>
	</view>
</template>

<script>
export default {
	name: 'address-card',
	props: {
		// 是否显示编辑按钮
		showEdit: {
			type: Boolean,
			default: false
		},
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
		},
		// 是否选择并返回
		isBack: {
			type: Boolean,
			default: false
		},
		// 是否能点击
		isGoSelect: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		goPage() {
			if (!this.isGoSelect) return;
			if (this.showEdit) {
				uni.navigateTo({
					url: '/pages-mine/pages/address/add-or-update?type=update'
				});
			} else if (this.isBack) {
				uni.navigateBack({
					delta: 1
				});
			} else {
				uni.navigateTo({
					url: '/pages-mine/pages/address/list?isSelect=true&isBack=true'
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	padding-top: 30rpx;
	padding-bottom: 30rpx;
	background-color: $app-theme-bg-color;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid $app-theme-border-color;
	.tag {
		font-size: 20rpx;
		color: $app-theme-color;
		padding: 4rpx 14rpx;
		background-color: rgba($app-theme-color, 0.1);
		margin-right: 12rpx;
	}
	.item:nth-child(1) {
		margin-bottom: 12rpx;
		.label {
			font-size: 28rpx;
			color: $app-theme-text-black-color;
			font-weight: 400;
		}
	}
	.item:nth-child(2) {
		margin-bottom: 12rpx;
		font-size: 32rpx;
		color: $app-theme-text-black-color;
		font-weight: 500;
	}
	.item:nth-child(3) {
		text {
			font-size: 28rpx;
			color: $app-theme-text-black-color;
			font-weight: 400;
			margin-right: 16rpx;
		}
	}
}
</style>
