<template>
	<view class="page">
		<!-- 带背景的透明导航栏 -->
		<NavbarRoundImg title="我的主页" isBack :bgImg="bgImg" :backgroundColor="backgroundColor"></NavbarRoundImg>
		<!-- 信息 -->
		<view class="info">
			<view class="avatar"><u-avatar size="132" src="../../../static/user/1.png"></u-avatar></view>
			<view class="name">一只小雯子</view>
			<view class="num">
				<view class="follow">
					<text>20</text>
					<text>关注</text>
				</view>
				<view class="fans">
					<text>30</text>
					<text>粉丝</text>
				</view>
			</view>
			<view class="desc">这个人很懒,没留下什么</view>
			<view class="operate">
				<u-button type="primary" size="small" shape="circle">
					<u-icon name="plus"></u-icon>
					<text>关注</text>
				</u-button>
			</view>
		</view>
		<!-- tab -->
		<view class="tabs"><Tabs itemWidth="200" :listData="tabsOps" fontSize="34" @change="tabsChange"></Tabs></view>
		<!-- 主页 -->
		<view class="item" v-if="currentTab == 0">
			<view class="card">
				<TitleOperate title="基本信息" padding="0"></TitleOperate>
				<view class="line">性别：女</view>
				<view class="line">地区：慕尼黑</view>
				<view class="line">个人简介：这个人很懒,没留下什么</view>
			</view>
			<view class="card" style="padding-bottom: 0;">
				<TitleOperate title="创建的圈子" padding="0"></TitleOperate>
				<CommunityCard showActive v-for="(item, index) in communityList" :border="communityList.length - 1 != index" :data="item" :key="index"></CommunityCard>
			</view>
		</view>
		<view class="item" v-if="currentTab == 1">
			<!--帖子卡片-->
			<view class="card" style="padding: 0;">
				<PostCard smallCard v-for="(item, index) in circleList" :key="index" :data="item" :border="index != circleList.length - 1"></PostCard>
			</view>
		</view>
		<view class="item" v-if="currentTab == 2">
			<!-- 圈子卡片 -->
			<view class="card" style="padding: 12rpx 30rpx;">
				<CommunityCard showActive v-for="(item, index) in communityList" :border="communityList.length - 1 != index" :data="item" :key="index"></CommunityCard>
			</view>
		</view>
	</view>
</template>

<script>
import Tabs from '@/components/tabs.vue';
import NavbarRoundImg from '@/components/navbar/navbar-round-img.vue';
import TitleOperate from '@/components/title-operate.vue';
import CommunityCard from '@/pages/community/components/community-card.vue';
import PostCard from '@/pages/community/components/post-card';
import { circleList } from '@/static/test-data.js';
export default {
	components: {
		Tabs,
		NavbarRoundImg,
		TitleOperate,
		CommunityCard,
		PostCard
	},
	data() {
		return {
			bgImg: require('@/pages-mine/static/user-bg.png'),
			backgroundColor: 'rgba(0,0,0,0)',
			// tabs
			currentTab: 0,
			tabsOps: [{ text: '主页' }, { text: '帖子' }, { text: '圈子' }],
			// 圈子列表
			communityList: [
				{ pics: require('@/static/community/1.png'), cateName: '学生党', desc: '一起来学习呀' },
				{ pics: require('@/static/community/2.png'), cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
				{ pics: require('@/static/community/3.png'), cateName: '音悦台', desc: '这首歌的等你来听…' }
			],
			// 帖子列表
			circleList: circleList
		};
	},
	onPageScroll(e) {
		if (e.scrollTop > 10) {
			this.backgroundColor = '';
		} else {
			this.backgroundColor = 'rgba(0,0,0,0)';
		}
	},
	methods: {
		// 切换 tab 回调
		tabsChange(e) {
			this.currentTab = e;
		}
	}
};
</script>

<style lang="scss" scoped>
.info {
	position: relative;
	background-color: $app-theme-bg-color;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 180rpx 30rpx 30rpx 30rpx;
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	.avatar {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 6rpx solid $app-theme-bg-color;
		border-radius: 50%;
		overflow: hidden;
	}
	.name {
		padding-top: 100rpx;
		font-size: 40rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: $app-theme-text-black-color;
		width: 100%;
		text-align: center;
	}
	.num {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 20rpx;
		.follow,
		.fans {
			text:nth-child(1) {
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-black-color;
				margin-right: 4rpx;
			}
			text:nth-child(2) {
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-card-gray-deep-color;
			}
		}
		.follow {
			margin-right: 60rpx;
		}
	}
	.desc {
		padding-top: 20rpx;
		width: 100%;
		text-align: center;
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-card-gray-deep-color;
	}
	.operate {
		padding: 40rpx 0;
	}
}

.tabs {
	display: flex;
	align-items: center;
	justify-content: center;
}

.item {
	padding: 30rpx;
}

.card {
	margin-bottom: 30rpx;
	padding: 30rpx;
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	background-color: $app-theme-bg-color;
	overflow: hidden;
	.line {
		margin-top: 26rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-navbar-tab-color;
	}
}
</style>
