//调用数据接口
import ajax from './ajax'
const BASE_URL = 'http://localhost:3000'
const USER_API = '/api';

//注册
export const reqRegist=(data)=> ajax(BASE_URL+USER_API+'/user/regist',{data},'POST')
