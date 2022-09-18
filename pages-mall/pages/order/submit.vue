<template>
	<view class="page">
		<Navbar title="提交订单"></Navbar>
		<!-- 收货地址 -->
		<view class="address">
			<AddressCard :data="addressInfo"></AddressCard>
		</view>
		<!-- 商品列表 -->
		<view class="goods">
			<SubmitGoodsCard v-for="(goods, index) in goodsList" :key="index" :data="goods" :showBorderBottom="index != goodsList.length - 1"></SubmitGoodsCard>
		</view>
		<!-- 优惠信息 -->
		<SubmitDiscounts></SubmitDiscounts>
		<!-- 底部按钮 -->
		<SubmitOperate :data="orderInfo"></SubmitOperate>
	</view>
</template>

<script>
import SubmitDiscounts from '@/pages-mall/components/order/submit-discounts.vue';
import SubmitGoodsCard from '@/pages-mall/components/order/submit-goods-card.vue';
import SubmitOperate from '@/pages-mall/components/order/submit-operate.vue';
import AddressCard from '@/pages/mine/components/address-card.vue';
export default {
	components: {
		AddressCard,
		SubmitDiscounts,
		SubmitGoodsCard,
		SubmitOperate
	},
	data() {
		return {
			orderInfo: {
				price: '418'
			},
			addressInfo: {
				isHome: true,
				province: '山东省',
				city: '青岛市',
				area: '李沧区',
				street: '浮山路街道',
				address: '大马路路60号就金茂悦10号楼1单元',
				name: '李李',
				phone: '187****7234'
			},
			goodsList: [
				{ name: "澳新直购 Nature's Way 澳萃", num: 1, sku: '复合维生素软糖160粒', price: '40', checked: true },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false }
			]
		};
	}
};
</script>
<style lang="scss" scoped>
.page {
	padding-bottom: 140rpx;
}
.address{
	margin-top: 24rpx;
	padding: 0 30rpx;
	background-color: $app-theme-bg-color;
}
.goods {
	margin-top: 24rpx;
	background-color: $app-theme-bg-color;
	padding: 0 30rpx;
}
</style>
