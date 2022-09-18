<template>
	<view class="slot"><u-swiper height="750" border-radius="0" indicator-pos="bottomRight" mode="number" :list="list"></u-swiper></view>
</template>

<script>
export default {
	name: 'goods-img-swiper',
	props: {
		list: {
			type: Array,
			default: () => {
				return [];
			}
		},
	}
};
</script>

<style></style>
