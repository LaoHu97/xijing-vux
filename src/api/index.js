
import instance from './api'

let preUrlPath = ''

export const querySmallApp = params => { return instance.post(`${preUrlPath}/admin/api/mini/1/querySmallApp`, params).then(res => res.data) }
