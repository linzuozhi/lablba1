<template>
    <div>
    
      <input type="text" id="roomNumber" v-model="roomNumber" placeholder="请输入房间号" />
      <button @click="test">提交</button>
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
        test(){
            this.$router.push("/mianshi"); 
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