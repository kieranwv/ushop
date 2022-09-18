<template>
	<view class="page">
		<view class="module">
			<TitleOperate title="圈主" titleSize="30rpx"></TitleOperate>
			<view class="list"><UserCardOperate :data="userList[0]"></UserCardOperate></view>
		</view>
		<view class="module">
			<TitleOperate title="圈友" titleSize="30rpx"></TitleOperate>
			<view class="list"><UserCardOperate :border="index != userList.length - 1" :data="item" v-for="(item, index) in userList" :key="index"></UserCardOperate></view>
		</view>
	</view>
</template>

<script>
import TitleOperate from '@/components/title-operate.vue';
import UserCardOperate from '@/pages/mine/components/user-card-operate.vue';
import { userList } from '@/static/test-data.js';
export default {
	components: { TitleOperate, UserCardOperate },
	props: {},
	data() {
		return {
			userList
		};
	}
};
</script>

<style lang="scss" scoped>
.module {
	background-color: $app-theme-bg-color;
	margin-bottom: 24rpx;
	.list {
		padding: 0 30rpx;
	}
}
</style>
