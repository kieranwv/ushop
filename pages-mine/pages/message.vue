<template>
	<view class="page">
		<!-- 一般导航栏 -->
		<Navbar title="我的消息"></Navbar>
		<!-- tab -->
		<IconLabelNav :ops="tabOps" @change="changeTab"></IconLabelNav>
		<!-- list -->
		<view class="list">
			<scroll-view scroll-y="true" style="height: calc(100vh - 350rpx);">
				<view class="" v-for="(msgCommunity, i) in communityList" :key="i">
					<view class="card " v-if="currentTab == 0">
						<view class="date">{{ msgCommunity.time }}</view>
						<view class="inner community">
							<u-avatar size="100" src="../../../static/user/1.png"></u-avatar>
							<view class="right">
								<view class="info">
									<view class="name">{{ msgCommunity.name }}</view>
									<view class="time">刚刚</view>
								</view>
								<view class="content">{{ msgCommunity.content }}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="" v-for="(msgSystem, j) in systemList" :key="j">
					<view class="card " v-if="currentTab == 1">
						<view class="date">{{ msgSystem.time }}</view>
						<view class="inner system">
							<view class="title">系统消息</view>
							<view class="content">
								<text>盛夏来袭全民动起来系统消息系统消息盛夏来袭全民动起来系统消息系统消息盛夏来袭全民动起来系统消</text>
								<text>点击查看>></text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import IconLabelNav from '@/components/nav/icon-label-nav.vue';
export default {
	components: {
		IconLabelNav
	},
	data() {
		return {
			// tab 配置
			currentTab: 0,
			tabOps: [
				{ label: '社区消息', icon: require('@/pages-mine/static/message-community.png'), iconActive: require('@/pages-mine/static/message-community-active.png') },
				{ label: '系统消息', icon: require('@/pages-mine/static/message-system.png'), iconActive: require('@/pages-mine/static/message-system-active.png') }
			],
			// 假数据
			communityList: [
				{
					time: '2021-07-21',
					name: '演示用户2',
					content: '点赞了你的帖子“吃好睡好身体的额好'
				},
				{
					time: '2021-07-21',
					name: '演示用户3',
					content: '点赞了你的帖子“吃好睡好身体的额好'
				},
				{
					time: '2021-07-21',
					name: '演示用户4',
					content: '点赞了你的帖子“吃好睡好身体的额好'
				}
			],
			systemList: [
				{
					time: '2021-07-21'
				},
				{
					time: '2021-07-21'
				},
				{
					time: '2021-07-21'
				}
			]
		};
	},
	methods: {
		// 切换tab
		changeTab(e) {
			this.currentTab = e.index;
		}
	}
};
</script>

<style lang="scss" scoped>
.list {
	.card {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		.date {
			font-size: 14px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: $app-theme-shop-gray-color;
			margin-bottom: 16rpx;
			text-align: center;
		}

		.inner {
			margin: 30rpx;
			padding: 30rpx;
			background-color: $app-theme-bg-color;
			box-shadow: $app-theme-shadow;
			border-radius: 16rpx;
			.right {
				width: 80%;
				margin-left: 20rpx;
			}
			.info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				margin-bottom: 20rpx;
				.name {
					font-size: 28rpx;
					color: $app-theme-text-black-color;
				}
				.time {
					font-size: 24rpx;
					color: $app-theme-shop-gray-color;
				}
			}
			.content {
				font-size: 24rpx;
				color: $app-theme-shop-gray-color;
			}
		}
		.inner.community {
			display: flex;
			align-items: center;
			.content {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.inner.system {
			.title {
				font-size: 28rpx;
				color: $app-theme-text-black-color;
				margin-bottom: 20rpx;
			}
			.content {
				text:nth-child(2) {
					font-size: 24rpx;
					color: $app-theme-color;
					margin-left: 20rpx;
				}
			}
		}
	}
}
</style>
