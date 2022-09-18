<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="订单详情"></Navbar>
		<!-- 订单状态 -->
		<OrderStatus :type="orderInfo.status" :data="orderInfo"></OrderStatus>
		<!-- 地址 -->
		<view class="address"><AddressCard :data="addressInfo" :isGoSelect="false"></AddressCard></view>
		<!-- 商品列表 -->
		<view class="goods">
			<TitleOperate :title="'共' + goodsList.length + '件商品'" titleSize="30rpx"></TitleOperate>
			<view class="list">
				<SubmitGoodsCard v-for="(goods, index) in goodsList" :key="index" :data="goods" :showBorderBottom="index != goodsList.length - 1"></SubmitGoodsCard>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="order-info">
			<TitleOperate title="订单信息" titleSize="30rpx"></TitleOperate>
			<view class="inner"><LineInfoOperate :ops="orderInfoOps"></LineInfoOperate></view>
		</view>
		<!-- 操作按钮 -->
		<OrderOperate :data="orderInfo"></OrderOperate>
	</view>
</template>

<script>
import OrderStatus from '@/pages-mall/components/order/order-status.vue';
import AddressCard from '@/pages/mine/components/address-card.vue';
import TitleOperate from '@/components/title-operate.vue';
import SubmitGoodsCard from '@/pages-mall/components/order/submit-goods-card.vue';
import LineInfoOperate from '@/pages-mall/components/line-info-operate.vue';
import OrderOperate from '@/pages-mall/components/order/order-operate.vue';
export default {
	components: {
		OrderStatus,
		AddressCard,
		SubmitGoodsCard,
		TitleOperate,
		LineInfoOperate,
		OrderOperate
	},
	data() {
		return {
			// 订单信息
			orderInfo: {},
			// 地址信息
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
			// 商品列表
			goodsList: [
				{ name: "澳新直购 Nature's Way 澳萃", num: 1, sku: '复合维生素软糖160粒', price: '40', checked: true },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false },
				{ name: 'Healthy Care 辅酶Q10 100粒/瓶*2瓶', num: 2, sku: '辅酶Q10100粒', price: '378', checked: false }
			],
			// 订单信息配置项
			orderInfoOps: [
				{ label: '订单编号', value: null, operate: 'copy' },
				{ label: '下单时间', value: null, operate: '' },
				{ label: '订单类型', value: null, operate: '' },
				{ label: '支付状态', value: null, operate: '' },
				{ label: '支付方式', value: null, operate: '' }
			]
		};
	},
	onLoad(ops) {
		this.orderInfo = uni.getStorageSync('orderInfo');
		this.orderInfoOps = [
			{ label: '订单编号', value: this.orderInfo.orderId, operate: 'copy' },
			{ label: '下单时间', value: this.orderInfo.createTime, operate: '' },
			{ label: '订单类型', value: this.orderInfo.orderType == '1' ? '普通订单' : '其他订单', operate: '' },
			{ label: '支付状态', value: this.orderInfo.payStatus == '1' ? '未支付' : '支付完成', operate: '' },
			{ label: '支付方式', value: this.orderInfo.payStatus == '1' ? '余额支付' : '其他支付', operate: '' }
		];
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding-bottom: 120rpx;
}
.address {
	margin-bottom: 24rpx;
	padding: 0 30rpx;
	background-color: $app-theme-bg-color;
}
.goods,
.order-info {
	margin-bottom: 24rpx;
	background-color: $app-theme-bg-color;
	.list,
	.inner {
		padding: 0 30rpx;
	}
}
</style>
