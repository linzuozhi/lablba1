<template>
    <!-- <div class="loginWindow">
      <header>登录</header>
      <div class="body">
        <div>
          <span>账号</span>
          <el-input
            v-model="username"
            placeholder="请输入账号"
            class="tAcc"
          ></el-input>
        </div>
        <div>
          <span class="pa">密码</span>
          <el-input
            class="pas"
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
      </div>
      <div class="bot">
        <div class="confirm" @click="submit">确认</div>
        <span class="register" @click=test
          >注册新账号</span
        >
      </div>
    </div> -->
    <div class="app-container">
    <div class="loginWindow">
      <header>登录</header>
      <div class="body">
        <div>
          <span>账号</span>
          <el-input
            v-model="teacherAccount"
            placeholder="请输入账号"
            class="tAcc"
          ></el-input>
        </div>
        <div>
          <span class="pa">密码</span>
          <el-input
            class="pas"
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
      </div>
      <div class="bot">
        <div class="confirm">确认</div>
        <span class="register" @click=test
          >注册新账号</span
        >
      </div>
    </div>
  </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        password: "",
        username: "",
      };
    },
    mounted() {
      if (window.history && window.history.pushState) {
        window.onpopstate = function () {
          window.history.pushState("forward", null, "");
          window.history.forward(1);
        };
      }
      window.history.pushState("forward", null, ""); //在IE中必须得有这两行
      window.history.forward(1);
    },
    methods: {
      test(){
this.$router.push("register")
      },
      submit(){
        const url = 'http://localhost:8080/login'; // 后端登录接口的URL
  const data = {
    username: this.username,
    password: this.password
  };

  axios.post(url, data)
    .then(response => {
      // 登录成功，执行页面跳转
      this.$message.success("登陆成功，将进入首页");
      localStorage.setItem('username', this.username);
      this.$router.push('shouye');
    })
    .catch(error => {
      // 登录失败，处理错误情况
      this.$message.error("登陆失败！"),
      console.error('登录失败', error);
    });
      }
    },
  };
  </script>
  <!-- <style>
  * {
    margin: 0;
    padding: 0;
  }
  .loginWindow {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 400px;
    width: 700px;
    margin-top: -200px;
    margin-left: -350px;
    background-color: white;
  }
  header {
    width: 100%;
    height: 15%;
    line-height: 60px;
    text-align: center;
    font-size: 25px;
    border-bottom: 1px solid black;
  }
  .body {
    overflow: hidden;
    width: 100%;
    height: 70%;
    font-size: 20px;
  }
  .body div:nth-child(1) {
    overflow: hidden;
    position: relative;
    margin: 56px 0;
    height: 20%;
  }
  .body div:nth-child(1) span {
    position: absolute;
    left: 3%;
    top: 0;
    width: 8%;
    height: 100%;
    line-height: 56px;
    text-align: center;
  }
  .tAcc {
    position: absolute;
    left: 12%;
    top: 0;
    height: 100%;
    width: 85%;
    margin-top: 8.5px;
  }
  .body div:nth-child(2) {
    position: relative;
    margin-bottom: 56px;
    height: 20%;
  }
  .body div:nth-child(2) .pa {
    position: absolute;
    left: 3%;
    top: 0;
    width: 8%;
    height: 100%;
    line-height: 56px;
    text-align: center;
  }
  .pas {
    position: absolute;
    left: 12%;
    top: 0;
    height: 100%;
    width: 85%;
    margin-top: 8.5px;
  }
  .bot {
    position: relative;
    width: 100%;
    height: 15%;
    border-top: 1px solid black;
  }
  .confirm {
    position: absolute;
    left: 50%;
    top: 12%;
    width: 80px;
    height: 76%;
    margin-left: -40px;
    line-height: 45.6px;
    text-align: center;
    border-radius: 22.8px;
    border-width: 1px;
    border-style: solid;
    background-color: orange;
    color: white;
  }
  .confirm:hover {
    background-color: rgb(255, 165, 0, 0.8);
    cursor: pointer;
  }
  .confirm:active {
    background-color: rgb(255, 165, 0);
  }
  .register {
    position: absolute;
    right: 5%;
    top: 20%;
    height: 60%;
    line-height: 36px;
  }
  .register:hover {
    color: grey;
    cursor: pointer;
  }
  .register:active {
    color: black;
  }
  </style> -->
  <style>
  * {
    margin: 0;
    padding: 0;
  }
  .app-container {
    background-color: #ffeeaf; /* 这里设置淡黄色的背景色 */
    min-height: 100vh; /* 保证容器至少占据整个视口高度 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .loginWindow {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 400px;
    width: 700px;
    margin-top: -200px;
    margin-left: -350px;
    background-color: white;
  }
  header {
    width: 100%;
    height: 15%;
    line-height: 60px;
    text-align: center;
    font-size: 25px;
    border-bottom: 1px solid black;
  }
  .body {
    overflow: hidden;
    width: 100%;
    height: 70%;
    font-size: 20px;
  }
  .body div:nth-child(1) {
    overflow: hidden;
    position: relative;
    margin: 56px 0;
    height: 20%;
  }
  .body div:nth-child(1) span {
    position: absolute;
    left: 3%;
    top: 0;
    width: 8%;
    height: 100%;
    line-height: 56px;
    text-align: center;
  }
  .tAcc {
    position: absolute;
    left: 12%;
    top: 0;
    height: 100%;
    width: 85%;
    margin-top: 8.5px;
  }
  .body div:nth-child(2) {
    position: relative;
    margin-bottom: 56px;
    height: 20%;
  }
  .body div:nth-child(2) .pa {
    position: absolute;
    left: 3%;
    top: 0;
    width: 8%;
    height: 100%;
    line-height: 56px;
    text-align: center;
  }
  .pas {
    position: absolute;
    left: 12%;
    top: 0;
    height: 100%;
    width: 85%;
    margin-top: 8.5px;
  }
  .bot {
    position: relative;
    width: 100%;
    height: 15%;
    border-top: 1px solid black;
  }
  .confirm {
    position: absolute;
    left: 50%;
    top: 12%;
    width: 80px;
    height: 76%;
    margin-left: -40px;
    line-height: 45.6px;
    text-align: center;
    border-radius: 22.8px;
    border-width: 1px;
    border-style: solid;
    background-color: orange;
    color: white;
  }
  .confirm:hover {
    background-color: rgb(255, 165, 0, 0.8);
    cursor: pointer;
  }
  .confirm:active {
    background-color: rgb(255, 165, 0);
  }
  .register {
    position: absolute;
    right: 5%;
    top: 20%;
    height: 60%;
    line-height: 36px;
  }
  .register:hover {
    color: grey;
    cursor: pointer;
  }
  .register:active {
    color: black;
  }
  </style>