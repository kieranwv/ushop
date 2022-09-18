<template>
	<view class="page">
		<Navbar title="优惠卷"></Navbar>
		<view class="list">
			<view class="item" v-for="(item, index) in discountsList" :key="index" @click="changeDiscount(item, index)">
				<view class="left">
					<view class="discount">
						<text>￥</text>
						<text>{{ item.discounts }}</text>
					</view>
					<view class="standard">满{{ item.standard }}可用</view>
				</view>
				<view class="right">
					<view class="title">{{ item.title }}</view>
					<view class="date">有效期至 {{ item.endDate }}</view>
				</view>
				<view class="select" v-if="selectIndex == index"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			selectIndex: 0,
			discountsList: [
				{
					title: '全场所有品类',
					endDate: '2022.10.12',
					standard: 199,
					discounts: 25
				},
				{
					title: '新人30元代金券',
					endDate: '2022.10.12',
					standard: 199,
					discounts: 30
				}
			]
		};
	},
	methods: {
		changeDiscount(item, index) {
			this.selectIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	margin: 30rpx;
	.item {
		width: 100%;
		height: 174rpx;
		background-image: url('@/pages-mine/static/discounts-bg.png');
		background-size: cover;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		padding-bottom: 34rpx;
		position: relative;

		.left {
			margin-right: 60rpx;
			margin-left: 50rpx;
			.discount {
				text:nth-child(1) {
					font-size: 22rpx;
					color: $app-theme-text-money-color;
				}
				text:nth-child(2) {
					font-size: 64rpx;
					color: $app-theme-text-money-color;
				}
			}
			.standard {
				font-size: 20rpx;
				color: $app-theme-card-gray-color;
			}
		}
		.right {
			.title {
				font-size: 32rpx;
				color: $app-theme-text-black-color;
				margin-bottom: 32rpx;
			}
			.date {
				font-size: 20rpx;
				color: $app-theme-card-gray-color;
			}
		}

		.select {
			height: 60rpx;
			width: 60rpx;
			background-image: url('@/pages-mine/static/discounts-select.png');
			background-size: cover;
			position: absolute;
			top: 4rpx;
			right: 4rpx;
			z-index: $app-zIndex-absolute;
		}
	}
}
</style>
