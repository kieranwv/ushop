<template>
	<view class="page">
		<!-- 全局一般导航栏 -->
		<Navbar :title="title"></Navbar>
		<!-- 表单 -->
		<view class="form">
			<u-form label-position="top" :model="form" ref="form" label-width="180rpx">
				<u-form-item label="类别"><u-input v-model="typeLabel" type="select" placeholder="请选择类别" @click="typePicker = true" /></u-form-item>
				<u-form-item label="圈子名称"><u-input v-model="form.name" placeholder="请输入圈子名称" /></u-form-item>
				<u-form-item label="圈子描述"><u-input type="textarea" v-model="form.desc" placeholder="请输入圈子描述" /></u-form-item>
				<u-form-item label="圈子封面">
					<!-- 图片上传 -->
					<u-upload
						width="180"
						height="180"
						max-count="1"
						:max-size="1024 * 1024 * 10"
						:action="uploadUrl"
						:auto-upload="true"
						@on-success="uploadMainPicSuccess"
						:deleteConfirmBtnColor="themeColor"
					></u-upload>
				</u-form-item>
				<u-form-item label="圈子背景" :border-bottom="false">
					<!-- 图片上传 -->
					<u-upload
						width="180"
						height="180"
						max-count="1"
						:max-size="1024 * 1024 * 10"
						:action="uploadUrl"
						:auto-upload="true"
						@on-success="uploadBgPicSuccess"
						:deleteConfirmBtnColor="themeColor"
					></u-upload>
				</u-form-item>
			</u-form>
		</view>
		<!-- 按钮 -->
		<view class="btn">
			<u-button type="primary" shape="circle" @click="submit"><text>提交</text></u-button>
		</view>
		<!-- picker -->
		<u-picker v-model="typePicker" mode="selector" :range="typeOps" range-key="label" @confirm="confirmType" :confirm-color="themeColor"></u-picker>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '创建圈子',
			themeColor: this.$appTheme.appThemeColor,
			// 类型选择
			typePicker: false,
			typeLabel: '',
			typeOps: [
				{ label: '生活', value: 0 },
				{ label: '音乐', value: 1 },
				{ label: '读书', value: 2 },
				{ label: '运动', value: 3 },
				{ label: '旅行', value: 4 },
				{ label: '校园', value: 5 },
				{ label: '兴趣', value: 6 }
			],
			// 表单
			form: {
				name: '',
				desc: '',
				mainPic: '',
				bgPic: ''
			},
			// 上传地址
			uploadUrl: ''
		};
	},
	onLoad(options) {
		if (options.type == 'add') this.title = '创建圈子';
		if (options.type == 'update') this.title = '编辑圈子';
	},
	methods: {
		// 切换类型
		confirmType(e) {
			this.typeLabel = this.typeOps[e[0]].label;
		},
		// 上传图片成功
		uploadMainPicSuccess(data, index, lists, name) {
			this.form.mainPic = data.data.src;
		},
		// 上传图片成功
		uploadBgPicSuccess(data, index, lists, name) {
			this.form.bgPic = data.data.src;
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 24rpx 30rpx;
	background-color: $app-theme-bg-color;
	.form {
	}
}
.btn {
	padding: 60rpx 0rpx;
}
</style>
