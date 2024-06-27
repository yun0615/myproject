import request from '@/utils/request';

export function GetWorkShopAPI(data) {
  return request({
    url: '/api/getWorkShops',
    method: 'post',
    data,
  });
}

export function GetWeatherAPI() {
  return request({
    url: '/api/getWeater',
    method: 'post',
  });
}
