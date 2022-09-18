<template>
	<view class="page">
		<Navbar title="收货地址"></Navbar>
		<view class="list">
			<AddressCard v-for="(item, index) in list" :isBack="isBack" :key="index" :data="item" :showEdit="!isSelect" :showBorderBottom="index != list.length - 1"></AddressCard>
		</view>
		<view class="btn" v-if="!isSelect">
			<u-button type="primary" shape="circle" @click="$u.route({ url: '/pages-mine/pages/address/add-or-update?type=add' })">
				<u-icon name="plus"></u-icon>
				<text>新建收货地址</text>
			</u-button>
		</view>
	</view>
</template>

<script>
import AddressCard from '@/pages/mine/components/address-card.vue';
export default {
	components: {
		AddressCard
	},
	data() {
		return {
			isSelect: false,
			isBack: false,
			list: [
				{
					isHome: true,
					province: '山东省',
					city: '青岛市',
					area: '李沧区',
					street: '浮山路街道',
					address: '大马路路60号就金茂悦10号楼1单元',
					name: '李李',
					phone: '187****7234'
				},
				{
					isHome: true,
					province: '山东省',
					city: '青岛市',
					area: '李沧区',
					street: '浮山路街道',
					address: '大马路路60号就金茂悦10号楼1单元',
					name: '李李',
					phone: '187****7234'
				}
			]
		};
	},
	onLoad(ops) {
		if (ops.isSelect) {
			this.isSelect = ops.isSelect;
			this.isBack = ops.isBack;
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
}
.list {
	padding: 0 30rpx;
}
.btn {
	position: absolute;
	bottom: 40rpx;
	left: 0;
	padding: 30rpx;
	width: 100%;
	text {
		margin-left: 8rpx;
	}
}
</style>
