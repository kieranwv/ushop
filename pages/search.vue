<template>
	<view class="page">
		<!-- 全局一般导航栏 -->
		<Navbar title="搜索商品"></Navbar>
		<!-- 全局搜索框 -->
		<Search placeholder="搜索商品、品牌" showCancelBtn @change="searchChange" @search="goSearchResult"></Search>
		<!-- 最近搜索 -->
		<TitleOperate v-if="!isInput && historyList.length > 0" title="最近搜索" padding="10rpx 30rpx 24rpx 30rpx">
			<view class="remove" @click="showRemoveHistory = true"><u-icon name="trash"></u-icon></view>
		</TitleOperate>
		<view class="list" v-if="!isInput && historyList.length > 0">
			<Tag v-for="(item, index) in historyList" :key="index">{{ item }}</Tag>
		</view>
		<!-- 间隔 -->
		<view style="height: 30rpx; width: 100%;"></view>
		<!-- 热门搜索 -->
		<TitleOperate v-if="!isInput && hotList.length > 0" title="热门搜索" padding="10rpx 30rpx 24rpx 30rpx"></TitleOperate>
		<view class="list" v-if="!isInput && hotList.length > 0">
			<Tag v-for="(item, index) in hotList" :key="index">{{ item }}</Tag>
		</view>
		<!-- 删除最近搜索的模态框 -->
		<u-modal v-model="showRemoveHistory" content="是否清空最近搜索记录？" @confirm="removeHistory" show-cancel-button :confirm-color="confirmColor"></u-modal>
	</view>
</template>

<script>
import Search from '@/components/search/search.vue';
import TitleOperate from '@/components/title-operate.vue';
import Tag from '@/components/tag.vue';
export default {
	components: { Search, TitleOperate, Tag },
	data() {
		return {
			// 直接写在html里不识别，需要在data里转一下
			confirmColor: this.$appTheme.appThemeColor.toString(),
			// 是否显示删除最近搜索的模态框
			showRemoveHistory: false,
			// 是否正在搜索，用于判断是否显示最近搜索和热门搜索
			isInput: false,
			// 最近搜索
			historyList: ['维生素片', '汤臣倍健', '鸡副产品', '鸭副产品', '调理鸡腿'],
			// 热门搜索
			hotList: ['冻品鸭腿', '冻品鸡腿', '鸡副产品', '鸭副产品', '调理鸡腿']
		};
	},
	methods: {
		// 搜索框正在输入
		searchChange(e) {
			if (e) {
				this.isInput = true;
			} else {
				this.isInput = false;
			}
		},

		// 清空最近搜索记录
		removeHistory() {
			this.historyList = [];
		},

		// 跳转搜索结果页
		goSearchResult(e) {
			uni.setStorageSync('TEMP_SEARCH_KEYWORD', e);
			uni.navigateTo({
				url: '/pages/search-result'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: #fff;
}
.list {
	padding: 0 30rpx;
}
</style>
