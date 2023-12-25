
<template>
    <div>
      <h1>视频面试</h1>
      <div class="content">
        <p>房间号：{{ usingroomnumber }}</p>
        <div class="camera">
          <video ref="videoRef" autoplay></video>
        </div>
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
        mediaStream: null
      };
    },
    mounted() {
      // 在页面加载时，从localStorage中获取usingroomnumber的值
      this.usingroomnumber = localStorage.getItem('usingroomnumber') || '';
    },
    methods: {
      startInterview() {
        // 在此处调用摄像头并在框内显示摄像头内容
        const videoElement = this.$refs.videoRef;
        const constraints = { video: true };
  
        navigator.mediaDevices.getUserMedia(constraints)
          .then(stream => {
            videoElement.srcObject = stream;
            this.mediaStream = stream;
          })
          .catch(error => {
            console.error('无法访问摄像头', error);
          });
      },
      stopInterview() {
        // 停止摄像头流的获取
        if (this.mediaStream) {
          this.mediaStream.getTracks().forEach(track => {
            track.stop();
          });
        }
      }
    }
  };
  </script>
  
  <style>
  .content {
    margin-top: 20px;
  }
  
  .camera {
    width: 400px;
    height: 300px;
    border: 1px solid black;
  }
  </style>
<!-- <template>
    <div>
      <h1>面试页面</h1>
      <div class="content">
        <p>房间号：{{ usingroomnumber }}</p>
        <div class="camera">
          <video ref="videoRef" autoplay></video>
          <canvas ref="canvasRef"></canvas>
        </div>
        <button @click="startInterview">开始面试</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usingroomnumber: ''
      };
    },
    mounted() {
      // 在页面加载时，从localStorage中获取usingroomnumber的值
      this.usingroomnumber = localStorage.getItem('usingroomnumber') || '';
    },
    methods: {
      startInterview() {
        // 在此处调用摄像头并在框内显示摄像头内容
        const videoElement = this.$refs.videoRef;
        const canvasElement = this.$refs.canvasRef;
        const constraints = { video: true };
  
        navigator.mediaDevices.getUserMedia(constraints)
          .then(stream => {
            videoElement.srcObject = stream;
            const videoTrack = stream.getVideoTracks()[0];
            const videoSettings = videoTrack.getSettings();
            const { width, height } = videoSettings;
            canvasElement.width = width;
            canvasElement.height = height;
  
            const canvasContext = canvasElement.getContext('2d');
            setInterval(() => {
              canvasContext.drawImage(videoElement, 0, 0, width, height);
            }, 100);
          })
          .catch(error => {
            console.error('无法访问摄像头', error);
          });
      }
    }
  };
  </script>
  
  <style>
  .content {
    margin-top: 20px;
  }
  
  .camera {
    width: 400px;
    height: 300px;
    border: 1px solid black;
  }
  </style> -->