<template>
  <div id="app" style="width: 100%; height: 100vh">
    
    <router-link to="/shouye">shouye </router-link><br>
    <router-link to="/r1">Rr1 </router-link><br>
    <router-link to="/r2">Rr2 </router-link>
    
    <router-view></router-view>
    <!-- <chatgpt></chatgpt> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import chatgpt from './components/chatgpt.vue'
import axios from 'axios'
import * as THREE from 'three'//导入样式
import BIRDS from 'vanta/src/vanta.birds'//导入动态样式逻辑
export default {
  
  name: 'App',
  components: {
    // HelloWorld
    chatgpt
  },
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
     // 修改颜色时 cells 需要全大写字母 可生效
    VANTA.BIRDS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 14381274,
      color2: 16443110,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
//   created(){
//   axios.get("http://localhost:8080/hello").then(function(response){console.log(response);})
 
//  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: aqua; */
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
