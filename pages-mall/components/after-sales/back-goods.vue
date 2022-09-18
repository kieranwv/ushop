<template>
	<view class="slot">
		<view class="form">
			<u-form :model="form" ref="form" label-width="140rpx">
				<u-form-item label="换货原因"><u-input v-model="form.reason" type="select" placeholder="请选择" @click="openReasonPopup" /></u-form-item>
				<u-form-item label="换货说明"><u-input v-model="form.desc" placeholder="选填" /></u-form-item>
			</u-form>
		</view>
		<view class="btn">
			<u-button type="primary" shape="circle" @click="submit"><text>提交</text></u-button>
		</view>
		<!-- 原因选择框 -->
		<SelectReason ref="SelectReason" :ops="reasonOps" title="换货原因" @change="changeReason"></SelectReason>
	</view>
</template>

<script>
import SelectReason from '@/components/select-reason.vue';
export default {
	name: 'back-money',
	components: {
		SelectReason
	},
	data() {
		return {
			// 表单
			form: {
				reason: '',
				desc: '',
				money: '￥180.00'
			},
			// 原因
			currentReasonIndex: null,
			reasonOps: [
				{ label: '尺码拍错/不喜欢/效果不好', value: '0' },
				{ label: '材质、面料与商品描述不符', value: '1' },
				{ label: '大小尺寸与商品描述不符', value: '2' },
				{ label: '剪裁/做工瑕疵', value: '3' },
				{ label: '颜色款式图案与描述不符', value: '4' },
				{ label: '其他', value: '5' }
			]
		};
	},
	methods: {
		// 打开原因选择框
		openReasonPopup() {
			this.$refs.SelectReason.open(this.currentReasonIndex);
		},

		// 选择原因回调
		changeReason(e) {
			this.currentReasonIndex = e;
			this.form.reason = this.reasonOps[e].label;
		},

		// 提交
		submit() {}
	}
};
</script>

<style lang="scss" scoped>
.form {
	background-color: $app-theme-bg-color;
	border-radius: 16rpx;
	box-shadow: $app-theme-shadow;
	padding: 0 30rpx;
}
.btn {
	padding: 60rpx 0rpx;
}
</style>
