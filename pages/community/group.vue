<template>
	<view class="slot">
		<!--热门圈子-->
		<TitleOperate v-if="showSearch" title="热门圈子" showMore></TitleOperate>
		<view class="hot-nav"><communityHotNav :list="dialNavList" imgSize="124rpx"></communityHotNav></view>
		<!---滑动tab-->
		<Tabs :listData="scrollData"></Tabs>
		<!--帖子卡片-->
		<PostCard v-for="(item, index) in circleList" :key="index" :data="item" :border="index != circleList.length - 1"></PostCard>
	</view>
</template>

<script>
import communityHotNav from '@/pages/community/components/community-hot-nav.vue';
import Tabs from '@/components/tabs.vue';
import TitleOperate from '@/components/title-operate.vue';
import PostCard from '@/pages/community/components/post-card';
import { dialNavListconmmunity, scrollcommunity, circleList } from '@/static/test-data.js';
export default {
	components: {
		TitleOperate,
		communityHotNav,
		Tabs,
		PostCard
	},
	data() {
		return {
			// 金刚区
			dialNavList: dialNavListconmmunity,
			// 横向滚动
			scrollData: scrollcommunity,
			// 圈子用户
			circleList: circleList
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.hot-nav {
	padding: 0rpx 0rpx 30rpx 0rpx;
	background-color: $app-theme-bg-color;
}
</style>
