import ajax from './ajax'
const BASE_URL = 'http://localhost:3333'
const USER_API = '/api';
const MAIN_API = '/main';
const ADMIN_API = '/admin';

//获取验证码
export const reqCaptcha = () => ajax(BASE_URL + MAIN_API + '/getcaptcha', {}, 'GET')