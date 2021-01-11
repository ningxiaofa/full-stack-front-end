import { get, post } from "../utils/http"
import base from "./base"

// 这里不存在跨域访问, 如果要解决跨域访问, 参见 src\components\ProxyDomex.jsx
const api = {
    getTBD() {
        return get(base.ownUrl +  base.TBD);
    },
    resgister(params) {
        return post(base.ownUrl +  base.resgister, params);
    },
    login(params) {
        return post(base.ownUrl +  base.login, params);
    }
}

export default api