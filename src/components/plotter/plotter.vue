<template>
<div class="plotter">
  <canvas class="chart" width="200" height="100" :id="'chart' + data"></canvas>
</div>
</template>

<script>
import {
  SmoothieChart,
  TimeSeries
} from 'smoothie'

import {
  eventBus
} from '@/main'

export default {
  name: 'plotter',
  props: ['data', 'color', 'max', 'min'],
  data: () => {
    return {
      timeSerie: new TimeSeries()
    }
  },
  mounted () {
    // Find the canvas
    let canvas = document.getElementById('chart' + this.data)
    canvas.width = (canvas.parentNode.parentNode.offsetWidth * 2) + 'px'
    canvas.height = (canvas.parentNode.offsetHeight * 2) + 'px'

    // Create the chart
    let chart = new SmoothieChart({
      millisPerPixel: 40,
      labels: {
        fontSize: 25
      },
      grid: {
        borderVisible: false
      },
      tooltip: true,
      // timestampFormatter: SmoothieChart.timeFormatter,
      responsive: true,
      maxValue: this.max,
      minValue: this.min
    })

    chart.streamTo(canvas, 1000)

    chart.addTimeSeries(this.timeSerie, {
      strokeStyle: 'rgba(0, 255, 0, 1)',
      fillStyle: 'rgba(0, 255, 0, 0.2)',
      lineWidth: 4
    })

    let self = this

    eventBus.$on(`${this.data}`, (data) => {
      // console.log(data)
      console.log('Data:', data)
      self.timeSerie.append(Date.now(), data)
    })

    // chart.addTimeSeries(this.humidityTimeSerie, {
    //   strokeStyle: 'rgba(22, 255, 255, 1)',
    //   fillStyle: 'rgba(22, 255, 255, 0.2)',
    //   lineWidth: 4
    // })
    //
    // chart.addTimeSeries(this.pressureTimeSerie, {
    //   strokeStyle: 'rgba(255,68,71, 1)',
    //   fillStyle: 'rgba(255,68,71, 0.2)',
    //   lineWidth: 4
    // })

    // Randomly add a data point every 500ms
    // setInterval(function () {
    //   temperature.append(Date.now(), Math.random() * 10000)
    // }, 500)
  }
  // sockets: {
  //   temperature (temp) {
  //     this.temperatureTimeSerie.append(Date.now(), temp)
  //   },
  //   humidity (humi) {
  //     this.humidityTimeSerie.append(Date.now(), humi)
  //   },
  //   pressure (press) {
  //     this.pressureTimeSerie.append(Date.now(), press)
  //   }
  // }
  // ready () {
  //   window.addEventListener('resize', () => {
  //     let canvas = document.getElementById('chart')
  //
  //     canvas.style.width = canvas.parentNode.offsetWidth + 'px'
  //     canvas.style.height = canvas.parentNode.offsetHeight + 'px'
  //   })
  // },
  // beforeDestroy () {
  //   window.removeEventListener('resize', () => {
  //     let canvas = document.getElementById('chart')
  //
  //     canvas.style.width = canvas.parentNode.offsetWidth + 'px'
  //     canvas.style.height = canvas.parentNode.offsetHeight + 'px'
  //   })
  // }
}
</script>

<style scoped lang="scss">
.plotter {
    width: 100%;
    background-color: $color-black;
    height: 20rem;
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 0 0 2rem rgba(0,0,0,0.5);

    .chart {
        padding: 0;
        width: 200%;
        height: 200%;
    }

}
</style>
