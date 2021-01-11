/**
 * 封装 get /post 请求
 */

import qs from "querystring"

export function get(url) {
    return fetch(url);
}

// url: string, params: {name: "iwen",...}
export function post(url, params) {
    return fetch(url, {
        // 大小写均可, 推荐统一风格, 个人偏向小写
        method: "post",
        headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept': 'application/json, text/plain, */*'
        },
        /**
         * {
         *  name: "william"
         * }
         * 
         * name=william
        */
       body: qs.stringify(params)
    })
}
