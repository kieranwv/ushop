<template>
	<view class="page">
		<Navbar title="选择城市"></Navbar>
		<view class="now">
			<view class="anchor" style="padding-bottom: 24rpx;">定位</view>
			<Tag @click="changeNowCity(nowCity)">{{ nowCity || '' }}</Tag>
		</view>
		<u-index-list :scrollTop="scrollTop" :indexList="indexList">
			<view v-for="(item, index) in cityList" :key="index">
				<u-index-anchor :index="item.title" :use-slot="true">
					<text class="anchor">{{ item.title }}</text>
				</u-index-anchor>
				<Tag v-for="(city, cur) in item.lists" :key="cur" @click="changeNowCity(city)">{{ city }}</Tag>
			</view>
		</u-index-list>
	</view>
</template>

<script>
// 主题
import appTheme from '@/theme.scss';
// 数据源
import cityList from '@/static/city-list.json';
// 组件
import Tag from '@/components/tag.vue';
export default {
	components: {
		Tag
	},
	data() {
		return {
			nowCity: '',
			scrollTop: 0,
			indexList: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			cityList: []
		};
	},
	onLoad(ops) {
		this.nowCity = ops.nowCity;
		this.cityList = [cityList.hotcity, ...cityList.city];
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	methods: {
		changeNowCity(e) {
			uni.setStorageSync('NOW_SELECTED_CITY', e);
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	padding: 24rpx;
	background-color: $app-theme-bg-color !important;
}
.anchor {
	font-size: 32rpx;
	font-weight: 400;
	color: $app-theme-text-gray-color;
}
/deep/.u-index-anchor {
	background-color: $app-theme-bg-color !important;
	padding: 0 0 24rpx 0 !important;
}
</style>
