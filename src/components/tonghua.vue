<template>
    <!-- <div>
      <h1>语音面试</h1>
      <div class="content">
        <p>房间号：{{ usingroomnumber }}</p>
        <button @click="startInterview">开始面试</button>
        <button @click="stopInterview">关闭面试</button>
      </div>
    </div> -->
    <div class="app-container">
    <h1 class="biaoti">语音面试</h1>
    <p >房间号：{{ usingroomnumber }}</p>
    <div class="content">
      
      <el-button class="start-button" type="primary" @click="startInterview">开始面试</el-button>
      <el-button class="stop-button" type="danger" @click="stopInterview">关闭面试</el-button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usingroomnumber: '',
        mediaStream: null,
        audioContext: null,
        audioSource: null
      };
    },
    mounted() {
      // 在页面加载时，从localStorage中获取usingroomnumber的值
      this.usingroomnumber = localStorage.getItem('usingroomnumber') || '';
    },
    methods: {
      startInterview() {
        // 调用麦克风并开始录音
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            this.mediaStream = stream;
            this.audioContext = new AudioContext();
            this.audioSource = this.audioContext.createMediaStreamSource(stream);
            // 在这里可以进行音频处理或录音操作
          })
          .catch(error => {
            console.error('无法访问麦克风', error);
          });
      },
      stopInterview() {
        // 关闭麦克风并停止录音
        if (this.mediaStream) {
          this.mediaStream.getTracks().forEach(track => {
            track.stop();
          });
          this.mediaStream = null;
          this.audioSource = null;
          this.audioContext.close();
          this.audioContext = null;
        }
        this.$message.success("本次面试已结束，3秒后将返回首页");
        
        setTimeout(() => {
    this.$router.push("shouye");
  }, 3000); // 延迟5秒执行页面跳转
      }
    }
  };
  </script>
  
  <style>
.content {
    margin-top: 20px;
    margin-top: 100px; /* 增加顶部间距 */
  margin-bottom: 30px; /* 增加底部间距 */
  }
  .app-container {
  background-color: #ffeeba; /* 这里设置淡黄色的背景色 */
  min-height: 100vh; /* 保证容器至少占据整个视口高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.biaoti {
  margin-bottom: 40px; /* 增加间隔 */
}
.start-button,
.stop-button {
  padding: 20px 50px; /* 增加按钮的内边距，调整按钮大小 */
  margin-top: 10px; /* 增加按钮之间的间隔 */
}
  </style>