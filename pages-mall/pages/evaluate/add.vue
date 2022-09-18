<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="发表评价"></Navbar>
		<!-- 通知 -->
		<view class="tip">
			<text class="light">😛</text>
			<text class="light">评价即可</text>
			<text>抽奖</text>
			<text>, 15字+图片还有机会成为</text>
			<text class="light">「精选晒单」</text>
		</view>
		<!-- 表单 -->
		<view class="card">
			<!-- 商品 -->
			<view class="goods"><OrderGoodsCard :data="orderInfo" showBorderBottom></OrderGoodsCard></view>
			<!-- 评价 -->
			<view class="evaluate">
				<!-- 评分 -->
				<u-form-item label-width="140rpx" :border-bottom="false" label="商品评分">
					<u-rate size="38" slot="right" :count="5" v-model="form.star" :inactive-color="appThemeCardGrayColor" :active-color="appThemeColor"></u-rate>
				</u-form-item>
				<!-- 内容 -->
				<view class="form">
					<view class="content"><u-input height="200" type="textarea" placeholder="写下您的评价吧"></u-input></view>
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
					<u-form-item label-width="140rpx" :border-bottom="false" label="匿名评价">
						<u-switch size="40" slot="right" v-model="form.cryptonym" :active-color="appThemeColor"></u-switch>
					</u-form-item>
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
import OrderGoodsCard from '@/pages-mall/components/order/order-goods-card.vue';
export default {
	components: {
		OrderGoodsCard
	},
	data() {
		return {
			// 商品详情
			orderInfo: {},
			// 主题色
			appThemeColor: this.$appTheme.appThemeColor,
			appThemeCardGrayColor: this.$appTheme.appThemeCardGrayColor,
			// 表单
			form: {
				star: 5,
				cryptonym: false,
				pics: []
			},
			// 上传地址
			uploadUrl: ''
		};
	},
	onLoad() {
		this.orderInfo = uni.getStorageSync('orderInfo');
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
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 30rpx;
	padding-top: 110rpx;
}
.tip {
	position: absolute;
	top: 10vh;
	left: 0;
	width: 100%;
	padding: 0rpx 30rpx;
	height: 80rpx;
	line-height: 80rpx;
	background-color: rgba($app-theme-color, 0.1);
	z-index: $app-zIndex-absolute;
	text {
		color: $app-theme-card-gray-deep-color;
	}
	.light {
		color: $app-theme-color;
		font-size: 28rpx;
	}

	text:first-child {
		margin-right: 18rpx;
	}
}
.card {
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	padding: 30rpx;
	margin-bottom: 24rpx;
	background-color: $app-theme-bg-color;
	.rate {
		padding: 0 0 30rpx 0;
		// 视觉对齐
		margin-left: -8rpx;
	}
	.form {
	}
	.pics {
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid $app-theme-border-color;
		// 视觉对齐
		margin-left: -12rpx;
	}
}
.btn {
	padding: 60rpx 0rpx;
}
</style>
