<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="选择圈子"></Navbar>
		<!-- 全局搜索框 -->
		<Search placeholder="搜索圈子" showCancelBtn @change="searchChange"></Search>
		<!-- 圈子卡片 -->
		<view class="list">
			<CommunityCard v-for="(item, index) in classifyList" :border="classifyList.length - 1 != index" :data="item" :key="index" @click="select(item)"></CommunityCard>
			<NoData height="50vh" v-if="classifyList.length == 0"></NoData>
		</view>
	</view>
</template>

<script>
import Search from '@/components/search/search.vue';
import CommunityCard from '@/pages/community/components/community-card.vue';
export default {
	components: { Search, CommunityCard },
	data() {
		return {
			// 分类数据
			classifyList: []
		};
	},
	onLoad(options) {
		this.getClassifyList();
	},
	methods: {
		// 搜索框正在输入
		searchChange(e) {},

		// 查询分类列表
		getClassifyList() {
			this.classifyList = [
				{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music2.png', cateName: '学生党', desc: '一起来学习呀' },
				{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music1.png', cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
				{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music3.png', cateName: '音悦台', desc: '这首歌的等你来听…' }
			];
		},

		// 选择圈子
		select(item) {
			uni.setStorageSync('TEMP_SELECTED_COMMUNITY', item);
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
}
.list {
	padding: 15rpx 30rpx;
}
</style>
