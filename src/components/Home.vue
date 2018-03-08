<template>
  <div class="container">
    <app-motor motor="left">
      <p slot="motor">Left motor</p>
    </app-motor>
    <app-motor motor="right">
      <p slot="motor">Right motor</p>
    </app-motor>
  </div>
</template>

<script>
import Motor from '@/components/MotorController.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    appMotor: Motor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin: 10px auto;
  }
</style>
