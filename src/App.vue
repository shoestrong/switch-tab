<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <switch-tab :items="list" :options="options"></switch-tab>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import switchTab from './lib/switch-tab/lib/index'

export default {
  name: 'App',
  components: {
    switchTab
    // HelloWorld
  },
  data() {
    return {
      options: {
        lineWidth: 2,
        activeColor: '#f0f',
        fixBottom: false,
        value: 0,
        additionalX: 200, // 近似等于超出边界时最大可拖动距离(px);
        reBoundExponent: 10, // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
        sensitivity: 1000, // 灵敏度(惯性滑动时的灵敏度,值越小，阻力越大),可近似认为速度减为零所需的时间(ms);
        reBoundingDuration: 360
      },
      list: [
        {
          label: '第一'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        },
        {
          label: '第二'
        }
      ]
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
