<template>
    <div>
    
      <el-input type="text" id="roomNumber" v-model="roomNumber" placeholder="请输入房间号" />
      <el-button @click="test1">提交并进入视频面试</el-button>
      <el-button @click="test2">提交并进入语音面试</el-button>
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
      submit() {
        
        axios.post('http://localhost:8080/enterroom', this.roomNumber)
    .then(response => {
      // 将回复存储到localStorage
      localStorage.setItem('usingroomnumber', this.roomNumber);



this.$message.success("进入房间成功，将跳转至房间页面");
this.$router.push("/mianshi");
      // console.log('请求已发送，并将回复存储到localStorage');
    })
    .catch(error => {
      console.error('请求发送失败', error);
    });
      }
    }
  };
  </script>