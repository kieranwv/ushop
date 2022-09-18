/** 
 * 基于uniapp的api进行二次封装，便于全局管理
 * 
 * @copyByUniappApi 全局复制到剪贴板方法
 */

// 全局复制到剪贴板方法
export const copyByUniappApi = (data, msg = '已复制到剪贴板') => {
	uni.setClipboardData({
		data: data.toString(),
		success: function() {
			uni.showToast({
				title: msg,
				icon: 'none'
			});
		}
	});
}
