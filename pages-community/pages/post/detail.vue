<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="帖子详情"></Navbar>
		<view class="inner">
			<!-- 用户 -->
			<CommuntiyAvatar @report="report" :data="detailData" operateType="report"></CommuntiyAvatar>
			<!-- 商品标题 -->
			<view class="title">{{ detailData.text }}</view>
			<!-- 商品图片 -->
			<ImgSwiper :list="detailData.ImageList"></ImgSwiper>
			<!-- 提到的商品 -->
			<view class="is-goods">提到的商品：</view>
			<!-- 测试用，正式时需要v-for循环 -->
			<CommunityGoods :data="detailData.content"></CommunityGoods>
			<CommunityGoods :data="detailData.content"></CommunityGoods>
			<!-- 操作 -->
			<view class="operate">
				<!-- 圈子 -->
				<CommunityTag></CommunityTag>
				<!-- 喜欢 -->
				<LikeUnLikeBtn></LikeUnLikeBtn>
			</view>
		</view>
		<!-- 评论区 -->
		<TitleOperate :title="'评论（' + 5 + '）'" titleSize="32rpx"></TitleOperate>
		<view class="evaluate-list">
			<PostEvaluateCard @report="report" :border="evaluateList.length - 1 != index" v-for="(item, index) in evaluateList" :key="index" :data="item"></PostEvaluateCard>
		</view>
		<!-- 操作 -->
		<view class="fixed-btn">
			<view class="evaluate"><u-input placeholder="这一刻的想法"></u-input></view>
			<view class="goods" @click="openRecommendGoods">相关商品</view>
		</view>
		<!-- 举报 -->
		<SelectReason ref="SelectReason" title="举报" :ops="reasonOps"></SelectReason>
		<!-- 相关商品 -->
		<PostRecommendGoods ref="PostRecommendGoods"></PostRecommendGoods>
	</view>
</template>

<script>
const app = getApp();
import CommunityGoods from '@/pages/community/components/community-goods';
import CommunityTag from '@/pages/community/components/community-tag';
import CommuntiyAvatar from '@/pages/community/components/community-avatar';
import LikeUnLikeBtn from '@/pages-community/components/like-unlike-btn.vue';
import PostEvaluateCard from '@/pages-community/components/post/post-evaluate-card.vue';
import PostRecommendGoods from '@/pages-community/components/post/post-recommend-goods.vue';
import ImgSwiper from '@/components/img-swiper.vue';
import TitleOperate from '@/components/title-operate.vue';
import SelectReason from '@/components/select-reason.vue';
import { circleList } from '@/static/test-data.js';
export default {
	components: { CommuntiyAvatar, ImgSwiper, CommunityGoods, CommunityTag, LikeUnLikeBtn, TitleOperate, PostEvaluateCard, SelectReason, PostRecommendGoods },
	data() {
		return {
			// 底部安全高度
			safeAreaHeight: app.globalData.safeAreaHeight,
			// 详情内容
			detailData: circleList[0],
			// 评价数据
			evaluateList: [
				{
					username: '飒爽',
					thumbNum: 12,
					content: '你所看见的这个世界,那只是你的世界,并不是别人的世界,都是由你的思维、能力环境不同,所看见的自然不同',
					createDate: '2019-02-12'
				},
				{
					username: '李大大',
					thumbNum: 12,
					content: '网络上为什么有那么多喷子,自己不努力,楼层低,见识短,能力不足,思想狭隘,以别人的生活和他们一样',
					createDate: '2019-02-12',
					replyList: [{ username: '李大大', createDate: '2019-02-12', content: '百年华诞党领航 祖国强盛民安康' }]
				}
			],
			// 举报原因
			currentReasonIndex: 0,
			reasonOps: [
				{ label: '广告骚扰', value: '0' },
				{ label: '色情低俗', value: '1' },
				{ label: '政治宗教', value: '2' },
				{ label: '虚假欺骗', value: '3' },
				{ label: '侵权(肖像、诽谤、抄袭、冒用)', value: '4' },
				{ label: '其他', value: '5' }
			]
		};
	},
	methods: {
		// 举报
		report() {
			this.$refs.SelectReason.open(this.currentReasonIndex);
		},

		// 相关商品
		openRecommendGoods() {
			this.$refs.PostRecommendGoods.open();
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
	padding-bottom: 100rpx;
}
.inner {
	padding: 30rpx;
	border-bottom: 1px solid $app-theme-border-color;
}
.title {
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: $app-theme-text-black-color;
	margin-bottom: 24rpx;
}
.is-goods {
	margin-top: 24rpx;
	margin-bottom: 16rpx;
	font-size: 24rpx;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: $app-theme-text-black-color;
}
.operate {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 8rpx;
}
.fixed-btn {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 199;
	width: 100%;
	padding: 10rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $app-theme-bg-color;
	border-top: 1px solid $app-theme-border-color;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	.evaluate {
		width: 480rpx;
		height: 76rpx;
		background: $app-theme-bg-gray-color;
		padding-left: 24rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	.goods {
		padding: 0rpx 32rpx;
		height: 76rpx;
		line-height: 76rpx;
		background: $app-theme-color;
		font-size: 28rpx;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: $app-theme-text-white-color;
	}
}
.evaluate-list {
	padding: 30rpx;
}
</style>
