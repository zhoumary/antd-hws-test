import {request} from '../utils/request';

export const getMenus = (username:string, password:string, id:number) => {
    return request({
        url:    '/api/v1/menus/' + id,
        method: 'GET',
        auth: {
            username: username,
            password: password
        }
    });
}