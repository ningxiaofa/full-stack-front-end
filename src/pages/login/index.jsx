import React from 'react'
import Form from '../../components/form'
import api from '../../api'

export default function Login(props) {
    
    const formProps = {
        name: "Sign in",
        hasRemember: true,
        getParamsCallback: function (obj) {
            console.log(obj)
            // 思路:
            // 1.请求api [后端接口]
            // 2.根据请求情况, 决定视图显示 [成功: 重定向到Home页面, 失败, 停留原页面]
            api.login(obj)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // Redirect to home page
                props.history.push("/home");
            })
            .catch(error => {
                console.error(new Error(error))
            })
        }
    }

    return (
        <div className="container login-container">
            <h1>Welcome to Login!</h1>
            <Form {...formProps}/>
        </div>
    )
}