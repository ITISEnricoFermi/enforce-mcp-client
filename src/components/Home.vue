<template>
  <div class="container">
    <app-motor motor="left">
      <p slot="motor">Left motor</p>
    </app-motor>
    <app-motor motor="right">
      <p slot="motor">Right motor</p>
    </app-motor>
    <app-plotter>
    </app-plotter>
  </div>
</template>

<script>
import Motor from '@/components/MotorController.vue'
import Plotter from '@/components/Plotter.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    appMotor: Motor,
    appPlotter: Plotter
  }
}
</script>

<style>

</style>
