import request from '@/utils/request'
export function GetHeaderNav() {
  return request({
    url: '/v1/config/GetHeaderNav',
    method: 'post',
    params: []
  })
}
