<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="物流详情"></Navbar>
		<!-- 商品卡片 -->
		<ExpressGoodsCard :data="orderInfo"></ExpressGoodsCard>
		<!-- 物流节点 -->
		<view class="express-points"><u-steps style="width: 100%;" :list="expressDotList" mode="dot" :current="expressDotCurrent"></u-steps></view>
		<!-- 物流详细节点 -->
		<view class="express-detail"><ExpressList :logisticsData="logisticsData"></ExpressList></view>
	</view>
</template>

<script>
import ExpressGoodsCard from '@/pages-mall/components/order/express-goods-card.vue';
import ExpressList from '@/pages-mall/components/express/list.vue';
import { setAttribute, changeAttribute } from '@/pages-mall/components/express/utils.js';
export default {
	components: {
		ExpressGoodsCard,
		ExpressList
	},
	data() {
		return {
			// 订单详情
			orderInfo: {},
			// 物流节点
			expressDotCurrent: 2,
			expressDotList: [{ name: '已发货' }, { name: '运输中' }, { name: '派件中' }, { name: '已签收' }],
			testStrList: ['在途', '揽收', '疑难', '签收', '退签', '派件', '退回', '转单', '待清关', '清关中', '已清关', '清关异常', '收件人拒签'],
			logisticsData: [
				{
					context:
						'客户签收人: 已签收 感谢使用圆通速递，期待再次为您服务 如有疑问请联系：xxxxxxxxx，投诉电话：020-xxxxxxxx。疫情期间圆通每天对网点多次消毒，快递小哥每天测量体温，佩戴口罩',
					time: '2021-02-28 10:04:59',
					ftime: '2021-02-28 10:04:59',
					status: '签收',
					areaCode: null,
					areaName: null,
					monthDay: '02-28',
					hourMinute: '10:04'
				},
				{
					context: '【广东省广州市海珠区工业大道公司】 派件中 派件人: 吴晓贤 电话 xxxxxxxxx 。 圆通快递小哥每天已测体温，请放心收寄快递 如有疑问，请联系：020-xxxxxxxx',
					time: '2021-02-28 08:25:15',
					ftime: '2021-02-28 08:25:15',
					status: '派件',
					areaCode: 'CNxxxxxxxxxxx',
					areaName: '广东,广州市,海珠区',
					monthDay: '02-28',
					hourMinute: '08:25'
				},
				{
					context: '【广东省广州市海珠区工业大道】 已发出',
					time: '2021-02-28 06:56:54',
					ftime: '2021-02-28 06:56:54',
					status: '在途',
					areaCode: null,
					areaName: null,
					monthDay: '02-28',
					hourMinute: '06:56'
				},
				{
					context: '【广东省广州市海珠区工业大道公司】 已收入',
					time: '2021-02-28 06:06:54',
					ftime: '2021-02-28 06:06:54',
					status: '在途',
					areaCode: 'CNxxxxxxxxxxx',
					areaName: '广东,广州市,海珠区',
					monthDay: '02-28',
					hourMinute: '06:06'
				},
				{
					context: '【广州转运中心】 已发出 下一站 【广东省广州市海珠区工业大道公司】',
					time: '2021-02-28 00:58:47',
					ftime: '2021-02-28 00:58:47',
					status: '在途',
					areaCode: 'CNxxxxxxxxxxxxx',
					areaName: '广东,广州市',
					monthDay: '02-28',
					hourMinute: '00:58'
				},
				{
					context: '【广州转运中心公司】 已收入',
					time: '2021-02-28 00:19:02',
					ftime: '2021-02-28 00:19:02',
					status: '在途',
					areaCode: 'CNxxxxxxxxxxxxx',
					areaName: '广东,广州市',
					monthDay: '02-28',
					hourMinute: '00:19'
				},
				{
					context: '【佛山转运中心】 已发出 下一站 【广州转运中心公司】',
					time: '2021-02-27 21:09:35',
					ftime: '2021-02-27 21:09:35',
					status: '在途',
					areaCode: 'CN440600000000',
					areaName: '广东,佛山市',
					monthDay: '02-27',
					hourMinute: '21:09'
				},
				{
					context: '【佛山转运中心公司】 已收入',
					time: '2021-02-27 21:06:51',
					ftime: '2021-02-27 21:06:51',
					status: '在途',
					areaCode: 'CN440600000000',
					areaName: '广东,佛山市',
					monthDay: '02-27',
					hourMinute: '21:06'
				},
				{
					context: '【广东省佛山市禅城】 已发出 下一站 【佛山转运中心公司】',
					time: '2021-02-27 19:42:05',
					ftime: '2021-02-27 19:42:05',
					status: '在途',
					areaCode: 'CN440604000000',
					areaName: '广东,佛山市,禅城区',
					monthDay: '02-27',
					hourMinute: '19:42'
				},
				{
					context: '【广东省佛山市南海市场部一部公司】 已收件 取件人: 陈xx (xxxxxxxxxxx)',
					time: '2021-02-27 19:38:46',
					ftime: '2021-02-27 19:38:46',
					status: '揽收',
					areaCode: null,
					areaName: null,
					monthDay: '02-27',
					hourMinute: '19:38'
				},
				{
					context: '【广东省佛山市禅城公司】 已收件 取件人: 吴xx (xxxxxxxxxxx)',
					time: '2021-02-27 14:36:42',
					ftime: '2021-02-27 14:36:42',
					status: '揽收',
					areaCode: null,
					areaName: null,
					monthDay: '02-27',
					hourMinute: '14:36'
				}
			]
		};
	},
	onLoad() {
		this.orderInfo = uni.getStorageSync('orderInfo');
		this.logisticsData = changeAttribute(this.testStrList, setAttribute(this.logisticsData));
	}
};
</script>

<style lang="scss" scoped>
.express-points {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 60rpx 30rpx;
	background-color: $app-theme-bg-color;
	margin-bottom: 24rpx;
}
.express-detail {
	background-color: $app-theme-bg-color;
}
</style>
