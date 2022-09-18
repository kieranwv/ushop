const mixinSmsCode = {
	data() {
		return {
			smsCode: {
				countDownTime: 60,
				isGetting: false,
				getted: false,
				timer: null
			}
		}
	},
	methods: {
		// 获取验证码方法
		getCode(PHONE_KEY, callBack) {
			if (!this[PHONE_KEY]) {
				uni.showToast({
					icon: 'none',
					title: '请输入手机号'
				});
				return;
			}
			uni.showLoading({
				title: '正在获取验证码'
			});
			callBack()
		},

		// 验证码请求后续
		getSmsCodeOver() {
			uni.hideLoading();
			this.smsCode.isGetting = true;
			this.smsCode.getted = true;
			this.smsCode.timer = setInterval(() => {
				if (this.smsCode.countDownTime > 0 && this.smsCode.countDownTime <= 60) {
					this.smsCode.countDownTime--;
				} else {
					this.resetCountDown(false);
				}
			}, 1000);
		},

		// 倒计时初始化
		resetCountDown(isInit) {
			clearInterval(this.smsCode.timer);
			this.smsCode = {
				countDownTime: 60,
				isGetting: false,
				getted: isInit ? false : true,
				timer: null
			};
			this.$forceUpdate();
		},
	}
}

export default mixinSmsCode
