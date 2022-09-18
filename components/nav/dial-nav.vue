<template>
	<view class="slot" :class="{ shadow }">
		<view class="nav-navigation">
			<!-- 此处插槽用于扩展是否显示标题等 -->
			<slot></slot>
			<view class="nav-list" v-if="mode == 8 || mode == 4">
				<view
					class="nav-item"
					style="width: 25%;"
					:style="[{ marginTop: index > 3 ? marginTopLine : '' }]"
					v-for="(item, index) in list"
					:key="index"
					@click="$u.route({url:item.url, params:item.params})"
				>
					<view class="list-img"><u-image :width="imgSize" :height="imgSize" mode="widthFix" :src="item[imgName]"></u-image></view>
					<view class="list-text" :style="{ fontSize: nameSize }">{{ item[labelName] }}</view>
				</view>
			</view>
			<view class="nav-list" v-if="mode == 10">
				<view
					class="nav-item"
					style="width: 20%;"
					:style="[{ marginTop: index > 4 ? marginTopLine : '' }]"
					v-for="(item, index) in list"
					:key="index"
					@click="$u.route({url:item.url, params:item.params})"
				>
					<view class="list-img"><u-image :width="imgSize" :height="imgSize" mode="widthFix" :src="item[imgName]"></u-image></view>
					<view class="list-text" :style="{ fontSize: nameSize }">{{ item[labelName] }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'dial-nav',
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
		// 配置项
		list: {
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
		},
		// 两行之间的距离（仅在8，10中）
		marginTopLine: {
			type: String,
			default: '30rpx'
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	border-radius: 16rpx;
	background-color: $app-theme-bg-color;
	overflow: hidden;
	&.shadow {
		box-shadow: $app-theme-shadow;
	}
	.nav-navigation {
		width: 100%;

		.nav-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			padding-top: 30rpx;
			padding-bottom: 32rpx;

			.nav-item {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;

				.list-img {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 16rpx;
				}

				.list-text {
					text-align: center;
					font-weight: 400;
					color: $app-theme-text-black-color;
				}
			}
		}
	}
}
</style>
