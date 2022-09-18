<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="我的社区"></Navbar>
		<!-- 图标标签nav -->
		<view class="tab"><IconLabelNav ref="IconLabelNav" :ops="tabOps" @change="changeTab"></IconLabelNav></view>
		<!-- 帖子列表 -->
		<view class="post" v-if="type == 'post'"><PostCard v-for="(item, index) in circleList" :key="index" :data="item" :border="index != circleList.length - 1"></PostCard></view>
		<!-- 用户列表 -->
		<view class="user">
			<UserCardOperate v-if="type == 'follow'" :data="item" v-for="(item, index) in userList" :key="index" :border="index != userList.length - 1"></UserCardOperate>
		</view>
		<!-- 帖子列表 -->
		<view class="post" v-if="type == 'like'">
			<PostCard v-for="(item, index) in circleListByLike" :key="index" :data="item" :border="index != circleListByLike.length - 1"></PostCard>
		</view>
		<!-- 圈子列表 -->
		<view class="community" v-if="type == 'community'">
			<CommunityCard showActive v-for="(item, index) in communityList" :border="communityList.length - 1 != index" :data="item" :key="index"></CommunityCard>
		</view>
		<!-- 我的加入 -->
		<view class="community" v-if="type == 'add'">
			<CommunityCard showActive v-for="(item, index) in communityListByAdd" :border="communityListByAdd.length - 1 != index" :data="item" :key="index"></CommunityCard>
		</view>
		<!-- 无数据 -->
		<NoData
			height="50vh"
			v-if="
				(type == 'post' && circleList.length == 0) ||
					(type == 'follow' && userList.length == 0) ||
					(type == 'like' && circleListByLike.length == 0) ||
					(type == 'community' && communityList.length == 0) ||
					(type == 'add' && communityListByAdd.length == 0)
			"
		></NoData>
	</view>
</template>

<script>
import IconLabelNav from '@/components/nav/icon-label-nav.vue';
import UserCardOperate from '@/pages/mine/components/user-card-operate.vue';
import PostCard from '@/pages/community/components/post-card';
import CommunityCard from '@/pages/community/components/community-card.vue';
import { circleList, userList } from '@/static/test-data.js';
export default {
	components: {
		IconLabelNav,
		PostCard,
		CommunityCard,
		UserCardOperate
	},
	data() {
		return {
			// 配置项
			type: 'post',
			tabOps: [
				{ alias: 'post', label: '我的帖子', icon: require('@/pages-mine/static/post.png'), iconActive: require('@/pages-mine/static/post-active.png') },
				{ alias: 'follow', label: '我的关注', icon: require('@/pages-mine/static/follow.png'), iconActive: require('@/pages-mine/static/follow-active.png') },
				{ alias: 'like', label: '我的点赞', icon: require('@/pages-mine/static/like.png'), iconActive: require('@/pages-mine/static/like-active.png') },
				{ alias: 'community', label: '我的圈子', icon: require('@/pages-mine/static/community.png'), iconActive: require('@/pages-mine/static/community-active.png') },
				{ alias: 'add', label: '我的加入', icon: require('@/pages-mine/static/add.png'), iconActive: require('@/pages-mine/static/add.png') }
			],
			// 帖子数据
			circleList: circleList,
			circleListByLike: [],
			// 用户列表
			userList: userList,
			// 圈子列表
			communityList: [
				{ pics: require('@/static/community/1.png'), cateName: '学生党', desc: '一起来学习呀' },
				{ pics: require('@/static/community/2.png'), cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
				{ pics: require('@/static/community/3.png'), cateName: '音悦台', desc: '这首歌的等你来听…' }
			],
			communityListByAdd: [
				{ pics: require('@/static/community/1.png'), cateName: '学生党', desc: '一起来学习呀' },
				{ pics: require('@/static/community/2.png'), cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
				{ pics: require('@/static/community/3.png'), cateName: '音悦台', desc: '这首歌的等你来听…' }
			],
		};
	},
	onLoad(options) {
		// 初始化
		this.type = options.type;
		let currentTabIndex = 0;
		this.tabOps.map((item, index) => {
			if (item.alias == options.type) {
				currentTabIndex = index;
			}
		});
		this.$nextTick(() => {
			this.$refs.IconLabelNav.currentTab = currentTabIndex;
		});
		// 假数据
		if (options.type == 'like') {
			this.getLikePost();
		}
	},
	methods: {
		// 切换tab
		changeTab(e) {
			this.type = e.item.alias;
			// 假数据
			if (e.item.alias == 'like') {
				this.getLikePost();
			}
		},
		// 我得点赞
		getLikePost() {
			let arr = JSON.parse(JSON.stringify(this.circleList));
			this.circleListByLike = [];
			arr.map(item => {
				if (item.isLike == 1) {
					this.circleListByLike.push(item);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.tab {
	margin-bottom: 24rpx;
}
.user {
	padding: 0 30rpx;
	background-color: $app-theme-bg-color;
}
.community {
	padding: 0 30rpx;
	background-color: $app-theme-bg-color;
}
</style>
