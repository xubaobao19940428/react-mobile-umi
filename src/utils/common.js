/**
 * 通用方法处理
 */
import baseUrl from '@/config/baseUrl'
/**
 *
 * @param {*} img 图片地址
 * @returns
 */
export const dealShowFileSrc = function (img) {
	if (img && img.indexOf('http') != -1) {
		return img
	}
	return img ? baseUrl['file'] + img : ''
}
/**
 * 过滤数据中为空的属性, 在vue的数据对象请求前的过滤
 * @param data
 * @returns data
 */

export const filterData = function (data) {
	let newData = JSON.parse(JSON.stringify(data))
	for (let item in newData) {
		if (!newData[item] && newData[item] !== 0) {
			delete newData[item]
		} else if (typeof newData[item] === 'string') {
			newData[item] = newData[item].trim()
		} else if (typeof newData[item] === 'object') {
			if (Object.keys(newData[item].length != 0)) {
				newData[item] = filterData(newData[item])
			} else {
				delete newData[item]
			}
		}
	}
	return newData
}
//时间戳转化为年/月/日 时:分:秒
export const timestampToTime = (timestamp) => {
	var date = new Date(Number(timestamp))
	var Y = date.getFullYear() + '-'
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
	var D = (date.getDate() + 1 <= 10 ? '0' + date.getDate() : date.getDate()) + ' '
	var h = (date.getHours() + 1 <= 10 ? '0' + date.getHours() : date.getHours()) + ':'
	var m = (date.getMinutes() + 1 <= 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
	var s = date.getSeconds() + 1 <= 10 ? '0' + date.getSeconds() : date.getSeconds()
	return Y + M + D + h + m + s
}
export const timestampToTimeHm = (timestamp) => {
	var date = new Date(Number(timestamp))

	var h = (date.getHours() + 1 <= 10 ? '0' + date.getHours() : date.getHours()) + ':'
	var m = date.getMinutes() + 1 <= 10 ? '0' + date.getMinutes() : date.getMinutes()

	return h + m
}
//不带十分秒和-
export const timestampToYear = (timestamp) => {
	var date = new Date(timestamp)
	var Y = date.getFullYear()
	var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	var D = date.getDate() + 1 <= 10 ? '0' + date.getDate() : date.getDate()
	return Y + M + D
}
//不带十分秒和-
export const timestampToDay = (timestamp) => {
	var date = new Date(timestamp)
	var Y = date.getFullYear()
	var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	var D = date.getDate() + 1 <= 10 ? '0' + date.getDate() : date.getDate()
	return Y + '/' + M + '/' + D
}
//时间转时间戳
export const timeTotimestamp = (val) => {
	var time = new Date(val)
	var timer = time.getTime()
	return timer
}
//对象数组去重
export const deleteObject = (obj) => {
	var uniques = []
	var stringify = {}
	for (var i = 0; i < obj.length; i++) {
		var keys = Object.keys(obj[i])
		keys.sort(function (a, b) {
			return Number(a) - Number(b)
		})
		var str = ''
		for (var j = 0; j < keys.length; j++) {
			str += JSON.stringify(keys[j])
			str += JSON.stringify(obj[i][keys[j]])
		}
		if (!stringify.hasOwnProperty(str)) {
			uniques.push(obj[i])
			stringify[str] = true
		}
	}
	uniques = uniques
	return uniques
}
