<template>
	<view class="page">
		<!-- 带搜索框的一般导航栏 -->
		<NavbarSearch title="商品列表" placeholder="搜索商品、品牌"></NavbarSearch>
		<!-- 商品列表 -->
		<view class="list">
			<!-- 瀑布流组件 -->
			<u-waterfall ref="topicWaterFall" v-model="goodsList" marginLeft="7rpx" marginRight="7rpx">
				<template v-slot:left="{ leftList }">
					<CardGoods v-for="(item, index) in leftList" :key="index" :data="item" :showOldMoney="item.oldMoney"></CardGoods>
				</template>
				<template v-slot:right="{ rightList }">
					<CardGoods v-for="(item, index) in rightList" :key="index" :data="item" :showOldMoney="item.oldMoney"></CardGoods>
				</template>
			</u-waterfall>
		</view>
	</view>
</template>

<script>
// 组件
import CardGoods from '@/pages/mall/components/card.vue';
import NavbarSearch from '@/pages-mall/components/navbar-search.vue';
// 假数据
import { recommendGoodsList as goodsList } from '@/static/test-data.js';
export default {
	components: {
		CardGoods,
		NavbarSearch
	},
	data() {
		return {
			goodsList: goodsList
		};
	}
};
</script>

<style lang="scss" scoped>
.list {
	padding: 30rpx;
}
</style>
