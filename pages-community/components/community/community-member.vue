<template>
	<view class="slot">
		<TitleOperate title="圈子成员">
			<view class="member-title-slot" @click="$u.route('/pages-community/pages/community/info', { type: 1 })">
				<text>3人已加入</text>
				<u-icon size="22" name="arrow-right" :color="appThemeCardGrayDeepColor"></u-icon>
			</view>
		</TitleOperate>
		<view class="member-content">
			<scroll-view class="scroll" scroll-x="true">
				<view class="member" v-for="(item, index) in list" :key="index">
					<view class="avatar"><u-avatar size="100" src="../../../static/user/1.png"></u-avatar></view>
					<text>{{ item.username }}</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import TitleOperate from '@/components/title-operate.vue';
export default {
	components: { TitleOperate },
	props: {
		list: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {
			appThemeCardGrayDeepColor: this.$appTheme.appThemeCardGrayDeepColor
		};
	}
};
</script>

<style lang="scss" scoped>
.slot {
	z-index: $app-zIndex-normal;
	position: relative;
	background-color: $app-theme-bg-color;
}
.member-title-slot {
	text {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $app-theme-card-gray-deep-color;
		margin-right: 8rpx;
	}
}
.member-content {
	padding: 28rpx 0 30rpx 0;
	box-sizing: border-box;
	.scroll {
		width: 100%;
		white-space: nowrap;
	}
	.member {
		margin: 0 30rpx;
		display: inline-block;
		width: 100rpx;
		.avatar {
			width: 100%;
		}
		text {
			padding-top: 14rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			width: 100%;
			display: block;
			text-align: center;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-black-deep-color;
		}
	}
}
</style>
