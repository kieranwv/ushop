<template>
	<view class="slot">
		<view class="'left">
			<view class="item">
				<u-icon size="36" name="server-fill"></u-icon>
				<text>客服</text>
			</view>
			<view class="item">
				<u-icon size="36" name="star-fill" v-if="data.isCollection"></u-icon>
				<u-icon size="36" name="star" v-else></u-icon>
				<text v-if="data.isCollection">已收藏</text>
				<text v-else>收藏</text>
			</view>
			<view class="item" @click="goShoppingCart">
				<u-icon size="36" name="shopping-cart"></u-icon>
				<text>购物车</text>
			</view>
		</view>
		<view class="right">
			<u-button style="width: 248rpx;" type="dark" @click="addShoppingCart">加入购物车</u-button>
			<u-button style="width: 248rpx;" type="primary" @click="buyNow">立即购买</u-button>
		</view>
	</view>
</template>

<script>
export default {
	name: 'goods-operate',
	props: {
		// 数据源
		data: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {
		// 加入购物车
		addShoppingCart() {
			this.$emit('addShoppingCart');
		},

		// 立即购买
		buyNow() {
			this.$emit('buyNow');
		},

		// 去购物车
		goShoppingCart() {
			uni.navigateTo({
				url: '/pages-mall/pages/shopping-cart'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	min-height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: $app-theme-bg-color;
	z-index: $app-zIndex-fixed;
	box-shadow: $app-theme-shadow;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	.left {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.item {
			color: $app-theme-text-black-color;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			text {
				padding-top: 4rpx;
				text-align: center;
				width: 100%;
				font-size: 20rpx;
			}
		}
	}
	.right {
		display: flex;
		align-items: center;
		/deep/button {
			height: 100%;
			line-height: 100rpx;
			border-radius: 0 !important;
			&::after {
				border: initial;
			}
		}
	}
}
</style>
