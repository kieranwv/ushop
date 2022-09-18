<template>
	<view class="page">
		<!-- 带tab的导航栏 -->
		<NvabarTabSearch url="/pages/search" :tabOps="['商城']" placeholder="搜索商品、品牌" showSlot showSearch>
			<view class="shopcart" @click="goShoppingCart">
				<u-badge type="error" count="1" :offset="[-10, -10]" size="mini"></u-badge>
				<u-icon size="48" name="shopping-cart"></u-icon>
			</view>
		</NvabarTabSearch>
		<!-- 轮播图 -->
		<view class="banner-swiper"><u-swiper height="300rpx" :list="bannerSwiperList" mode="round" name="pic" border-radius="0"></u-swiper></view>
		<!-- 金刚区 -->
		<view class="dial-nav"><dial-nav imgSize="88rpx" :list="dialNavList" imgName="pic" :mode="10"></dial-nav></view>
		<!-- 海报区 -->
		<Poster></Poster>
		<!-- 积分兑换区 -->
		<Points :list="pointsList"></Points>
		<!-- 好物推荐 -->
		<view class="recommendGoods">
			<TitleOperate title="好物推荐"></TitleOperate>
			<view class="list">
				<!-- 瀑布流组件 -->
				<u-waterfall ref="topicWaterFall" v-model="recommendGoodsList" marginLeft="7rpx" marginRight="7rpx">
					<template v-slot:left="{ leftList }">
						<CardGoods v-for="(item, index) in leftList" :key="index" :data="item" :showOldMoney="item.oldMoney"></CardGoods>
					</template>
					<template v-slot:right="{ rightList }">
						<CardGoods v-for="(item, index) in rightList" :key="index" :data="item" :showOldMoney="item.oldMoney"></CardGoods>
					</template>
				</u-waterfall>
			</view>
		</view>
	</view>
</template>

<script>
// 组件
import NvabarTabSearch from '@/components/navbar/navbar-tab-search.vue';
import DialNav from '@/components/nav/dial-nav.vue';
import Poster from '@/pages/mall/components/poster.vue';
import Points from '@/pages/mall/components/points.vue';
import TitleOperate from '@/components/title-operate.vue';
import CardGoods from '@/pages/mall/components/card.vue';
// 假数据
import { pointsList, bannerSwiperList, dialNavList, recommendGoodsList } from '@/static/test-data.js';
export default {
	components: {
		NvabarTabSearch,
		DialNav,
		Poster,
		Points,
		TitleOperate,
		CardGoods
	},
	data() {
		return {
			// 轮播图
			bannerSwiperList: [],
			// 金刚区
			dialNavList: [],
			// 积分商品
			pointsList: pointsList,
			// 好物推荐列表
			recommendGoodsList: []
		};
	},
	onLoad() {
		this.getHomeData();
	},
	methods: {
		getHomeData() {
			this.bannerSwiperList = bannerSwiperList;
			this.dialNavList = dialNavList;
			this.recommendGoodsList = recommendGoodsList;
		},

		// 去购物粗
		goShoppingCart() {
			uni.navigateTo({
				url: '/pages-mall/pages/shopping-cart'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.shopcart {
	position: relative;
	display: flex;
	align-items: center;
}

.banner-swiper {
	padding: 30rpx 30rpx 0 30rpx;
	background-color: $app-theme-bg-color;
}
.dial-nav {
	min-height: 390rpx;
	background-color: $app-theme-bg-color;
}
.recommendGoods {
	.list {
		padding: 0 30rpx;
	}
}
</style>
