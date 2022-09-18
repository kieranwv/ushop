import Vue from 'vue';
export const setAttribute = function(data) {
	if (Array.isArray(data) && data.length > 0) {
		return data.map((item, index) => {
			Vue.set(item, 'isFirstNode', false)
			return item
		})
	} else {
		return []
	}
}

export const changeAttribute = function(testStrList, targetList) {
	let cacheData = targetList;
	testStrList.forEach((item, index) => {
		let result_Index = targetList.findIndex(function(f_item, f_index) {
			return String(f_item.status) == item
		})
		if (result_Index != -1) {
			cacheData[result_Index].isFirstNode = true;
		}
	})
	return cacheData;
}

export default {
	setAttribute,
	changeAttribute
}
