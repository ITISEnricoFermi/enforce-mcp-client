<template>
<div class="plotter">
  <canvas class="chart" width="200" height="100" id="chart"></canvas>
</div>
</template>

<script>
import {
  SmoothieChart,
  TimeSeries
} from 'smoothie'

export default {
  name: 'plotter',
  mounted () {
    // Create a time series
    let series = new TimeSeries()

    // Find the canvas
    let canvas = document.getElementById('chart')
    canvas.width = (canvas.parentNode.parentNode.offsetWidth * 2) + 'px'
    canvas.height = (canvas.parentNode.offsetHeight * 2) + 'px'

    // Create the chart
    let chart = new SmoothieChart({
      millisPerPixel: 21,
      labels: {
        fontSize: 25
      },
      grid: {
        borderVisible: false
      },
      tooltip: true,
      // timestampFormatter: SmoothieChart.timeFormatter,
      responsive: true
    })
    chart.addTimeSeries(series, {
      strokeStyle: 'rgba(0, 255, 0, 1)',
      fillStyle: 'rgba(0, 255, 0, 0.2)',
      lineWidth: 4
    })

    chart.streamTo(canvas, 500)

    // Randomly add a data point every 500ms
    setInterval(function () {
      series.append(Date.now(), Math.random() * 10000)
    }, 500)
  }
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
