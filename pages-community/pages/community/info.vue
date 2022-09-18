<template>
	<view class="page">
		<!-- 带tab的导航栏 -->
		<NvabarTabSearch ref="NvabarTabSearch" showBack :tabOps="['介绍', '成员']" showSlot @change="changeTab"></NvabarTabSearch>
		<!-- 介绍 -->
		<InfoCommunityDesc v-if="currentPage == 0"></InfoCommunityDesc>
		<!-- 成员 -->
		<InfoCommunityMember v-if="currentPage == 1"></InfoCommunityMember>
	</view>
</template>

<script>
import NvabarTabSearch from '@/components/navbar/navbar-tab-search.vue';
import InfoCommunityDesc from '@/pages-community/pages/community/info-community-desc.vue';
import InfoCommunityMember from '@/pages-community/pages/community/info-community-member.vue';
export default {
	components: {
		NvabarTabSearch,
		InfoCommunityDesc,
		InfoCommunityMember
	},
	data() {
		return {
			currentPage: 0
		};
	},
	onLoad(options) {
		if (options.type) {
			this.currentPage = options.type;
			this.$nextTick(() => {
				this.$refs.NvabarTabSearch.current = options.type;
			});
		}
	},
	methods: {
		// 切换tab
		changeTab(e) {
			this.currentPage = e;
		}
	}
};
</script>

<style></style>
