<template>
<div class="radar" id="radar">
</div>
</template>

<script>

// import sketch from '@/../static/js/sketch.js'
import Radar from 'radar-p5'

export default {
  name: 'radar',
  data: () => {
    return {
      p5: 'ciao'
    }
  },
  sockets: {
    target (target) {
      target = JSON.parse(target)
      // const angle = (target.directionD / Math.PI) * 360
      this.p5.setTargetData(target.directionD, target.distance)
      console.log(target)
      console.log(this.p5.data)
    }
  },
  mounted () {
    this.p5 = new Radar('radar', {
      targetAngle: 24,
      targetDistance: 56
    })

    window.addEventListener('resize', () => {
      this.p5.updateSize()
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
