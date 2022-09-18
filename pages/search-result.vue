<template>
	<view class="page">
		<!-- 带搜索框的navbar -->
		<NavbarSearch ref="NavbarSearch" :tabOps="['内容', '商品', '圈子']" v-model="searchKeyWord" @change="tabChange"></NavbarSearch>
		<!-- 帖子列表 -->
		<view class="postList" v-if="currentTab == '0'">
			<!-- 瀑布流组件 -->
			<u-waterfall ref="topicWaterFall" v-model="postList" marginLeft="7rpx" marginRight="7rpx">
				<template v-slot:left="{ leftList }">
					<PostCardSimple v-for="(item, index) in leftList" :key="index" :data="item"></PostCardSimple>
				</template>
				<template v-slot:right="{ rightList }">
					<PostCardSimple v-for="(item, index) in rightList" :key="index" :data="item"></PostCardSimple>
				</template>
			</u-waterfall>
		</view>
		<!-- 商品列表 -->
		<view class="goodsList" v-if="currentTab == '1'">
			<!-- 瀑布流组件 -->
			<u-waterfall ref="topicWaterFall" v-model="goodsList" marginLeft="7rpx" marginRight="7rpx">
				<template v-slot:left="{ leftList }">
					<CardGoods v-for="(item, index) in leftList" :key="index" :data="item"></CardGoods>
				</template>
				<template v-slot:right="{ rightList }">
					<CardGoods v-for="(item, index) in rightList" :key="index" :data="item"></CardGoods>
				</template>
			</u-waterfall>
		</view>
		<!-- 圈子列表 -->
		<view class="community" v-if="currentTab == '2'">
			<CommunityCard v-for="(item, index) in communityList" :border="communityList.length - 1 != index" :data="item" :key="index"></CommunityCard>
		</view>
		<!-- 无数据 -->
		<NoData
			height="50vh"
			v-if="(currentTab == '0' && circleList.length == 0) || (currentTab == '1' && goodsList.length == 0) || (currentTab == '2' && communityList.length == 0)"
		></NoData>
	</view>
</template>

<script>
import NavbarSearch from '@/components/navbar/navbar-search.vue';
import CommunityCard from '@/pages/community/components/community-card.vue';
import PostCardSimple from '@/pages/community/components/post-card-simple.vue';
import CardGoods from '@/pages/mall/components/card.vue';
import { circleList, goodsList, topicList } from '@/static/test-data.js';
export default {
	components: { NavbarSearch, PostCardSimple, CommunityCard, CardGoods },
	data() {
		return {
			searchKeyWord: '',
			currentTab: 0,
			// 帖子数据
			circleList: circleList,
			// 圈子列表
			communityList: [
				{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music2.png', cateName: '学生党', desc: '一起来学习呀' },
				{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music1.png', cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
				{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music3.png', cateName: '音悦台', desc: '这首歌的等你来听…' }
			],
			// 商品列表
			goodsList: [],
			// 帖子列表
			postList: []
		};
	},
	onShow() {
		this.searchKeyWord = uni.getStorageSync('TEMP_SEARCH_KEYWORD');
		this.getGoodsList();
		this.getPostList();
	},
	methods: {
		tabChange(e) {
			this.currentTab = e;
		},

		// 查询商品
		getGoodsList() {
			this.$nextTick(() => {
				this.goodsList = JSON.parse(JSON.stringify(goodsList));
			});
		},

		// 查询帖子
		getPostList() {
			this.$nextTick(() => {
				this.postList = JSON.parse(JSON.stringify(topicList));
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.postList {
	padding: 30rpx;
}
.goodsList {
	padding: 30rpx;
}
.community {
	padding: 0 30rpx;
	background-color: $app-theme-bg-color;
}
</style>
