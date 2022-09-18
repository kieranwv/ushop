<template>
	<view class="page">
		<!-- 自定义导航栏-->
		<Navbar title="商品分类"></Navbar>

		<view class="inner">
			<!-- 侧栏 -->
			<view class="aside">
				<view
					class="item acea-row row-center-wrapper"
					:class="categoryDivindex === sideIndex ? 'on' : ''"
					v-for="(item, categoryDivindex) in classifyList"
					:key="categoryDivindex"
					@click="changeSide(categoryDivindex)"
				>
					{{ item.cateName }}
				</view>
			</view>
			<!-- 主内容 -->
			<scroll-view class="conter" scroll-y="true">
				<view v-for="(item, index) in classifyList" :key="index">
					<view class="item" v-if="index == sideIndex">
						<view class="title">{{ item.cateName }}</view>
						<view class="list">
							<view class="item" v-for="(child, childIndex) in item.children" :key="childIndex" @click="goGoodsList(child)">
								<u-image height="120rpx" width="120rpox" mode="widthFix" :src="child.pic"></u-image>
								<view class="name">{{ child.cateName }}</view>
							</view>
						</view>
						<NoData height="50vh" v-if="item.children.length == 0"></NoData>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			// 分类数据
			classifyList: [],
			// 分类索引
			sideIndex: 0,
			// 传参id
			queryClassifyId: ''
		};
	},
	onLoad(options) {
		if (options.id) {
			this.queryClassifyId = options.id;
		}
		this.getClassifyList();
	},
	methods: {
		// 动态切换分类
		changeClassifyById() {
			let nowClassifyIndex = 0;
			if (!this.queryClassifyId) return;
			this.classifyList.forEach((item, index) => {
				if (item.id === this.queryClassifyId) nowClassifyIndex = index;
			});
			if (nowClassifyIndex !== this.navActive) {
				this.changeSide(index);
			}
		},

		// 查询分类列表
		getClassifyList() {
			this.classifyList = [
				{
					cateName: '推荐',
					children: [
						{
							cateName: '保健品',
							pic: require('@/static/goods/1.png')
						},
						{
							cateName: '保健品',
							pic: require('@/static/goods/1.png')
						},
						{
							cateName: '保健品',
							pic: require('@/static/goods/1.png')
						},
						{
							cateName: '保健品',
							pic: require('@/static/goods/1.png')
						}
					]
				},
				{
					cateName: '百货',
					children: [
						{
							cateName: '卫生纸',
							pic: require('@/static/goods/1.png')
						}
					]
				},
				{
					cateName: '服饰',
					children: [
						{
							cateName: '卫衣',
							pic: require('@/static/goods/1.png')
						}
					]
				},
				{
					cateName: '运动',
					children: [
						{
							cateName: '篮球',
							pic: require('@/static/goods/1.png')
						}
					]
				}
			];
			this.changeClassifyById();
		},

		// 切换分类
		changeSide(index) {
			this.sideIndex = index;
		},

		// 跳转商品列表页
		goGoodsList(child) {
			this.$u.route('/pages-mall/pages/goods/list', { id: child.id });
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background: $app-theme-bg-color;
	.inner {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.aside {
			width: 196rpx;
			background: $app-theme-bg-gray-color;
			height: 100%;
			.item {
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				font-size: 32rpx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: $app-theme-text-black-color;
				transition: all 0.3s ease-in-out;
				&.on {
					color: $app-theme-color;
					position: relative;
					background-color: $app-theme-bg-color;
					transition: all 0.3s ease-in-out;
					&::before {
						position: absolute;
						top: 50%;
						left: 0;
						transform: translate(0, -50%);
						content: '';
						height: 30rpx;
						width: 8rpx;
						background-color: $app-theme-color;
					}
				}
			}
		}
		.conter {
			padding: 30rpx 40rpx 30rpx 40rpx;
			.item {
				.title {
					font-size: 30rpx;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					color: $app-theme-text-black-color;
					padding: 30rpx 0;
				}
				.list {
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					flex-wrap: wrap;
					.item {
						width: 120rpx;
						margin-bottom: 30rpx;
						margin-right: 56rpx;
						&:nth-child(3n) {
							margin-right: 0;
						}
						.picture {
						}
						.name {
							font-size: 24rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: $app-theme-text-gray-color;
							text-align: center;
							margin-top: 12rpx;
						}
					}
				}
			}
		}
	}
}
</style>
