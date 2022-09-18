<template>
	<view class="slot">
		<!--帖子卡片-->
		<PostCard v-for="(item, index) in circleList" :key="index" :data="item" :border="index != circleList.length - 1"></PostCard>
		<!--推荐关注-->
		<view class="dial-nav"><RecommendUser marginTopLine="22rpx" imgSize="84rpx" :followData="follow"></RecommendUser></view>
	</view>
</template>

<script>
import RecommendUser from '@/pages/community/components/recommend-user.vue';
import PostCard from '@/pages/community/components/post-card';
import { follow, circleList } from '@/static/test-data.js';
export default {
	components: {
		RecommendUser,
		PostCard
	},
	data() {
		return {
			// 推荐关注
			follow: follow,
			// 帖子
			circleList: circleList
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped></style>
