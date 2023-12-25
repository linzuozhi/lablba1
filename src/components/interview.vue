<template>
    <div>
    
      <el-input type="text" id="roomNumber" v-model="roomNumber" placeholder="请输入房间号" />
      <el-button @click="submit1">提交并进入视频面试</el-button>
      <el-button @click="submit2">提交并进入语音面试</el-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        roomNumber: ''
      };
    },
    methods: {
        test1(){
            this.$router.push("/mianshi"); 
        },
        test2(){
            this.$router.push("/tonghua"); 
        },
      submit1() {       
        axios.post('http://localhost:8080/enterroom', this.roomNumber)
    .then(response => {
      // 将回复存储到localStorage
      localStorage.setItem('usingroomnumber', this.roomNumber);
this.$message.success("进入房间成功，将跳转至视频面试房间");
this.$router.push("/mianshi");
    })
    .catch(error => {
      console.error('请求发送失败', error);
    });
      },
      submit2() {       
        axios.post('http://localhost:8080/enterroom', this.roomNumber)
    .then(response => {
      // 将回复存储到localStorage
      localStorage.setItem('usingroomnumber', this.roomNumber);
this.$message.success("进入房间成功，将跳转至视频面试房间");
this.$router.push("/tonghua");
    })
    .catch(error => {
      console.error('请求发送失败', error);
    });
      }
    }
  };
  </script>