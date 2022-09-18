<template>
	<view class="slot">
		<scroll-view :scroll-x="true" style="white-space: nowrap;">
			<view class="list" v-for="(item, index) in list" :key="index" @click="$u.route('/pages-community/pages/community/detail')">
				<view class="inner">
					<u-image :width="imgSize" :height="imgSize" mode="widthFix" :src="item[imgName]"></u-image>
					<view class="list-text" :style="{ fontSize: nameSize }">{{ item[labelName] }}</view>
					<view class="list-num" :style="{ fontSize: nameSize }">{{ item[number] }}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
export default {
	name: 'community-hot-nav',
	props: {
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
	}
};
</script>

<style lang="scss" scoped>
.slot {
	border-radius: 16rpx;
	background-color: $app-theme-bg-color;
	overflow: hidden;

	.list {
		margin: 10rpx;
		display: inline-block;
		width: 180rpx;
	}
	.inner {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.list-text {
		padding-top: 16rpx;
		margin-bottom: 12rpx;
		font-size: 28rpx;
		color: $app-theme-text-black-color;
		text-align: center;
		width: 100%;
	}
	.list-num {
		font-size: 22rpx;
		color: $app-theme-card-gray-light-color;
		text-align: center;
		width: 100%;
	}
}
</style>
