export const orderOperate = {
	data() {
		return {
			// 主题色
			appThemeColor: this.$appTheme.appThemeColor
		}
	},
	methods: {
		// 去付款
		goPay() {
			uni.navigateTo({
				url: '/pages-mall/pages/order/pay'
			});
		},

		// 查看详情
		goOrderInfo() {
			uni.setStorageSync('orderInfo', this.data);
			uni.navigateTo({
				url: '/pages-mall/pages/order/detail'
			});
		},

		// 取消订单
		cancelOrder() {
			uni.showModal({
				title: '提示',
				content: '是否取消当前订单？',
				confirmColor: this.appThemeColor,
				success: function(res) {
					if (res.confirm) {
						// TODO 接口
					}
				}
			});
		},

		// 提醒发货
		pushDelivery() {
			uni.showModal({
				title: '提示',
				content: '是否对当前订单提醒发货？',
				confirmColor: this.appThemeColor,
				success: function(res) {
					if (res.confirm) {
						// TODO 接口
					}
				}
			});
		},

		// 查看物流
		goExpress() {
			uni.setStorageSync('orderInfo', this.data);
			uni.navigateTo({
				url: '/pages-mall/pages/order/express'
			})
		},

		// 申请售后
		applyAfterSales() {
			uni.setStorageSync('orderInfo', this.data);
			uni.navigateTo({
				url: '/pages-mall/pages/after-sales/apply'
			})
		},

		// 确认收货
		confirmReceipt() {
			uni.showModal({
				title: '提示',
				content: '是否确认收货？',
				confirmColor: this.appThemeColor,
				success: function(res) {
					if (res.confirm) {
						// TODO 接口
					}
				}
			});
		},

		// 去评价
		goEvaluate() {
			uni.setStorageSync('orderInfo', this.data);
			uni.navigateTo({
				url: '/pages-mall/pages/evaluate/add'
			})
		},

		// 删除记录
		deleteOrder() {
			uni.showModal({
				title: '提示',
				content: '是否删除当前订单？',
				confirmColor: this.appThemeColor,
				success: function(res) {
					if (res.confirm) {
						// TODO 接口
					}
				}
			});
		},

		// 查看退款详情
		goBackMoney() {
			uni.setStorageSync('orderInfo', this.data);
			uni.navigateTo({
				url: '/pages-mall/pages/after-sales/back'
			})
		}
	}
}
