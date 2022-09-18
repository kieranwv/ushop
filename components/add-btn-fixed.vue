<template>
	<view class="slot" @touchmove="buttonMove" @touchstart="buttonStart" @touchend="buttonEnd" :style="{ top: buttonTop + 'px', left: buttonLeft + 'px' }">
		<view class="btn" @click="click"><u-icon name="plus" size="54"></u-icon></view>
	</view>
</template>

<script>
var startPoint;
export default {
	data() {
		return {
			buttonTop: 0,
			buttonLeft: 0,
			windowHeight: '',
			windowWidth: ''
		};
	},
	mounted() {
		let $this = this;
		uni.getSystemInfo({
			success(res) {
				// 高度,宽度 单位为px
				$this.windowHeight = res.windowHeight;
				$this.windowWidth = res.windowWidth;
				//这里定义按钮的初始位置
				$this.buttonTop = res.windowHeight * 0.8;
				//这里定义按钮的初始位置
				$this.buttonLeft = res.windowWidth * 0.8;
			}
		});
	},
	methods: {
		// 点击事件
		click() {
			this.$emit('click');
		},
		//以下是按钮拖动事件
		buttonStart: function(e) {
			//获取拖动开始点
			startPoint = e.touches[0];
		},
		buttonMove: function(e) {
			//获取拖动结束点
			var endPoint = e.touches[e.touches.length - 1];
			//计算在X轴上拖动的距离和在Y轴上拖动的距离
			var translateX = endPoint.clientX - startPoint.clientX;
			var translateY = endPoint.clientY - startPoint.clientY;
			startPoint = endPoint; //重置开始位置
			var buttonTop = this.buttonTop + translateY;
			var buttonLeft = this.buttonLeft + translateX;
			//判断是移动否超出屏幕
			if (buttonLeft + 50 >= this.windowWidth) {
				buttonLeft = this.windowWidth - 50;
			}
			if (buttonLeft <= 0) {
				buttonLeft = 0;
			}
			if (buttonTop <= 0) {
				buttonTop = 0;
			}
			if (buttonTop + 50 >= this.windowHeight) {
				buttonTop = this.windowHeight - 50;
			}
			this.buttonTop = buttonTop;
			this.buttonLeft = buttonLeft;
		},
		buttonEnd: function(e) {}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	position: fixed;
	z-index: $app-zIndex-fixed;
	box-shadow: $app-theme-shadow;
	overflow: hidden;
	border-radius: 50%;
	.btn {
		background-color: $app-theme-color;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		color: $app-theme-text-white-color;
		overflow: hidden;
	}
}
</style>
