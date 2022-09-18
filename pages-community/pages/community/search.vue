<template>
	<view class="page">
		<!-- 全局一般导航栏 -->
		<Navbar title="搜索圈子"></Navbar>
		<!-- 全局搜索框 -->
		<Search placeholder="搜索圈子" showCancelBtn @change="searchChange"></Search>
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
						<view class="list">
							<CommunityCard
								v-for="(child, childIndex) in item.children"
								:borderBottom="child.length - 1 != childIndex"
								:data="child"
								:key="childIndex"
								@click="$u.route('/pages-community/pages/community/detail')"
							></CommunityCard>
						</view>
						<NoData height="50vh" v-if="item.children.length == 0"></NoData>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Search from '@/components/search/search.vue';
import CommunityCard from '@/pages/community/components/community-card.vue';
export default {
	components: { Search, CommunityCard },
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
		// 搜索框正在输入
		searchChange(e) {},

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
					cateName: '音乐',
					id: 1,
					children: [
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music2.png', cateName: '学生党', desc: '一起来学习呀' },
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music1.png', cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music3.png', cateName: '音悦台', desc: '这首歌的等你来听…' }
					]
				},
				{
					cateName: '校园',
					id: 2,
					children: [
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music2.png', cateName: '学生党', desc: '一起来学习呀' },
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music1.png', cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music3.png', cateName: '音悦台', desc: '这首歌的等你来听…' }
					]
				},
				{
					cateName: '生活',
					id: 3,
					children: [
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music2.png', cateName: '学生党', desc: '一起来学习呀' },
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music1.png', cateName: '好听的音乐', desc: '这首歌的等你来听这首歌的等你…' },
						{ pics: 'http://sdyy.apicloud-system.com/images2/imgs/music3.png', cateName: '音悦台', desc: '这首歌的等你来听…' }
					]
				},
				{
					cateName: '兴趣',
					id: 4,
					children: []
				},
				{
					cateName: '运动',
					id: 5,
					children: []
				},
				{
					cateName: '旅行',
					id: 6,
					children: []
				},
				{
					cateName: '动漫',
					id: 6,
					children: []
				}
			];
		},

		// 切换分类
		changeSide(index) {
			this.sideIndex = index;
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
		height: 100%;
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
						height: 64rpx;
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
