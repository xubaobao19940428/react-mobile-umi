/**
 * 接口基础url
 */
const apiBaseUrl = {
	// 开发环境
	dev: {
		api: 'https://gateway.mehome.shop/', //接口地址
		file: 'https://cdn-hz.mehome.shop/', //文件地址
	},
	// 测试环境
	test: {
		api: 'https://gateway.mehome.shop/',
		file: 'https://octstream.melive.shop/',
	},
	// 线上环境
	pre: {
		api: 'https://gateway.melive.shop/',
		file: 'https://octstream.melive.shop/',
	},
	// 线上环境
	prod: {
		api: 'https://gateway.melive.shop/',
		file: 'https://octstream.melive.shop/',
	},
}

const env = process.env['UMI_ENV'] ? process.env['UMI_ENV'] : 'dev'

export default apiBaseUrl[env]
