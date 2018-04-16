<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  sockets: {
    connect () {
      console.log('Connected.')
    },
    disconnect () {
      console.log('Connection lost.')
    },
    data (data) {
      console.log(data)
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
