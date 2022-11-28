import request from './request'
/**
 * 
 * @param {*} data 获取大神榜单
 * @returns 
 */
export function getExpertLatestRecordList(data) {
    return request({
        serverName: 'lvyinfu',
        interfaceName: 'com.lvyinfu.api.service.ExpertLatestRecordApiService',
        methodName: 'getExpertLatestRecordList',
        data: data,
    })
}