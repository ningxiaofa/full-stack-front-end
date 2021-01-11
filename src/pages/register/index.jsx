import React from "react";
import Form from "../../components/form";
import qs from "querystring"; // 来自于nodeJS

export default function Register(props) {
  //   console.log(props);
  const formProps = {
    name: "Sign up",
    hasRemember: false,
    getParamsCallback: function (obj) {
      console.log(obj);
      // 思路:
      // 1.验证参数 -- 放在 Form组件中做
      // 2.发送请求api[插入数据库] -- 后端api
      // 3.根据响应结果进行处理, 成功, 则跳转到 Login页面[能否直接跳到Home页面, 问题: 会话怎么处理?], 失败则停留注册页面, 提示注册失败, 请重新/稍后再试!

      // Just for mock[该api不存在跨域问题],
      fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plAnimation,*/*",
          "Content-type": "application/x-www-form-urlencoded",
        },
        // 对象类型: 输出报错: {success: false, msg: "参数缺失，请传递完整参数", msg_code: 10001} 就是参数的问题
        // body: {
        //     user_id: "iwen@qq.com",
        //     password: "iwen123",
        //     verification_code: "crfvw"
        // }
        // 字符串类型, 正确方式[缺点手动拼接]
        // body: "user_id=iwen@qq.com&password=iwen123&verification_code=crfvw",
        // 优化, 仍然使用对象, 借助库去解析 或者自己去写一个函数去拼接
        body: qs.stringify({
          user_id: "iwen@qq.com",
          password: "iwen123",
          verification_code: "crfvw",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          props.history.push("/login");
        })
        .catch((error) => {
          console.log(new Error(error));
        });
    },
  };

  return (
    <div className="container register-container">
      <h1>Welcome to Register!</h1>
      <Form {...formProps} />
    </div>
  );
}
