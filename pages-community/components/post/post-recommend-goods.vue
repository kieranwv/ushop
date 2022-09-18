<template>
	<u-popup v-model="show" mask mode="bottom" mask-close-able border-radius="16">
		<view class="list">
			<!-- 瀑布流组件 -->
			<u-waterfall ref="topicWaterFall" v-model="recommendGoodsList">
				<template v-slot:left="{ leftList }">
					<CardGoods v-for="(item, index) in leftList" :key="index" :data="item"></CardGoods>
				</template>
				<template v-slot:right="{ rightList }">
					<CardGoods v-for="(item, index) in rightList" :key="index" :data="item"></CardGoods>
				</template>
			</u-waterfall>
		</view>
	</u-popup>
</template>

<script>
import CardGoods from '@/pages/mall/components/card.vue';
import { goodsList } from '@/static/test-data.js';
export default {
	components: { CardGoods },
	props: {},
	data() {
		return {
			show: false,
			// 推荐商品列表
			recommendGoodsList: []
		};
	},
	methods: {
		// 打开popup
		open() {
			this.show = true;
			this.getRecommendGoods();
		},

		// 关闭
		close() {
			this.show = false;
		},

		// 加载推荐商品
		getRecommendGoods() {
			this.$nextTick(() => {
				this.recommendGoodsList = JSON.parse(JSON.stringify(goodsList));
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	padding: 26rpx 32rpx;
}
.list {
	padding: 30rpx;
}
</style>
