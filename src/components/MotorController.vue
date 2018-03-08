<template>
  <div>
    <label for="state"><slot name="motor"></slot></label>
    <p>State: {{ running ? 'ON' : 'OFF' }}</p>
    <span><button @click="toggle"><p>Toggle</p></button></span>
    <span><button @mousedown="on" @mouseup="off"><p>Pulse</p></button></span>
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
