<template>
	<view class="page">
		<!-- 导航栏 -->
		<Navbar title="个人中心"></Navbar>
		<!-- 表单 -->
		<view class="form">
			<u-form label-position="left" :model="form" ref="form" label-width="180rpx">
				<u-form-item label="头像">
					<view class="value" @click="uploadAvatar">
						<u-avatar style="height: 72rpx;" size="72" src="../../../static/user/1.png"></u-avatar>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="昵称">
					<view class="value" @click="openUsernameModal">
						<text>{{ username || '无' }}</text>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="性别">
					<view class="value" @click="openSexPicker">
						<text v-if="sex == '1'">男</text>
						<text v-if="sex == '0'">女</text>
						<text v-if="sex == ''">保密</text>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="个性签名">
					<view class="value" @click="openSignatureModal">
						<text>{{ signature || '无' }}</text>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="生日">
					<view class="value" @click="openDatePicker">
						<text>{{ date || '1990-01-02' }}</text>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="地区">
					<view class="value" @click="openRegionPicker">
						<text>{{ '请选择所在地区' }}</text>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label="设置密码">
					<view class="value" @click="openPasswordModal">
						<text></text>
						<u-icon :color="arrowColor" style="margin-left: 20rpx;" size="28" name="arrow-right"></u-icon>
					</view>
				</u-form-item>
			</u-form>
		</view>
		<!-- 按钮 -->
		<view class="btn">
			<u-button type="primary" shape="circle" @click="logout"><text>退出登录</text></u-button>
		</view>
		<!-- picker -->
		<u-picker mode="region" v-model="showRegion" :area-code="regionCode" :confirm-color="themeColor"></u-picker>
		<u-picker mode="time" v-model="showDate" :default-time="date" :confirm-color="themeColor"></u-picker>
		<u-picker mode="selector" v-model="showSex" :default-selector="sex" :confirm-color="themeColor" :range="range" range-key="label"></u-picker>
		<!-- modal -->
		<u-modal v-model="showUsername" title="修改昵称" show-cancel-button :confirm-color="themeColor">
			<view class="slot-content">
				<u-field label-width="60" focus placeholder="请输入昵称" clearable :border-bottom="false" v-model="username" label="昵称" required></u-field>
			</view>
		</u-modal>
		<u-modal v-model="showSignature" title="修改个性签名" show-cancel-button :confirm-color="themeColor">
			<view class="slot-content">
				<u-field
					label-width="120"
					focus
					placeholder="请输入个性签名"
					clearable
					:border-bottom="false"
					v-model="signature"
					label="个性签名"
					required
					auto-height
					type="textarea"
				></u-field>
			</view>
		</u-modal>
		<u-modal v-model="showPassword" title="修改密码" show-cancel-button :confirm-color="themeColor">
			<view class="slot-content">
				<u-field label-width="120" focus placeholder="请输入密码" clearable v-model="password" label="密码" required auto-height></u-field>
				<u-field label-width="120" placeholder="请再次输入密码" clearable :border-bottom="false" v-model="passwordAgain" label="确认密码" required auto-height></u-field>
			</view>
		</u-modal>
	</view>
</template>
<script>
export default {
	data() {
		return {
			arrowColor: this.$appTheme.appThemeTextGrayColor,
			themeColor: this.$appTheme.appThemeColor,
			// picker
			showRegion: false,
			showDate: false,
			showSex: false,
			range: [{ label: '男', value: '1' }, { label: '女', value: '0' }, { label: '保密', value: '' }],
			// modal
			showUsername: false,
			showSignature: false,
			showPassword: false,
			// 默认回显
			regionCode: '',
			date: '',
			sex: '',
			username: '',
			signature: '',
			// 表单
			form: {},
			// 上传地址
			uploadUrl: ''
		};
	},
	onLoad(options) {},
	methods: {
		// 上传头像
		uploadAvatar() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success(res) {
					console.log(JSON.stringify(res.tempFilePaths));
				}
			});
		},

		// 修改昵称
		openUsernameModal() {
			this.showUsername = true;
		},

		// 选择性别
		openSexPicker() {
			this.showSex = true;
		},

		// 修改个性签名
		openSignatureModal() {
			this.showSignature = true;
		},

		// 选择日期
		openDatePicker() {
			this.showDate = true;
		},

		// 选择地区
		openRegionPicker() {
			this.showRegion = true;
		},

		// 设置密码
		openPasswordModal() {
			this.showPassword = true;
		},

		// 退出登录
		logout() {
			uni.showModal({
				title: '提示',
				content: '是否退出当前账号？',
				confirmColor: this.themeColor,
				success(res) {
					if (res.confirm) {
						uni.removeStorageSync('IS_LOGIN');
						uni.navigateBack({
							delta: 1
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 24rpx 30rpx;
	background-color: $app-theme-bg-color;
	.form {
		.value {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-card-gray-deep-color;
		}
	}
}
.btn {
	padding: 60rpx 0rpx;
}
.slot-content {
	padding: 30rpx;
}
</style>
