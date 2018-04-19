<template>
<div class="radar" id="radar">
</div>
</template>

<script>

// import sketch from '@/../static/js/sketch.js'
import * as P5 from 'p5'
import Radar from '@/../static/js/radar.js'

export default {
  name: 'radar',
  mounted () {
    const p5 = new Radar(P5, 'radar', {
      targetAngle: 24,
      targetDistance: 56
    })

    window.addEventListener('resize', () => {
      p5.updateSize()
    })
  }
}
</script>

<style scoped lang="scss">
.radar {
  height: 100%;
  width: 100%;
}
</style>
