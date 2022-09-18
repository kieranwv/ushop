<template>
	<view class="page">
		<!-- 自定义头部 -->
		<u-navbar back-icon-name="arrow-leftward" title="购物车"></u-navbar>

		<!-- 购物车列表 -->
		<view class="cart-list">
			<view class="item" v-for="(goods, index) in goodsList" :key="index">
				<view class="left"><u-checkbox shape="circle" active-color="#5758f6" icon-size="16" v-model="goods.checked"></u-checkbox></view>
				<view class="right">
					<view class="img"><image src="https://acbigdata.haier.net/lyyy/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220419151456.png" mode=""></image></view>
					<view class="info">
						<view class="title">{{ goods.name }}</view>
						<view class="sku">{{ goods.sku }}</view>
						<view class="operate">
							<view class="price">
								<text>￥</text>
								<text>{{ goods.price }}</text>
							</view>
							<view class="num"><u-number-box v-model="goods.num"></u-number-box></view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="recommend">
			<view class="title">推荐商品</view>
			<view class="list">
				<!-- 瀑布流组件 -->
				<u-waterfall ref="goodsWaterFall" v-model="goodsData" marginLeft="7rpx" marginRight="7rpx">
					<template v-slot:left="{ leftList }">
						<CardGoods v-for="(item, index) in leftList" :key="index" :data="item"></CardGoods>
					</template>
					<template v-slot:right="{ rightList }">
						<CardGoods v-for="(item, index) in rightList" :key="index" :data="item"></CardGoods>
					</template>
				</u-waterfall>
			</view>
		</view>

		<!-- 底部按钮 -->
		<view class="btn">
			<view class="inner">
				<view class="check">
					<u-checkbox shape="circle" active-color="#5758f6" icon-size="16" v-model="checkAllStauts" @change="checkAllGoods"></u-checkbox>
					<text>全选</text>
				</view>
				<view class="right">
					<view class="price">
						<text>合计：</text>
						<text>￥</text>
						<text>{{ totalPrice }}</text>
					</view>
					<u-button type="primary" @click="goPayResult">去结算({{ goodsList.filter(item => item.checked).length }})</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// 假数据
import { goodsList } from '@/static/test-data.js';
// 组件
import CardGoods from '@/pages/mall/components/card.vue';
export default {
	components: {
		CardGoods
	},
	data() {
		return {
			totalPrice: 0,
			checkAllStauts: false,
			goodsList: [
				{ name: "澳新直购 Nature's Way 澳萃", num: 1, sku: '复合维生素软糖160粒', price: '40', checked: true },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false }
			],
			goodsData: goodsList
		};
	},
	computed: {
		checkAll() {
			this.goodsList.map(item => (item.checked ? (this.totalPrice += Number(item.price) * item.num) : null));
			if (this.goodsList.filter(item => item.checked).length == this.goodsList.length) {
				this.checkAllStauts = true;
			} else {
				this.checkAllStauts = false;
			}
		}
	},
	methods: {
		checkAllGoods() {
			if (this.checkAllStauts) {
				this.goodsList.forEach(item => (item.checked = false));
			} else {
				this.goodsList.forEach(item => (item.checked = true));
			}
		},
		goPayResult() {
			uni.navigateTo({
				url: '/pages-mall/pages/order/submit'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background: $app-theme-bg-gray-color;
	padding: 24rpx;
}
/deep/.u-icon {
	display: flex !important;
}

.cart-list {
	.item {
		display: flex;
		align-items: center;
		background-color: $app-theme-bg-color;
		padding: 30rpx 24rpx 30rpx 24rpx;
		border-bottom: 1rpx solid $app-theme-border-color;

		.left {
			display: flex;
			align-items: center;
			width: 46rpx;
		}
		.right {
			width: calc(100% - 46rpx);
			display: flex;
			align-items: center;
			.img {
				width: 160rpx;
				height: 160rpx;
				margin-right: 20rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.info {
				width: 418rpx;
				.title {
					font-size: 28rpx;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					color: $app-theme-text-black-color;
					padding-bottom: 16rpx;
				}
				.sku {
					font-size: 22rpx;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					background: $app-theme-bg-gray-color;
					border-radius: 2px;
					color: $app-theme-card-gray-deep-color;
					padding: 4rpx 16rpx;
				}
				.operate {
					padding-top: 30rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.price {
						text:nth-child(1) {
							font-size: 24rpx;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: $app-theme-text-money-color;
						}
						text:nth-child(2) {
							font-size: 36rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: $app-theme-text-money-color;
						}
					}
					.num {
					}
				}
			}
		}
	}
}

.recommend {
	padding-top: 32rpx;
	padding-bottom: 120rpx;
	.title {
		text-align: center;
		font-size: 36rpx;
		font-weight: 500;
		color: $app-theme-text-black-color;
		padding-bottom: 16rpx;
		height: auto !important;
	}
	.list {
	}
}

.btn {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: $app-theme-bg-color;
	min-height: 100rpx;

	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		.check {
			padding-left: 30rpx;
			display: flex;
			align-items: center;
			text {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-black-color;
			}
		}
		.right {
			display: flex;
			align-items: center;
			.price {
				margin-right: 54rpx;
				text:nth-child(1) {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $app-theme-text-black-color;
				}
				text:nth-child(2) {
					font-size: 24rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: $app-theme-text-money-color;
				}
				text:nth-child(3) {
					font-size: 36rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $app-theme-text-money-color;
				}
			}
			/deep/button {
				height: 100%;
				line-height: 100rpx;
				border-radius: 0 !important;
			}
		}
	}
}
</style>
