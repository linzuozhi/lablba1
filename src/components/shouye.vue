<template>
    <div id="shouye">
        <h1>shouye</h1>
        <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <!-- <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" ></el-checkbox> -->
  </el-checkbox-group>
        <el-button type="primary" @click="test"></el-button>
        <div>
    <div ref="chart" style="width: 100%; height: 400px;align-items: center;"></div>
  </div>
        <!-- <router-link to="/shouye/HelloWorld">HEllo</router-link>
        <router-view></router-view> -->
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
    return {
        checkList: [],
        chartData: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    

    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
        const chart = echarts.init(this.$refs.chart)
      chart.setOption(this.chartData)
    },
    test(){

        console.log(JSON.stringify(this.checkList));
    }
  },
}
</script>
<style>
.shouye{


  background-color: aquamarine;
}
</style>