<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<NavbarRoundImg
			:titleColor="titleColor"
			:backIconColor="backIconColor"
			height="420rpx"
			isBack
			title="圈子主页"
			:bgImg="bgImg"
			:backgroundColor="backgroundColor"
		></NavbarRoundImg>
		<view class="shadow">
			<!-- 圈子头部 -->
			<CommunityHeader :title="communityTitle" @share="share" @add="showAddCommunity = true"></CommunityHeader>
			<!-- 圈子简介 -->
			<CommunitySubDesc></CommunitySubDesc>
			<!-- 圈子成员 -->
			<CommunityMember :list="memberList"></CommunityMember>
		</view>
		<!-- 列表 -->
		<view class="post-list">
			<Tabs :backgroundColor="bgColor" padding="0" :listData="scrollData" :activeBarColor="appThemeTextBlackColor"></Tabs>
			<!--帖子卡片-->
			<PostCard v-for="(item, index) in circleList" :key="index" :data="item" :border="index != circleList.length - 1"></PostCard>
		</view>
		<!-- 加入圈子弹窗 -->
		<u-modal confirm-text="加入圈子" :confirm-color="appThemeColor" show-cancel-button v-model="showAddCommunity" :content="'是否加入“' + communityTitle + '”？'"></u-modal>
		<!-- 添加按钮 -->
		<AddBtnFixed @click="add"></AddBtnFixed>
		<!-- 新增弹窗 -->
		<AddPopup ref="addPopup" @close="closeAddPopup" :ops="addOps"></AddPopup>
		<!-- 分享弹窗 -->
		<AddPopup ref="sharePopup" @close="closeSharePopup" :ops="shareOps"></AddPopup>
	</view>
</template>

<script>
import NavbarRoundImg from '@/components/navbar/navbar-round-img.vue';
import CommunityHeader from '@/pages-community/components/community/community-header.vue';
import CommunitySubDesc from '@/pages-community/components/community/community-sub-desc.vue';
import CommunityMember from '@/pages-community/components/community/community-member.vue';
import Tabs from '@/components/tabs.vue';
import PostCard from '@/pages/community/components/post-card';
import AddBtnFixed from '@/components/add-btn-fixed.vue';
import AddPopup from '@/components/add-popup';
import { circleList } from '@/static/test-data.js';
export default {
	components: { NavbarRoundImg, CommunityHeader, AddPopup, CommunityMember, CommunitySubDesc, Tabs, PostCard, AddBtnFixed },
	data() {
		return {
			bgImg: require('@/pages-community/static/bg.png'),
			communityTitle: '好听的音乐',
			showAddCommunity: false,
			// 颜色配置
			backgroundColor: 'rgba(0,0,0,0)',
			appThemeColor: this.$appTheme.appThemeColor,
			bgColor: this.$appTheme.appThemeBgColor,
			titleColor: this.$appTheme.appThemeTextWhiteColor,
			backIconColor: this.$appTheme.appThemeTextWhiteColor,
			appThemeTextWhiteColor: this.$appTheme.appThemeTextWhiteColor,
			appThemeTextBlackColor: this.$appTheme.appThemeTextBlackColor,
			// 新增弹窗配置
			addOps: [
				{ label: '发布帖子', icon: require('../../../static/operate/publish-post.png'), url: '/pages-community/pages/post/add', type: 'page' },
				{
					label: '编辑圈子',
					icon: require('../../../static/operate/edit-community.png'),
					url: '/pages-community/pages/community/add-or-update?type=update',
					type: 'page'
				},
				{ label: '解散圈子', icon: require('../../../static/operate/remove-community.png'), url: '', type: 'remove' }
			],
			// 分享弹窗配置
			shareOps: [
				{ label: '发给微信好友', icon: require('../../../static/operate/wechat-share.png'), url: '', type: 'share' },
				{ label: '复制链接', icon: require('../../../static/operate/copy-url.png'), url: '', type: 'copy' }
			],
			// 会员列表
			memberList: [
				{ username: '一只小雯子' },
				{ username: '一只小雯子' },
				{ username: '一只小雯子' },
				{ username: '一只小雯子' },
				{ username: '一只小雯子' },
				{ username: '一只小雯子' },
				{ username: '一只小雯子' }
			],
			// TAB
			scrollData: [{ text: '最新' }, { text: '热门' }],
			// 帖子数据
			circleList: circleList
		};
	},
	onPageScroll(e) {
		if (e.scrollTop > 10) {
			this.backgroundColor = '#fff';
			this.titleColor = this.appThemeTextBlackColor;
			this.backIconColor = this.appThemeTextBlackColor;
		} else {
			this.backgroundColor = 'rgba(0,0,0,0)';
			this.titleColor = this.appThemeTextWhiteColor;
			this.backIconColor = this.appThemeTextWhiteColor;
		}
	},
	methods: {
		// 点击更多
		share() {
			this.$refs.sharePopup.open();
		},

		// 关闭
		closeSharePopup() {},

		// 添加
		add() {
			this.$refs.addPopup.open();
		},

		// 关闭
		closeAddPopup() {}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
}
.shadow {
	box-shadow: 0px 5px 15px 0px rgba(27, 25, 86, 0.06);
	background-color: $app-theme-bg-color;
}
.post-list {
	background-color: $app-theme-bg-color;
	margin-top: 44rpx;
	z-index: $app-zIndex-normal;
	position: relative;
}
</style>
