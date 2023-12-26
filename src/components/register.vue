<template>
    <!-- <div id="center">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender" id="sexy">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            :placeholder="ruleForm.password"
            type="password"
            show-password="true"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码" prop="password1">
          <el-input
            :placeholder="ruleForm.password1"
            type="password"
            show-password="true"
            v-model="ruleForm.password1"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <div class="app-container">
    
  
    <div id="center">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="150px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender" id="sexy">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            :placeholder="ruleForm.password"
            type="password"
            show-password="true"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码" prop="password1">
          <el-input
            :placeholder="ruleForm.password1"
            type="password"
            show-password="true"
            v-model="ruleForm.password1"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          account: "",
          name: "",
          major: "",
          gender: "",
          password: "",
          password1: "",
          grade: "",
        },
        rules: {
          account: [
            {
              required: true,
              message: "请输入您想要注册的账号",
              trigger: "blur",
            },
            {
              min: 8,
              max: 15,
              message: "长度在 8 到 15 个字符",
              trigger: "blur",
            },
          ],
          
          name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
          gender: [
            { required: true, message: "请选择您的性别", trigger: "change" },
          ],
          password: [
            {
              required: true,
              message: "请输入您想要注册的密码",
              trigger: "blur",
            },
            {
              pattern:
                /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,15}$/,
              message:
                "密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8 - 15位,密码不能包含用户名",
            },
          ],
          password1: [
            {
              required: true,
              message: "请再次输入您想要注册的密码",
              trigger: "blur",
            },
            { required: true, validator: validatePass2, trigger: "blur" },
          ],
        },
      };
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName){
      const url='http://localhost:8080/register';
      const data={
        username:this.ruleForm.account,
        password:this.ruleForm.password
      };
      axios.post(url,data)
      .then(response=>{
        this.$message.success("注册成功，即将跳转到登录页面");
        this.$router.push('login');
      })
      .catch(error=>{
        this.$message.error("注册失败！");
        console.error('注册失败',error);
      })
    }
    },
  };
  </script>
  <style>
  * {
    margin: 0;
    padding: 0;
  }
  .app-container {
  background-color: #ffeeba; /* 这里设置淡黄色的背景色 */
  min-height: 100vh; /* 保证容器至少占据整个视口高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  #center {
    width: 65%;
    margin: 5% 17.5% 0% 17.5%;
  }
  .el-form-item {
    text-align: center;
    /* margin-bottom: 20px; */
  }
  #sexy {
    text-align: left;
  }
   /* .el-form-item__error {
  text-align: left; 
  padding-left: 180px;
} */
.el-input__inner {
    width: 100%;
}
  </style>
  <!-- <style>
  * {
    margin: 0;
    padding: 0;
  }
  #center {
    width: 65%;
    margin: 5% 17.5% 0% 17.5%;
  }
  .el-form-item {
    text-align: center;
  }
  #sexy {
    text-align: left;
  }
  </style> -->