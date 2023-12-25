<template>
    <div>
      <h1>面试页面</h1>
      <div class="content">
        <p>房间号：{{ usingroomnumber }}</p>
        <button @click="startInterview">开始面试</button>
        <button @click="stopInterview">关闭面试</button>
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
      }
    }
  };
  </script>
  
  <style>
  .content {
    margin-top: 20px;
  }
  </style>