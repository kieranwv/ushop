<template>
	<view class="solt" @click.stop="goGoodsDetail">
		<view class="shoppMian">
			<view class="shop_1">
				<u-image width="44rpx" height="44rpx" :src="data.shopimg"></u-image>
				<view class="left_5 context-text">{{ data.shopText }}</view>
			</view>
			<view class="show_2">
				<view>{{ data.shopmoney }}</view>
				<u-icon style="margin-left: 10rpx;" size="22" name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {
		goGoodsDetail() {
			uni.navigateTo({
				url: '/pages-mall/pages/goods/detail'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.solt {
	background: #f3f4f9;
	padding: 10rpx 6rpx;
	margin-bottom: 16rpx;
}
.shop_1 {
	display: flex;
	align-items: center;
}
.show_2 {
	display: flex;
	align-items: center;
}
.shoppMian {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.left_5 {
	margin-left: 10rpx;
}
.context-text {
	font-size: 28rpx;
	font-weight: 400;
	color: $app-theme-navbar-tab-color;
	line-height: 40rpx;
}
</style>
