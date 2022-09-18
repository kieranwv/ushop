<template>
	<view class="slot" :style="{ height }">
		<view class="img"><image :src="'../static/nodata/' + type + '.png'" mode="widthFix"></image></view>
		<view class="tip">{{ returnTip(tip) }}</view>
	</view>
</template>

<script>
export default {
	name: 'no-data',
	props: {
		// 类型，缺省图片名称，路径：/static/nodata/...
		type: {
			type: String,
			default: 'content'
		},
		// 高度
		height: {
			type: String,
			default: '100%'
		},
		// 自定义文本
		tip: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			ops: [
				{ type: 'content', tip: '暂无相关内容' },
				{ type: 'collection', tip: '暂无收藏' },
				{ type: 'fans', tip: '暂无粉丝' },
				{ type: 'network', tip: '暂无网络' },
				{ type: 'order', tip: '暂无订单' },
				{ type: 'news', tip: '暂无消息' },
				{ type: 'result', tip: '暂无搜索结果' }
			]
		};
	},
	methods: {
		returnTip(tip) {
			if (tip) {
				return tip;
			} else {
				return this.ops.filter(item => item.type == this.type)[0].tip;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.slot {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;
	.img {
		width: 400rpx;
		height: auto;
		margin: 0 auto;
		image {
			width: 100%;
			height: auto;
		}
	}
	.tip {
		margin-top: 48rpx;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		font-weight: 400;
		color: $app-theme-text-color;
	}
}
</style>
