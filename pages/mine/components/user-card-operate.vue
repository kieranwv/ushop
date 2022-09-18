<template>
	<view class="slot" :class="{ border }">
		<view class="left" @click="goUser">
			<view class="avatar"><u-avatar size="88" :src="data.avatar"></u-avatar></view>
			<view class="username">{{ data.username }}</view>
			<view class="sex">
				<u-image width="28rpx" height="28rpx" src="../../../static/user/sex-0.png" v-if="data.sex == '0'"></u-image>
				<u-image width="28rpx" height="28rpx" src="../../../static/user/sex-1.png" v-if="data.sex == '1'"></u-image>
			</view>
		</view>
		<view class="right">
			<u-button size="mini" shape="circle" plain v-if="data.status == '0'" @click="follow">关注</u-button>
			<u-button size="mini" shape="circle" plain v-if="data.status == '1'" @click="cancelFollow">已关注</u-button>
			<u-button size="mini" shape="circle" plain v-if="data.status == '2'" @click="cancelFollow">互相关注</u-button>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {
				return {};
			}
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		// 关注
		follow() {},

		// 取消关注
		cancelFollow() {},

		// 去用户首页
		goUser() {
			uni.navigateTo({
				url: '/pages-mine/pages/user'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 24rpx;
	padding-bottom: 24rpx;
	&.border {
		border-bottom: 1px solid $app-theme-border-color;
	}
	.left {
		display: flex;
		align-items: center;
		.avatar {
			margin-right: 24rpx;
		}
		.username {
			margin-right: 16rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-text-black-color;
		}
		.sex {
			display: flex;
			align-items: center;
		}
	}
	.right {
	}
}
</style>
