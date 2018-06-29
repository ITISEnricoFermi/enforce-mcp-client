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
        fontSize: 16
      },
      grid: {
        borderVisible: false,
        fillStyle: '#282828'
      },
      tooltip: true,
      // timestampFormatter: SmoothieChart.timeFormatter,
      responsive: true,
      maxValue: this.max,
      minValue: this.min
    })

    chart.streamTo(canvas, 1000)

    chart.addTimeSeries(this.timeSerie, {
      strokeStyle: `rgba(${this.color}, 1)`,
      fillStyle: `rgba(${this.color}, 0.2)`,
      lineWidth: 4
    })

    let self = this

    eventBus.$on(`${this.data}`, (data) => {
      self.timeSerie.append(Date.now(), data)
    })
  }
}
</script>

<style scoped lang="scss">
.plotter {
    width: 100%;
    background-color: $color-grey-2;
    height: 20rem;
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 0 0 2rem rgba(0,0,0,0.5);

    .chart {
        padding: 0;
        width: 100%;
        height: 100%;
    }

}
</style>
