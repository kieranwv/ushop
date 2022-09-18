<template>
	<view class="page">
		<Navbar title="我的收藏"></Navbar>
		<view class="list">
			<u-checkbox-group @change="selectChange">
				<view class="item" v-for="(item, index) in list" :key="index" @click="clickItem(item, index)">
					<view class="pics"><u-image width="120rpx" height="120rpx" :src="item.img"></u-image></view>
					<view class="info">
						<view class="title">{{ item.title }}</view>
						<view class="num">
							<text>553</text>
							<text>人收藏</text>
						</view>
					</view>
					<view class="check"><u-checkbox shape="circle" v-model="item.checked" v-if="isSelect" :active-color="checkboxColor"></u-checkbox></view>
				</view>
			</u-checkbox-group>
		</view>
		<view class="btn" v-if="isSelect && selectIndexs.length > 0"><u-button type="primary" shape="circle" @click="selectCollections">选好了</u-button></view>
	</view>
</template>

<script>
import { goodsList } from '@/static/test-data.js';
export default {
	data() {
		return {
			isSelect: false,
			list: goodsList,
			selectIndexs: [],
			checkboxColor: this.$appTheme.appThemeColor
		};
	},
	onLoad(ops) {
		if (ops.isSelect) this.isSelect = ops.isSelect;
	},
	methods: {
		// 点击卡片
		clickItem(item, index) {
			item.checked = !item.checked;
			if (item.checked) {
				this.selectIndexs.push(index);
			} else {
				this.selectIndexs.splice(index, 1);
			}
		},

		// 复选框回调
		selectChange(e) {
			this.selectIndexs = e;
		},

		// 选好了
		selectCollections() {
			let selectedCollections = [];
			this.selectIndexs.map((item,index) => {
				this.list.map((goods,goodsIndex) => {
					if (goodsIndex == index) {
						selectedCollections.push(goods);
					}
				});
			});
			uni.setStorageSync('TEMP_SELECED_COLLECTIONS', selectedCollections);
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 30rpx;
}
.list {
	.item {
		padding: 30rpx;
		position: relative;
		border-radius: 16rpx;
		box-shadow: $app-theme-shadow;
		display: flex;
		align-items: center;
		margin-bottom: 24rpx;
		.pic {
			margin-right: 24rpx;
			border-radius: 12rpx;
			overflow: hidden;
		}
		.info {
			.title {
				font-size: 28rpx;
				color: $app-theme-text-black-color;
				margin-bottom: 4rpx;
			}
			.num {
				font-size: 24rpx;
				color: $app-theme-text-gray-color;
			}
		}
		.check {
			position: absolute;
			bottom: 30rpx;
			right: 30rpx;
		}
	}
}
.btn {
	padding: 30rpx;
	position: fixed;
	bottom: 30rpx;
	left: 0;
	width: 100%;
}
</style>
