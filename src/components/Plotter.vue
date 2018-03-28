<template>
  <div>
    <button class="btn btn-secondary" @click="createCanvas">createCanvas</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: null,
      ctx: null
    }
  },
  created () {
  },
  methods: {
    createCanvas () {
      this.canvas = document.createElement('canvas')
      this.canvas.setAttribute('width', '800')
      this.canvas.setAttribute('height', '600')
      this.canvas.style.border = '1px solid #c3c3c3'
      document.lastChild.lastChild.appendChild(this.canvas)
      this.ctx = this.canvas.getContext('2d')
    }
  }
}
</script>
