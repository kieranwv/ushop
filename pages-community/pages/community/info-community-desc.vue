<template>
	<view class="page">
		<!-- 信息 -->
		<view class="community">
			<u-image src="../../../static/community/4.png" width="124rpx" height="124rpx" mode="widthFix"></u-image>
			<view class="info">
				<view class="title">好听的音乐</view>
				<view class="num">
					<text>24</text>
					<text>动态</text>
					<text>12</text>
					<text>成员</text>
				</view>
			</view>
		</view>
		<!-- 描述 -->
		<view class="desc">
			<TitleOperate title="圈子描述"></TitleOperate>
			<view class="inner"><u-input auto-height type="textarea" v-model="content"></u-input></view>
		</view>
	</view>
</template>

<script>
import TitleOperate from '@/components/title-operate.vue';
export default {
	components: { TitleOperate },
	props: {},
	data() {
		return {
			content: '听音乐可以让人变得很聪明,如果听歌的话人的智商和创造力会发生改变'
		};
	}
};
</script>

<style lang="scss" scoped>
.page {
	.community {
		margin-bottom: 24rpx;
		padding: 30rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background-color: $app-theme-bg-color;
		.info {
			margin-left: 24rpx;
			.title {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-black-color;
				margin-bottom: 24rpx;
			}
			.num {
				text:nth-child(1),
				text:nth-child(3) {
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $app-theme-text-gray-color;
					margin-right: 8rpx;
				}
				text:nth-child(2),
				text:nth-child(4) {
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $app-theme-text-gray-color;
					margin-right: 24rpx;
				}
			}
		}
	}
}
.desc {
	background-color: $app-theme-bg-color;
	.inner {
		padding: 0 30rpx 30rpx 30rpx;
	}
}
</style>
