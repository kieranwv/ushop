<template>
	<view class="slot">
		<view class="item" @click="openSkuSelect">
			<view class="info">
				<view class="label">已选</view>
				<view class="value">{{ selectedSku.label || '请选择规格' }}</view>
			</view>
			<view class="operate"><u-icon name="more-dot-fill" :color="iconColor"></u-icon></view>
		</view>
		<view class="item" @click="goAddressPage">
			<view class="info">
				<view class="label">送至</view>
				<view class="value">{{ selectedAddress || '请选择地址' }}</view>
			</view>
			<view class="operate"><u-icon name="more-dot-fill" :color="iconColor"></u-icon></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'goods-select',
	props: {
		selectedSku: {
			type: Object,
			default: () => {
				return {};
			}
		},
		selectedAddress: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			iconColor: this.$appTheme.appThemeTextGrayColor
		};
	},
	methods: {
		// 通知打开sku选择框
		openSkuSelect() {
			this.$emit('openSku');
		},
		
		// 跳转收货地址页面
		goAddressPage() {
			uni.navigateTo({
				url: '/pages-mine/pages/address/list?isSelect=true&isBack=true'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	padding: 30rpx;
	background-color: #fff;
	margin-bottom: 16rpx;
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:first-child {
			margin-bottom: 30rpx;
		}
		.info {
			display: flex;
			align-items: center;
			.label {
				font-size: 28rpx;
				font-weight: 400;
				color: $app-theme-card-gray-deep-color;
				margin-right: 30rpx;
			}
			.value {
				font-size: 28rpx;
				font-weight: 400;
				color: $app-theme-text-black-color;
			}
		}
		.operate {
		}
	}
}
</style>
