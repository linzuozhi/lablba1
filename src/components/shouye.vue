<template>
    <div id="shouye">
        <h1>shouye</h1>
       <Header></Header>

        <el-button type="primary" @click="test">创建房间</el-button>
        <el-button type="primary" @click="test">加入面试</el-button>
        <el-button type="primary" @click="test1">登陆</el-button>
        <el-button type="primary" @click="test2">注册</el-button>
        <div>
    
  </div>
        <!-- <router-link to="/shouye/HelloWorld">HEllo</router-link>
        <router-view></router-view> -->
    </div>
</template>

<script>
import echarts from 'echarts'
import Header from "../components/header.vue"
import axios from 'axios'
export default {
    data() {
    return {
       roomnumber:""

    }
  },
  mounted() {
    
  },
  methods: {
    test(){
      this.$router.push("/interview");
    },
    test3(){
      this.$router.push("/interview");
    },
    test1(){
      this.$router.push("/login");
    },
    test2(){
      this.$router.push("/register");
    },
    createroom(){
      axios.post('http://localhost:8080/createroom', 1)
    .then(response => {
      // 将回复存储到localStorage
      localStorage.setItem('reply', response.data);
this.roomnumber=response.data;
this.$copyText(this.roomnumber);
this.$message.success(this.roomnumber);
this.$message.success("创建房间成功，房间好已经复制到粘贴板，将跳转至面试间");
this.$router.push("/interview");
      // console.log('请求已发送，并将回复存储到localStorage');
    })
    .catch(error => {
      console.error('请求发送失败', error);
    });
    }
  },
}
</script>
<style>
.shouye{


  background-color: aquamarine;
}
</style>