<template>
    <div id="shouye">
        <h1>欢迎使用无象面试系统</h1>


        <el-button type="primary" @click="createroom">创建房间</el-button>
        <el-button type="primary" @click="test">加入面试</el-button>

        <div>
    
  </div>
        <!-- <router-link to="/shouye/HelloWorld">HEllo</router-link>
        <router-view></router-view> -->
    </div>
</template>

<script>
import echarts from 'echarts'

import VueClipboard from 'vue-clipboard2';
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
      // this.$copyText("123");
      this.$router.push("/interview");
    },
    test3(){
      this.$router.push("/interview");
    },
   
    createroom(){
      axios.post('http://localhost:8080/createroom', 1)
    .then(response => {
      // 将回复存储到localStorage
      localStorage.setItem('reply', response.data);
this.roomnumber=response.data;
this.$copyText(this.roomnumber);
this.$message.success(this.roomnumber);
this.$message.success("创建房间成功，房间好已经复制到粘贴板，3秒将跳转至面试间");
setTimeout(() => {
  this.$router.push("/interview");
  }, 3000); 


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