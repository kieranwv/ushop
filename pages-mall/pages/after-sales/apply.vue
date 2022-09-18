<template>
	<view class="page">
		<Navbar title="申请售后" :backFunction="goBack"></Navbar>
		<!-- 商品卡片 -->
		<view class="goods"><OrderGoodsCard :data="orderInfo"></OrderGoodsCard></view>
		<!-- 操作项 -->
		<SelectItem v-if="backType == 'home'" :ops="selectOps" @change="changBackType"></SelectItem>
		<!-- 仅退款 -->
		<BackMoney v-if="backType == 'money'"></BackMoney>
		<!-- 退货退款 -->
		<!-- <BackAll v-if="backType == 'all'"></BackAll> -->
		<BackMoney v-if="backType == 'all'"></BackMoney>
		<!-- 换货 -->
		<BackGoods v-if="backType == 'goods'"></BackGoods>
	</view>
</template>

<script>
// 组件
import OrderGoodsCard from '@/pages-mall/components/order/order-goods-card.vue';
import SelectItem from '@/pages-mall/components/after-sales/select-item.vue';
import BackMoney from '@/pages-mall/components/after-sales/back-money.vue';
import BackAll from '@/pages-mall/components/after-sales/back-all.vue';
import BackGoods from '@/pages-mall/components/after-sales/back-goods.vue';
export default {
	components: {
		OrderGoodsCard,
		SelectItem,
		BackMoney,
		BackAll,
		BackGoods
	},
	data() {
		return {
			// 选择的售后类型
			backType: 'home',
			// 详情
			orderInfo: {},
			// 售后类型的配置项
			selectOps: [
				{
					title: '仅退款',
					desc: '未收到货(包含未签收),或与卖家协商同意前提下',
					icon: require('@/pages-mall/static/select-item-1.png'),
					type: 'money'
				},
				{
					title: '退货退款',
					desc: '未收到货(包含未签收),或与卖家协商同意前提下',
					icon: require('@/pages-mall/static/select-item-2.png'),
					type: 'all'
				},
				{
					title: '仅退款',
					desc: '已收到货,需要退还收到的货物',
					icon: require('@/pages-mall/static/select-item-3.png'),
					type: 'goods'
				}
			]
		};
	},
	onLoad() {
		this.orderInfo = uni.getStorageSync('orderInfo');
	},

	methods: {
		// 导航栏返回自定义函数
		goBack() {
			
			if (this.backType == 'home') {
				uni.navigateBack({
					delta: 1
				});
			} else {
				this.backType = 'home';
			}
		},

		// 选择售后类型
		changBackType(e) {
			this.backType = e.item.type;
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 30rpx;
}
.goods {
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	padding: 30rpx;
	margin-bottom: 24rpx;
	background-color: $app-theme-bg-color;
}
</style>
