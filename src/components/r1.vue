<template>
   <div>
     <input type="text" v-model="username">
     <button @click="saveData">保存</button>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       username: ''
     };
   },
 
   methods: {
     saveData() {
       // 将数据保存到本地存储中
       localStorage.setItem('username', this.username.toString());
     }
   }
 };
 </script>