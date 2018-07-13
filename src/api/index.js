
import instance from './api'

let preUrlPath = ''

export const querySmallApp = params => { return instance.post(`${preUrlPath}/admin/api/mini/1/querySmallApp`, params).then(res => res.data) }

export const queryMiniNavig = params => { return instance.post(`${preUrlPath}/admin/api/mini/1/queryMiniNavig`, params).then(res => res.data) }

export const addCardConfig = params => { return instance.post(`${preUrlPath}/pay/activity/addCardConfig`, params).then(res => res.data) }
