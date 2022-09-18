<template>
	<view class="page">
		<!-- 带tab的导航栏 -->
		<NvabarTabSearch
			:tabOps="['圈子', '关注']"
			placeholder="请输入关键字搜索圈子"
			:showSearch="showSearch"
			@change="changeNavbarTab"
			url="/pages-community/pages/community/search"
		></NvabarTabSearch>
		<!-- 圈子 -->
		<GroupPage v-if="showSearch"></GroupPage>
		<!-- 关注 -->
		<FollowPage v-else></FollowPage>
		<!-- 添加按钮 -->
		<AddBtnFixed @click="add"></AddBtnFixed>
		<!-- 新增弹窗 -->
		<AddPopup ref="AddPopup" @close="closeAddPopup" :ops="addOps"></AddPopup>
	</view>
</template>

<script>
import NvabarTabSearch from '@/components/navbar/navbar-tab-search.vue';
import AddBtnFixed from '@/components/add-btn-fixed.vue';
import AddPopup from '@/components/add-popup.vue';
import GroupPage from './group.vue';
import FollowPage from './follow.vue';
export default {
	components: {
		NvabarTabSearch,
		GroupPage,
		FollowPage,
		AddBtnFixed,
		AddPopup
	},
	data() {
		return {
			// 在切换到关注的时候不显示搜索框
			showSearch: true,
			// 新建按钮配置项
			addOps: [
				{
					label: '创建圈子',
					icon: require('../../static/operate/publish-community.png'),
					url: '/pages-community/pages/community/add-or-update?type=add',
					type: 'page'
				},
				{ label: '发布帖子', icon: require('../../static/operate/create-community.png'), url: '/pages-community/pages/post/add', type: 'page' }
			]
		};
	},
	methods: {
		// 切换navbar
		changeNavbarTab(e) {
			if (e == 1) {
				this.showSearch = false;
			} else {
				this.showSearch = true;
			}
		},

		// 添加
		add() {
			let $this = this;
			uni.hideTabBar({
				animation: true,
				complete() {
					$this.$refs.AddPopup.open();
				}
			});
		},

		// 关闭
		closeAddPopup() {
			uni.showTabBar({
				animation: true
			});
		}
	}
};
</script>

<style lang="scss" scoped></style>
