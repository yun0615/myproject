import request from '@/utils/request';

export function GetWorkShopAPI() {
  return request({
    url: '/api/getWorkShops',
    method: 'get',
  });
}

export function GetWeatherAPI() {
  return request({
    url: '/api/getWeater',
    method: 'get',
  });
}
