<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="晒单精选"></Navbar>
		<!-- 帖子列表 -->
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
		<!-- 添加按钮 -->
		<AddBtnFixed @click="add"></AddBtnFixed>
	</view>
</template>

<script>
import PostCardSimple from '@/pages/community/components/post-card-simple.vue';
import AddBtnFixed from '@/components/add-btn-fixed.vue';
// 导入假数据
import { topicList } from '@/static/test-data.js';
export default {
	components: { PostCardSimple, AddBtnFixed },
	data() {
		return {
			// 精选晒单列表
			recommendTopicList: []
		};
	},
	onShow() {
		this.getRecommendTopic();
	},
	methods: {
		// 加载精选帖子
		getRecommendTopic() {
			this.$nextTick(() => {
				this.recommendTopicList = JSON.parse(JSON.stringify(topicList));
			});
		},
		// 添加
		add() {
			uni.navigateTo({
				url: '/pages-community/pages/post/add?showGoodsSelect=false'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	padding: 30rpx;
}
</style>
