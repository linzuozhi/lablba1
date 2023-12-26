<template>
    <!-- <div>
    
      <el-input type="text" id="roomNumber" v-model="roomNumber" placeholder="请输入房间号" />
      <el-button @click="submit1">提交并进入视频面试</el-button>
      <el-button @click="submit2">提交并进入语音面试</el-button>
    </div> -->
    <div class="app-container">
      
      <div class="header-container">
        <h1>面试选择</h1>
        <Header></Header>
    </div>
    <el-input type="text" id="roomNumber" v-model="roomNumber" placeholder="请输入房间号" />
    <div class="buttonss">
    <el-button @click="submit1" class="animated-button">提交并进入视频面试</el-button>
    <el-button @click="submit2" class="animated-button">提交并进入语音面试</el-button>
    </div>
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
   <style>
   .app-container {
     background-color: #ffeeba; /* 这里设置淡黄色的背景色 */
     min-height: 100vh; /* 保证容器至少占据整个视口高度 */
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
   }
   .animated-button {
   margin-top: 20px; /* 增加按钮之间的间隔 */
   transition: all 0.3s ease; /* 添加过渡动画效果 */
 }
 
 .animated-button:hover {
   background-color: #bafff9; /* 鼠标悬停时的背景色 */
 }
 #roomNumber {
    width: 50%;
}
 .buttonss {
   /* display: flex; */
   flex-direction: column;
   align-items: center;
 }
 .header-container {
   margin-bottom: 30px; /* 调整 Header 和输入框之间的下方间隔 */
 }
   </style>