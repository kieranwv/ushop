<template>
	<view class="slot" @click="goPostDetail()" :class="{ border }">
		<!-- 用户 -->
		<CommuntiyAvatar :data="data" @more="more"></CommuntiyAvatar>
		<!--内容-->
		<view class="main-text">{{ data.text }}</view>
		<!---->
		<view class="imglist">
			<view v-for="(val, x) in data.ImageList" :key="x">
				<u-image v-if="smallCard" width="180rpx" height="180rpx" :src="val"><view slot="error" style="font-size: 24rpx;">加载失败</view></u-image>
				<u-image v-if="!smallCard" width="216rpx" height="216rpx" :src="val"><view slot="error" style="font-size: 24rpx;">加载失败</view></u-image>
			</view>
		</view>
		<!--商品区-->
		<view class="shopp"><CommunityGoods :data="data.content" v-if="data.content"></CommunityGoods></view>
		<!--位置 点赞 评论-->
		<view class="seting">
			<CommunityTag></CommunityTag>
			<view class="seting-text">
				<u-icon name="eye" size="32rpx" :color="iconColor"></u-icon>
				<view class="seTnum">{{ 98 }}</view>
			</view>
			<view class="seting-text">
				<u-icon name="chat" size="32rpx" :color="iconColor"></u-icon>
				<view class="seTnum">{{ 12 }}</view>
			</view>
			<view class="seting-text">
				<u-icon name="thumb-up" size="32rpx" :color="data.isLike == 1 ? appThemeColor : iconColor"></u-icon>
				<view class="seTnum">{{ 1 }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import CommunityGoods from '@/pages/community/components/community-goods';
import CommuntiyAvatar from '@/pages/community/components/community-avatar';
import CommunityTag from '@/pages/community/components/community-tag';
import AddPopup from '@/components/add-popup';
export default {
	name: 'community-card',
	components: { CommunityGoods, CommuntiyAvatar, CommunityTag, AddPopup },
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		border: {
			type: Boolean,
			default: false
		},
		smallCard: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			iconColor: this.$appTheme.appThemeTextGrayColor,
			appThemeColor: this.$appTheme.appThemeColor
		};
	},
	methods: {
		// 详情
		goPostDetail() {
			uni.navigateTo({
				url: '/pages-community/pages/post/detail'
			});
		},

		// 更多
		more() {
			uni.showActionSheet({
				itemList: ['置顶', '关注', '删除'],
				success(res) {
					if (res.tapIndex == 0) {
					} else if (res.tapIndex == 1) {
					} else if (res.tapIndex == 2) {
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	padding: 30rpx;
	background-color: $app-theme-bg-color;
	&.border {
		border-bottom: 1rpx solid $app-theme-border-color;
	}
}
.main-text {
	font-size: 28rpx;
	font-weight: 400;
	color: $app-theme-text-black-color;
	line-height: 40px;
}
.imglist {
	display: flex;
	justify-content: space-between;
}
//购物
.shopp {
	margin-top: 24rpx;
}
//设置 评论点赞
.seting-text {
	display: flex;
	align-items: center;
	background-color: none;
	&.shadow {
		background-color: $app-theme-bg-gray-deep-color;
		padding: 10rpx 16rpx;
		border-radius: 6rpx;
		view {
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-black-color;
		}
	}
}
.seting {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 36rpx 0 0 0;
}
.seTnum {
	font-size: 24rpx;
	color: $app-theme-shop-gray-color;
	line-height: 28rpx;
	margin-left: 4rpx;
}
</style>
