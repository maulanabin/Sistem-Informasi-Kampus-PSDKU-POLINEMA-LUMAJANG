import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";

const Login = (props) => {
  const { form, token, login, getUserInfo } = props;
  const { getFieldDecorator } = form;

  const [loading, setLoading] = useState(false);

  const handleLogin = (usernameOrEmail, password) => {
    setLoading(true);
    login(usernameOrEmail, password)
      .then((data) => {
        message.success("Login Berhasil");
        handleUserInfo(data.accessToken);
      })
      .catch((error) => {
        setLoading(false);
        message.error("Username atau password salah");
      });
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    // 对所有表单字段进行检验
    form.validateFields((err, values) => {
      // 检验成功
      if (!err) {
        const { usernameOrEmail, password } = values;
        handleLogin(usernameOrEmail, password);
      } else {
        console.log("Login Gagal!");
      }
    });
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <DocumentTitle title={"Login Pengguna"}>
      <div className="login-container">
        <Form onSubmit={handleSubmit} className="content">
          <div className="title">
            <h2>Login Pengguna</h2>
          </div>
          <Spin spinning={loading} tip="loading...">
            <Form.Item>
              {getFieldDecorator("usernameOrEmail", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Masukkan Username atau Email",
                  },
                ],
                initialValue: "admin",
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username/Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Masukkan Password",
                  },
                ],
                initialValue: "123456", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary" 
                style={{ background: "#2d2765", borderColor: "#f7e824" }}
                htmlType="submit"
                className="login-form-button"
              >
                Masuk
              </Button>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
