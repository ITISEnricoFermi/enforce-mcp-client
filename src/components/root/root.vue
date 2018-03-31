<template>
  <main id="app" class="main__root">
    <section class="panel">
      <div class="box module">
        <app-engine motor="left">
          <p slot="motor">Left motor</p>
        </app-engine>
        <app-engine motor="right">
          <p slot="motor">Right motor</p>
        </app-engine>
      </div>
      <div class="box module"></div>
      <div class="box module">
      </div>
      <div class="box module line">
        <app-plotter></app-plotter>
      </div>

    </section>
  </main>
</template>

<script>
import Engine from '@/components/engine/engine'
import Plotter from '@/components/plotter/plotter'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    appEngine: Engine,
    appPlotter: Plotter
  }
}
</script>

<style lang="scss">
.main__root {
  width: 100vw;
  height: 100vh;

  .panel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr 1fr;
    grid-template-areas: ". . ." "line line line";
    grid-gap: 3vh;
    width: 100%;
    height: 100%;
    padding: 3vh;

    @include respond(tab-lan) {
      grid-template-columns: 1fr;
      grid-template-rows: none;
    }

    .box {
      margin-bottom: 0vh;
    }

    .line {
      display: table;
      grid-area: line;
    }
  }
}
</style>
