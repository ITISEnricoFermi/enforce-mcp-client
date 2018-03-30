<template>
  <div>
    <div id="myData"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plotterData: {
        x: [],
        y: [],
        type: 'scatter'
      },
      start: null
    }
  },
  created () {
    this.start = new Date().getTime()
  },
  sockets: {
    data (da) {
      this.plotterData.x.push(new Date(new Date().getTime() - this.start).getTime()/1000)
      this.plotterData.y.push(da)
      var data = [this.plotterData]
      // eslint-disable-next-line
      Plotly.newPlot("myData", data)
    }
  },
  methods: {}
}
</script>
