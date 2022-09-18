<template>
	<view class="page">
		<Navbar :title="title"></Navbar>
		<view class="form">
			<u-form :model="form" ref="form" label-width="180rpx">
				<u-form-item label="收货人"><u-input v-model="form.name" placeholder="请输入收货人姓名" /></u-form-item>
				<u-form-item label="联系方式"><u-input v-model="form.phone" placeholder="请输入联系方式" /></u-form-item>
				<u-form-item label="所在地区"><u-input v-model="cityPickerLabel" type="select" placeholder="请选择所在地区" @click="showCityPicker = true" /></u-form-item>
				<u-form-item label="详细地址"><u-input v-model="form.address" placeholder="请输入详细地址" /></u-form-item>
				<u-form-item :border-bottom="false" label="设为默认地址"><u-switch slot="right" v-model="form.isDefault" :active-color="appThemeColor"></u-switch></u-form-item>
			</u-form>
		</view>
		<view class="btn">
			<u-button type="primary" shape="circle" @click="submit">
				<u-icon name="plus"></u-icon>
				<text>{{ type == 'add' ? '保存地址' : '保存地址' }}</text>
			</u-button>
		</view>
		<!-- 省市区选择器 -->
		<CityPicker v-model="showCityPicker" @city-change="cityChange"></CityPicker>
	</view>
</template>

<script>
import CityPicker from '@/pages-mine/components/city-picker.vue';
export default {
	components: {
		CityPicker
	},
	data() {
		return {
			// 标题
			title: '收货地址',
			appThemeColor: this.$appTheme.appThemeColor,
			// 表单
			form: {
				name: '',
				phone: '',
				province: '',
				city: '',
				area: '',
				address: '',
				isDefault: false
			},
			// 省市区
			showCityPicker: false,
			cityPickerLabel: ''
		};
	},
	onLoad(ops) {
		if (ops.type == 'add') {
			this.title = '新建地址';
		} else if (ops.type == 'update') {
			this.title = '修改地址';
		}
	},
	methods: {
		// 省市区选择回调
		cityChange(e) {
			this.cityPickerLabel = e.province.label + '-' + e.city.label + '-' + e.area.label;
			this.form.province = e.province.value;
			this.form.city = e.city.value;
			this.form.area = e.area.value;
		},

		// 提交表单
		submit() {}
	}
};
</script>

<style lang="scss" scoped>
.form {
	background-color: $app-theme-bg-color;
	padding: 30rpx;
}
.btn {
	padding: 60rpx 30rpx;
}
</style>
