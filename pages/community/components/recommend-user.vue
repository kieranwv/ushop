<template>
	<view class="slot" :class="{ shadow }">
		<!--关注-->
		<view class="nav-navigation">
			<TitleOperate
				title="你可能感兴趣的人"
				showMore
				v-if="followData.length >= 1"
				moreLabel="全部"
				titleSize="28rpx"
				:titleColor="$appTheme.appThemeCardGrayDeepColor"
				@clickMore="goDiscoverUser"
			></TitleOperate>
			<view class="nav-list">
				<view class="nav-item" style="width: 25%;" v-for="(item, index) in followData" :key="index">
					<view class="list-img">
						<u-image :width="imgSize" :height="imgSize" mode="widthFix" :src="item[imgName]"></u-image>
						<view class="list-text" :style="{ fontSize: nameSize }">{{ item[labelName] }}</view>
						<view class="list_num follow" :style="{ fontSize: nameSize }">关注</view>
					</view>
				</view>
			</view>
			<view class="operate"><u-button size="small" shape="circle" plain>换一批</u-button></view>
		</view>
	</view>
</template>

<script>
import TitleOperate from '@/components/title-operate.vue';
export default {
	name: 'conmmuity-nav',
	components: {
		TitleOperate
	},
	props: {
		// 显示模式
		mode: {
			type: Number,
			default: 8
		},
		// 图片的别名
		imgName: {
			type: String,
			default: 'img'
		},
		// 名称的别名
		labelName: {
			type: String,
			default: 'name'
		},
		// 跳转路径的别名
		urlName: {
			type: String,
			default: 'url'
		},
		// 圈子数量别名
		number: {
			type: String,
			default: 'num'
		},
		// 配置项
		list: {
			type: Array,
			default: () => {
				return [];
			}
		},
		// 配置项
		followData: {
			type: Array,
			default: () => {
				return [];
			}
		},
		// 是否显示阴影
		shadow: {
			type: Boolean,
			default: false
		},
		// 图标大小
		imgSize: {
			type: String,
			default: '84rpx'
		},
		// 名称的大小
		nameSize: {
			type: String,
			default: '28rpx'
		}
	},
	methods: {
		goDiscoverUser() {
			uni.navigateTo({
				url: '/pages-mine/pages/discover'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	border-radius: 16rpx;
	background-color: $app-theme-bg-color;
	overflow: hidden;
	margin-top: 24rpx;
	padding-bottom: 24rpx;
	&.shadow {
		box-shadow: $app-theme-shadow;
	}
	.replace-follow {
		width: 180rpx;
		text-align: center;
		border-radius: 32rpx;
		border: 2rpx solid $app-theme-text-black-color;
		background: $app-theme-bg-color;
		font-size: 28rpx;
		font-weight: 400;
		color: $app-theme-text-black-color;
		padding: 12rpx 42rpx;
		margin: 20rpx auto 0;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.dataInfo {
		width: 100%;
		display: flex;
	}

	.dataList {
		margin: 10rpx;
	}

	.dataList:first-child {
		margin-left: 0;
	}

	.list {
		display: inline-block;
		width: 180rpx;
	}
	.list-img {
		width: 100%;
		text-align: -webkit-center;
		margin-bottom: 16rpx;
	}
	.nav-navigation {
		width: 100%;

		.nav-list {
			display: flex;
			// flex-wrap: wrap;
			justify-content: flex-start;

			.nav-item {
				display: flex;
				// flex-wrap: wrap;
				justify-content: center;
				align-items: center;

				.list-img {
					width: 100%;
					text-align: -webkit-center;
					margin-bottom: 16rpx;
				}

				.list-text {
					font-size: 28rpx;
					text-align: center;
					font-weight: 400;
					color: $app-theme-text-black-color;
					margin-top: 16rpx;
					margin-bottom: 28rpx;
				}
				.list_num {
					text-align: center;
					font-weight: 400;
					margin-top: 12rpx;
					font-weight: 400;
					font-size: 22rpx;
					color: $app-theme-text-gray-color;
				}
				.follow {
					border-radius: 999rpx;
					border: 1px solid $app-theme-color;
					font-size: 28rpx;
					font-weight: 400;
					color: $app-theme-color;
					padding: 8rpx 42rpx;
					width: 140rpx;
				}
			}
		}
	}
}
.operate {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 24rpx;
}
</style>
