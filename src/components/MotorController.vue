<template>
  <div class="col">
    <label for="state"><slot name="motor"></slot></label>
    <p>State: {{ running ? 'ON' : 'OFF' }}</p>
    <button class="btn btn-info" @click="toggle">Toggle</button>
    <button class="btn btn-info" @mousedown="on" @mouseup="off">Pulse</button>
  </div>
</template>

<script>
export default {
  props: ['motor'],
  methods: {
    toggle () {
      this.running = !this.running
      this.$socket.emit(this.motor, this.running)
    },
    on () {
      this.running = true
      this.$socket.emit(this.motor, this.running)
    },
    off () {
      this.running = false
      this.$socket.emit(this.motor, this.running)
    }
  },
  data () {
    return {
      running: false
    }
  }
}
</script>
