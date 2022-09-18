<template>
	<view class="slot" :style="{ padding }">
		<view class="search">
			<u-search
				class="search-components"
				:class="showCancelBtn && keyword.length > 0 ? 'active' : ''"
				:placeholder="placeholder"
				v-model="keyword"
				:showAction="false"
				shape="square"
				borderRadius="0rpx"
				bg-color="#F4F5F8"
				@focus="focus"
				@search="search"
				@change="change"
			></u-search>
			<view class="cancel" v-if="showCancelBtn && keyword.length > 0" @click="cancelSearch">取消</view>
		</view>
		<view class="list" v-show="showSearchList">
			<view class="item" v-for="(item, index) in searchList" :key="index">{{ item }}</view>
		</view>
	</view>
</template>

<script>
const searchList = ['维生素汤臣倍健', '善存维生素', '汤臣倍健维生素'];
export default {
	name: 'search',
	props: {
		// 占位内容
		placeholder: {
			type: String,
			default: '请输入'
		},
		// 内边距
		padding: {
			type: String,
			default: '20rpx 30rpx'
		},
		// 是否显示取消按钮
		showCancelBtn: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			// 关键字
			keyword: '',
			// 检索列表
			showSearchList: false,
			searchList: []
		};
	},
	watch: {
		// 监听关键字，如果有输入关键字，则打开待选词列表
		keyword(newVal) {
			if (newVal.length > 0) {
				this.showSearchList = true;
				this.searchList = searchList;
			} else {
				this.showSearchList = false;
			}
		}
	},
	methods: {
		// 聚焦
		focus() {},

		// 内容改变
		change(e) {
			this.$emit('change', e);
		},

		// 取消搜索
		cancelSearch() {
			this.showSearchList = false;
		},

		// 搜索
		search(e) {
			this.$emit('search', e);
		}
	}
};
</script>

<style lang="scss">
.slot {
}
.search {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.search-components {
		width: 100%;
		&.active {
			width: 86%;
		}
	}
}
/deep/.u-content {
	border-radius: 0 !important;
}
.cancel {
	width: 14%;
	text-align: center;
}
.list {
	.item {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1rpx solid $app-theme-border-color;
		&.last-child {
			border: none;
		}
	}
}
</style>
