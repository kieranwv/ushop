<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="发布帖子"></Navbar>
		<!-- 表单 -->
		<view class="form">
			<view class="content"><u-input height="200" type="textarea" placeholder="请填写内容"></u-input></view>
			<view class="pics">
				<!-- 图片上传 -->
				<u-upload
					:deleteConfirmBtnColor="appThemeColor"
					width="180"
					height="180"
					max-count="9"
					:max-size="1024 * 1024 * 10"
					:action="uploadUrl"
					:auto-upload="true"
					@on-success="uploadPicSuccess"
				></u-upload>
			</view>
			<view class="satellite">
				<!-- 圈子 -->
				<view class="item" @click="selectCommunity">
					<view class="left">
						<u-image width="32rpx" height="32rpx" src="@/pages-community/static/community.png" mode=""></u-image>
						<view v-if="selectedCommunity">{{ selectedCommunity }}</view>
						<view v-else>选择圈子</view>
					</view>
					<view class="right"><u-icon name="arrow-right" :color="appThemeTextGrayColor" size="22"></u-icon></view>
				</view>
				<!-- 商品 -->
				<view class="item" @click="selectGoods" v-if="showGoodsSelect">
					<view class="left">
						<u-image width="32rpx" height="32rpx" src="@/pages-community/static/goods.png" mode=""></u-image>
						<view v-if="selectedGoods">{{ selectedGoods }}</view>
						<view v-else>去我的收藏看看</view>
					</view>
					<view class="right"><u-icon name="arrow-right" :color="appThemeTextGrayColor" size="22"></u-icon></view>
				</view>
				<!-- 位置 -->
				<view class="item" @click="selectLocation">
					<view class="left">
						<u-image width="32rpx" height="32rpx" src="@/pages-community/static/location.png" mode=""></u-image>
						<view v-if="selectedLocation">{{ selectedLocation }}</view>
						<view v-else>所在位置</view>
					</view>
					<view class="right"><u-icon name="arrow-right" :color="appThemeTextGrayColor" size="22"></u-icon></view>
				</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="btn">
			<u-button type="primary" shape="circle" @click="submit"><text>提交</text></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showGoodsSelect: true,
			// 主题色
			appThemeColor: this.$appTheme.appThemeColor,
			appThemeTextGrayColor: this.$appTheme.appThemeTextGrayColor,
			// 表单
			form: {
				pics: []
			},
			// 上传地址
			uploadUrl: '',
			// 附属信息
			selectedCommunity: '',
			selectedGoods: '',
			selectedLocation: '',
			// 已选择的收藏商品列表
			selecedCollections: [],
			// 已选择的圈子
			selecedCommunity: {}
		};
	},
	onLoad(options) {
		if (options.showGoodsSelect == 'false') {
			this.showGoodsSelect = false;
		}
		// 清除选择圈子的缓存
		uni.setStorageSync('TEMP_SELECTED_COMMUNITY', {});
		// 清除选择商品的缓存
		uni.setStorageSync('TEMP_SELECED_COLLECTIONS', []);
	},
	onShow() {
		// 回显选择的圈子
		this.selecedCommunity = uni.getStorageSync('TEMP_SELECTED_COMMUNITY');
		this.selectedCommunity = this.selecedCommunity.cateName;
		// 回显选择的商品
		this.selecedCollections = uni.getStorageSync('TEMP_SELECED_COLLECTIONS');
		this.selecedCollections.map(item => {
			this.selectedGoods += item.title + ',';
		});
		this.selectedGoods = this.selectedGoods.substr(0, this.selectedGoods.length - 1);
	},
	methods: {
		// 上传图片成功
		uploadPicSuccess(data, index, lists, name) {
			let obj = {
				src: data.data.src,
				name: name || '未命名图片.png',
				type: 0
			};
			this.form.pics.push(obj);
		},

		// 选择圈子
		selectCommunity() {
			uni.navigateTo({
				url: '/pages-community/pages/community/select'
			});
		},

		// 选择产品
		selectGoods() {
			uni.navigateTo({
				url: '/pages-mine/pages/collection?isSelect=true'
			});
		},

		// 选择位置
		selectLocation() {
			let $this = this;
			uni.chooseLocation({
				success(res) {
					$this.selectedLocation = res.name;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 24rpx 30rpx;
	background-color: $app-theme-bg-color;
}

.card {
	.form {
	}
	.pics {
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid $app-theme-border-color;
		// 视觉对齐
		margin-left: -12rpx;
	}
}
.satellite {
	margin-top: 24rpx;
	.item {
		border-top: 1px solid $app-theme-border-color;
		padding: 24rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			view {
				padding-left: 24rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: $app-theme-text-gray-color;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 80vw;
			}
		}
	}
}
.btn {
	padding: 60rpx 0rpx;
}
</style>
