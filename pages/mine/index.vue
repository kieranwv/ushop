<template>
	<view class="page">
		<!-- 带背景的透明导航栏 -->
		<NavbarRoundImg title="我的"></NavbarRoundImg>
		<!-- 用户 -->
		<UserInfo :data="userInfo" :isLogin="isLogin"></UserInfo>
		<!-- 用户数据 -->
		<view class="user-count"><LabelCount :ops="mineCountOps"></LabelCount></view>
		<!-- 我的订单 -->
		<view class="order-nav">
			<DialNav :mode="4" shadow :list="orderNavOps" nameSize="24rpx" imgSize="72rpx">
				<TitleOperate
					padding="30rpx 30rpx 0 30rpx"
					showMore
					title="我的订单"
					moreLabel="全部订单"
					@clickMore="$u.route({ url: '/pages-mall/pages/order/list' })"
				></TitleOperate>
			</DialNav>
		</view>
		<!-- 我的社区 -->
		<view class="community-nav">
			<DialNav :mode="4" shadow :list="communityNavOps" nameSize="24rpx" imgSize="72rpx">
				<TitleOperate padding="30rpx 30rpx 0 30rpx" title="我的社区"></TitleOperate>
			</DialNav>
		</view>
		<!-- 其他功能 -->
		<view class="other-nav">
			<DialNav marginTopLine="28rpx" :mode="8" shadow :list="otherNavOps" nameSize="24rpx" imgSize="40rpx">
				<TitleOperate padding="30rpx 30rpx 0 30rpx" title="我的社区"></TitleOperate>
			</DialNav>
		</view>
	</view>
</template>

<script>
import NavbarRoundImg from '@/components/navbar/navbar-round-img.vue';
import UserInfo from '@/pages/mine/components/user-info.vue';
import LabelCount from '@/components/nav/label-count.vue';
import DialNav from '@/components/nav/dial-nav.vue';
import TitleOperate from '@/components/title-operate.vue';
export default {
	components: {
		NavbarRoundImg,
		UserInfo,
		LabelCount,
		DialNav,
		TitleOperate
	},
	data() {
		return {
			isLogin:false,
			// 用户信息
			userInfo: {
				nickName: '演示用户（静态）',
				desc: ''
			},
			// 用户数据
			mineCountOps: [
				{
					label: '积分',
					count: 24,
					url: '/pages-points/pages/index'
				},
				{
					label: '粉丝',
					count: 15,
					url: '/pages-mine/pages/fans'
				},
				{
					label: '关注',
					count: 8,
					url: '/pages-mine/pages/follow'
				},
				{
					label: '消息',
					count: 10,
					url: '/pages-mine/pages/message'
				}
			],
			// 订单导航配置
			orderNavOps: [
				{ name: '待付款', img: require('../../static/nav/mine-order-2.png'), url: '/pages-mall/pages/order/list?tabIndex=1' },
				{ name: '待发货', img: require('../../static/nav/mine-order-2.png'), url: '/pages-mall/pages/order/list?tabIndex=2' },
				{ name: '待收货', img: require('../../static/nav/mine-order-3.png'), url: '/pages-mall/pages/order/list?tabIndex=3' },
				{ name: '退款售后', img: require('../../static/nav/mine-order-4.png'), url: '/pages-mall/pages/order/list?tabIndex=5' }
			],
			//社区导航配置
			communityNavOps: [
				{ name: '我的圈子', img: require('../../static/nav/mine-community-1.png'), url: '/pages-mine/pages/community?type=community' },
				{ name: '我的帖子', img: require('../../static/nav/mine-community-2.png'), url: '/pages-mine/pages/community?type=post' },
				{ name: '我的关注', img: require('../../static/nav/mine-community-3.png'), url: '/pages-mine/pages/community?type=follow' },
				{ name: '我的点赞', img: require('../../static/nav/mine-community-4.png'), url: '/pages-mine/pages/community?type=like' }
			],
			// 其他导航配置
			otherNavOps: [
				{ name: '使用帮助', img: require('../../static/nav/mine-setting-1.png'), url: '' },
				{ name: '客服电话', img: require('../../static/nav/mine-setting-2.png'), url: '' },
				{ name: '关于我们', img: require('../../static/nav/mine-setting-3.png'), url: '' },
				{ name: '地址管理', img: require('../../static/nav/mine-setting-4.png'), url: '/pages-mine/pages/address/list' },
				{ name: '我的优惠券', img: require('../../static/nav/mine-setting-5.png'), url: '/pages-mine/pages/discounts' },
				{ name: '我的收藏', img: require('../../static/nav/mine-setting-6.png'), url: '/pages-mine/pages/collection' },
				{ name: '设置', img: require('../../static/nav/mine-setting-7.png'), url: '' }
			]
		};
	},
	onShow() {
		this.isLogin = uni.getStorageSync('IS_LOGIN');
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.page {
}
.user-count,
.order-nav,
.community-nav,
.other-nav {
	position: relative;
	z-index: $app-zIndex-normal;
	padding: 0 30rpx 30rpx 30rpx;
}
</style>
