<template>
	<view class="page">
		<!-- 带城市、搜索框的导航栏 -->
		<navbar-city-search placeholder="搜索商品、品牌" :cityListSelected="nowSelectedCity"></navbar-city-search>
		<!-- 金刚区 -->
		<view class="dial-nav"><dial-nav marginTopLine='22rpx' imgSize='84rpx' :list="dialNavList"></dial-nav></view>
		<!-- 横向滚动列表 -->
		<horizontal-scroll-nav :list="horizontalScrollNavList"></horizontal-scroll-nav>
		<!-- 推荐商品 -->
		<view class="recommendGoods">
			<!-- 带操作的标题组件 -->
			<TitleOperate title="推荐商品" showMore></TitleOperate>
			<view class="list">
				<!-- 瀑布流组件 -->
				<u-waterfall ref="topicWaterFall" v-model="recommendGoodsList" marginLeft="7rpx" marginRight="7rpx">
					<template v-slot:left="{ leftList }">
						<CardGoods v-for="(item, index) in leftList" :key="index" :data="item"></CardGoods>
					</template>
					<template v-slot:right="{ rightList }">
						<CardGoods v-for="(item, index) in rightList" :key="index" :data="item"></CardGoods>
					</template>
				</u-waterfall>
			</view>
		</view>
		<!-- 精选晒单 -->
		<view class="recommendTopic ">
			<!-- 带操作的标题组件 -->
			<TitleOperate title="精选晒单"></TitleOperate>
			<view class="list">
				<!-- 瀑布流组件 -->
				<u-waterfall ref="topicWaterFall" v-model="recommendTopicList" marginLeft="7rpx" marginRight="7rpx">
					<template v-slot:left="{ leftList }">
						<PostCardSimple v-for="(item, index) in leftList" :key="index" :data="item"></PostCardSimple>
					</template>
					<template v-slot:right="{ rightList }">
						<PostCardSimple v-for="(item, index) in rightList" :key="index" :data="item"></PostCardSimple>
					</template>
				</u-waterfall>
			</view>
		</view>
	</view>
</template>

<script>
// 导入组件
import NavbarCitySearch from '@/components/navbar/navbar-city-search.vue';
import DialNav from '@/components/nav/dial-nav.vue';
import HorizontalScrollNav from '@/components/nav/horizontal-scroll-nav.vue';
import CardGoods from '@/pages/mall/components/card.vue';
import PostCardSimple from '@/pages/community/components/post-card-simple.vue';
import TitleOperate from '@/components/title-operate.vue';
// 导入假数据
import { goodsList, topicList, dialNavListHome, horizontalScrollNavList } from '@/static/test-data.js';
export default {
	components: { NavbarCitySearch, DialNav, HorizontalScrollNav, CardGoods, PostCardSimple, TitleOperate },
	data() {
		return {
			// 金刚区
			dialNavList: dialNavListHome,
			// 横向滚动列表
			horizontalScrollNavList: horizontalScrollNavList,
			// 由城市选择页面返回的选择城市数据
			nowSelectedCity: '',
			// 推荐商品列表
			recommendGoodsList: [],
			// 精选晒单列表
			recommendTopicList: []
		};
	},
	onShow() {
		// 处理是否手动选择了城市
		let nowSelectedCity = uni.getStorageSync('NOW_SELECTED_CITY');
		if (nowSelectedCity) {
			this.nowSelectedCity = nowSelectedCity;
			uni.clearStorageSync('NOW_SELECTED_CITY');
		}
		// 处理首页需要渲染的数据
		this.loadPageData(false);
	},
	methods: {
		// 首页需要渲染的数据
		loadPageData(isAll = true) {
			setTimeout(() => {
				this.getRecommendGoods();
				this.getRecommendTopic();
			}, 0);
		},

		// 加载推荐商品
		getRecommendGoods() {
			this.$nextTick(() => {
				this.recommendGoodsList = JSON.parse(JSON.stringify(goodsList));
			});
		},

		// 加载精选帖子
		getRecommendTopic() {
			this.$nextTick(() => {
				this.recommendTopicList = JSON.parse(JSON.stringify(topicList));
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 30rpx;
}
.dial-nav {
	padding: 24rpx 30rpx 30rpx 30rpx;
}
</style>
