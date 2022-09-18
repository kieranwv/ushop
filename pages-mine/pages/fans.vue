<template>
	<view class="page">
		<Navbar title="我的粉丝"></Navbar>
		<UserCardOperate :data="item" v-for="(item, index) in userList" :key="index" :border="index != userList.length - 1"></UserCardOperate>
	</view>
</template>

<script>
import UserCardOperate from '@/pages/mine/components/user-card-operate.vue';
import { userList } from '@/static/test-data.js';
export default {
	components: { UserCardOperate },
	data() {
		return {
			userList
		};
	}
};
</script>

<style lang="scss" scoped>
.page {
	background-color: $app-theme-bg-color;
	padding: 0 30rpx;
}
</style>
