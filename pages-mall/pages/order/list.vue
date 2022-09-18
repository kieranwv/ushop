<template>
	<view class="page" style="padding-top: 18vh;">
		<!-- 带tab、search的导航栏 -->
		<NavbarTabSearch
			ref="NavbarTabSearch"
			title="我的订单"
			:tabOps="[
				{ label: '全部', value: '' },
				{ label: '待付款', value: '0' },
				{ label: '待发货', value: '1' },
				{ label: '待收货', value: '2' },
				{ label: '待评价', value: '3' },
				{ label: '退款/售后', value: '4' }
			]"
			@change="changeTab"
			placeholder="搜索全部订单"
		></NavbarTabSearch>
		<!-- 列表 -->
		<view class="list">
			<OrderCard v-for="(item, index) in orderList" :key="index" :data="item"></OrderCard>
			<NoData height="60vh" type="order" v-if="orderList.length == 0"></NoData>
		</view>
	</view>
</template>

<script>
// 组件
import NavbarTabSearch from '@/pages-mall/components/navbar-tab-search.vue';
import OrderCard from '@/pages-mall/components/order/order-card.vue';
// 假数据
import { orderList } from '@/static/test-data.js';
export default {
	components: { NavbarTabSearch, OrderCard },
	data() {
		return {
			orderList: orderList,
			// 当前tab
			tabIndex: 0
		};
	},
	onLoad(ops) {
		if (ops.tabIndex) {
			this.tabIndex = ops.tabIndex;
			this.$nextTick(() => {
				this.$refs.NavbarTabSearch.changeTab(Number(ops.tabIndex));
			});
		}
	},
	methods: {
		// 切换tab的回调
		changeTab(e) {
			const { tab, index } = e;
			this.tabIndex = index;
			let arr = [];
			for (var i = 0; i < orderList.length; i++) {
				if (tab.value == '') {
					arr.push(orderList[i]);
					continue;
				}
				if (orderList[i].status == tab.value) {
					arr.push(orderList[i]);
				}
			}
			this.orderList = arr;
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	padding: 30rpx;
}
</style>
