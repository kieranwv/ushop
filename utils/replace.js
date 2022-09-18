/** 
 * 常用正则表达式替换方法
 * 
 * @replaceSale 月销量，超过一万的加上'w+'
 */

// 月销量，超过一万的加上'w+'

export const replaceSale = (sale) => {
	return sale > 10000 ? sale.replace(/\d{4}$/, 'w+') : sale
}
