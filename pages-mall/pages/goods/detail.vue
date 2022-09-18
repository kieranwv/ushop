<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="商品详情"></Navbar>
		<!-- 商品图片 -->
		<ImgSwiper :list="goodsDetail.sliderImageArr"></ImgSwiper>
		<!-- 商品信息 -->
		<GoodsInfo :data="goodsDetail" :goodsType="goodsType"></GoodsInfo>
		<!-- 选择项 -->
		<GoodsSelect :selectedSku="selectedSku" :selectedAddress="selectedAddress" @openSku="openSkuPopup"></GoodsSelect>
		<!-- 评价 -->
		<TitleOperate
			:title="'商品评价（' + evaluateData.length + '条）'"
			showMore
			moreLabel=" "
			:backgroundColor="bgColor"
			titleSize="32rpx"
			align="center"
			@clickMore="$u.route({ url: '/pages-mall/pages/evaluate/list' })"
		></TitleOperate>
		<view class="evaluate-list">
			<EvaluateCard
				:data="evaluate"
				v-for="(evaluate, evaluateIndex) in evaluateData"
				:key="evaluateIndex"
				:showBorderBottom="evaluateIndex != evaluateData.length - 1"
			></EvaluateCard>
		</view>
		<!-- 精选晒单 -->
		<TitleOperate :title="'精选晒单（' + topicData.length + '条）'" :backgroundColor="bgColor" titleSize="32rpx" align="center"></TitleOperate>
		<view class="topci-list">
			<!-- 瀑布流组件 -->
			<u-waterfall ref="topicWaterFall" v-model="topicData" marginLeft="7rpx" marginRight="7rpx">
				<template v-slot:left="{ leftList }">
					<PostCardSimple v-for="(item, index) in leftList" :key="index" :data="item"></PostCardSimple>
				</template>
				<template v-slot:right="{ rightList }">
					<PostCardSimple v-for="(item, index) in rightList" :key="index" :data="item"></PostCardSimple>
				</template>
			</u-waterfall>
			<view class="view-more"><u-button size="medium" shape="circle" plain @click="$u.route('/pages-community/pages/post/list')">查看全部</u-button></view>
		</view>
		<!-- 相关商品 -->
		<TitleOperate title="相关商品" :backgroundColor="bgColor" titleSize="32rpx" align="center"></TitleOperate>
		<view class="goods-list">
			<!-- 瀑布流组件 -->
			<u-waterfall ref="goodsWaterFall" v-model="goodsData" marginLeft="7rpx" marginRight="7rpx">
				<template v-slot:left="{ leftList }">
					<CardGoods v-for="(item, index) in leftList" :key="index" :data="item"></CardGoods>
				</template>
				<template v-slot:right="{ rightList }">
					<CardGoods v-for="(item, index) in rightList" :key="index" :data="item"></CardGoods>
				</template>
			</u-waterfall>
		</view>
		<!-- 商品详情 -->
		<TitleOperate title="商品详情" :backgroundColor="bgColor" titleSize="32rpx" align="center"></TitleOperate>
		<view class="details-html" v-html="goodsDetail.html"></view>
		<!-- 底部操作按钮 -->
		<GoodsOperate :data="goodsDetail" @addShoppingCart="addShoppingCart" @buyNow="buyNow"></GoodsOperate>
		<!-- 选择sku -->
		<GoodsSelectSku ref="GoodsSelectSku" @addShoppingCart="addShoppingCart" @buyNow="buyNow" @change="changeSku"></GoodsSelectSku>
	</view>
</template>

<script>
import TitleOperate from '@/components/title-operate.vue';
import ImgSwiper from '@/components/img-swiper.vue';
import GoodsInfo from '@/pages-mall/components/goods/goods-info.vue';
import GoodsSelect from '@/pages-mall/components/goods/goods-select.vue';
import GoodsOperate from '@/pages-mall/components/goods/goods-operate.vue';
import GoodsSelectSku from '@/pages-mall/components/goods/goods-select-sku.vue';
import EvaluateCard from '@/pages-mall/components/evaluate-card.vue';
import PostCardSimple from '@/pages/community/components/post-card-simple.vue';
import CardGoods from '@/pages/mall/components/card.vue';
import { topicList, goodsList } from '@/static/test-data.js';
export default {
	components: {
		TitleOperate,
		ImgSwiper,
		GoodsInfo,
		GoodsSelect,
		GoodsOperate,
		GoodsSelectSku,
		EvaluateCard,
		PostCardSimple,
		CardGoods
	},
	data() {
		return {
			// 商品类型，normal、points
			goodsType: 'normal',
			// 假数据
			goodsDetail: {
				sliderImageArr: [require('@/static/goods/11.png')],
				price: 378,
				sales: 650,
				oldPrice: 516,
				title: '戴森吹风机家用负离子护发专用大功率不伤发 家用负离子护发电吹风 HD08',
				html: "<img style='width:100%' src='https://s1.ax1x.com/2022/07/07/jdWfLn.png'></img>",
				isCollection: true,
				skuData: [
					{ label: 'HD08-普鲁士蓝防翘系列', value: '0' },
					{ label: 'HD08-紫红色防翘系列', value: '1' },
					{ label: 'HD08-中国红防翘系列', value: '2' },
					{ label: 'HD08-白色防翘系列', value: '3' }
				],
				pics: require('@/static/goods/11.png')
			},
			evaluateData: [{ star: 4, content: '非常好用!会推荐给家人', date: '2022-01-12', userName: '演示用户', pics: ['https://s1.ax1x.com/2022/07/07/jdWtRe.png'] }],
			// 精选晒单
			topicData: topicList,
			// 相关商品
			goodsData: goodsList,
			// 背景色
			bgColor: this.$appTheme.appThemeBgColor,
			// 已选择sku
			selectedSku: { label: '', value: 0 },
			// 已选择地址
			selectedAddress: ''
		};
	},
	onLoad(ops) {
		if (ops.goodsType) this.goodsType = ops.goodsType;
		this.getGoodsDetail();
	},
	methods: {
		// 查询商品详情
		getGoodsDetail() {
			this.selectedSku.label = this.goodsDetail.skuData[0].label;
			this.selectedSku.value = this.goodsDetail.skuData[0].value;
		},

		// 打开选择sku的弹窗
		openSkuPopup() {
			this.$refs.GoodsSelectSku.open(this.goodsDetail, this.selectedSku);
		},

		// 切换sku
		changeSku(e) {
			this.selectedSku.label = e.label;
			this.selectedSku.value = e.value;
		},

		// 加入购物车
		addShoppingCart() {
			this.openSkuPopup();
		},

		// 立即购买
		buyNow() {
			this.openSkuPopup();
		}
	}
};
</script>

<style lang="scss" scoped>
.evaluate-list,
.topci-list,
.goods-list {
	background-color: $app-theme-bg-color;
	padding: 0 30rpx 30rpx 30rpx;
	margin-bottom: 16rpx;
}
.details-html {
	background-color: $app-theme-bg-color;
	padding: 0 30rpx 30rpx 30rpx;
	margin-bottom: 100rpx;
}
.view-more {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 24rpx;
}
</style>
