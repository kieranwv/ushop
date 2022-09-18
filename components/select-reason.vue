<template>
	<u-popup v-model="show" mask mode="bottom" mask-close-able border-radius="16">
		<view class="header">
			<view class="cancel" @click="close">取消</view>
			<view class="title">{{ title }}</view>
			<view class="submit" @click="submit">提交</view>
		</view>
		<view class="list">
			<u-radio-group v-model="currentReasonIndex" @change="reasonChange">
				<view class="item" v-for="(item, index) in ops" :key="index" @click="currentReasonIndex = index">
					<view class="label">{{ item.label }}</view>
					<view class="check"><u-radio :name="index" :active-color="radioColor"></u-radio></view>
				</view>
			</u-radio-group>
		</view>
	</u-popup>
</template>

<script>
export default {
	props: {
		// 标题
		title: {
			type: String,
			default: ''
		},
		// 配置项
		ops: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	data() {
		return {
			show: false,
			currentReasonIndex: 5,
			radioColor: this.$appTheme.appThemeColor
		};
	},
	methods: {
		// 打开popup
		open(currentReasonIndex) {
			this.currentReasonIndex = currentReasonIndex;
			this.show = true;
		},

		// 选择原因
		reasonChange(e) {},

		// 关闭
		close() {
			this.show = false;
		},

		// 提交
		submit() {
			if (this.currentReasonIndex == null) {
				uni.showToast({
					title: '请选择' + this.title,
					icon: 'none'
				});
				return;
			}
			this.$emit('change', this.currentReasonIndex);
			this.close();
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	padding: 26rpx 32rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.cancel {
		font-size: 28rpx;
		color: $app-theme-card-gray-deep-color;
	}
	.title {
		font-size: 32rpx;
		color: $app-theme-text-black-color;
	}
	.submit {
		font-size: 28rpx;
		color: $app-theme-color;
	}
}
.list {
	padding: 30rpx;
	.item {
		margin-bottom: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.label {
			font-size: 30rpx;
			color: $app-theme-text-color;
		}
		.check {
			width: 36rpx;
		}
	}
}
</style>
