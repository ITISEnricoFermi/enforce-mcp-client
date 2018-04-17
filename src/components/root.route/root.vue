<template>
<main id="app" class="main__root">
  <app-menu></app-menu>
  <section class="panel">
    <div class="box module box__controls">
      <app-engine :motor="'Motore sinistro'"></app-engine>
      <app-engine :motor="'Motore destro'"></app-engine>
      <app-camera :camera="'Camera'"></app-camera>
      <app-sensor :sensor="'BME280'"></app-sensor>
      <app-sensor :sensor="'BNO055'"></app-sensor>
    </div>
    <div class="box module box__map">
      <app-map></app-map>
    </div>
    <div class="box module box__terminal">
      <p>Ciao</p>
    </div>
    <div class="box module box__plotter">
      <app-plotter></app-plotter>
    </div>
  </section>
</main>
</template>

<script>
import Menu from '@/components/menu/menu'
import Engine from '@/components/engine/engine'
import Plotter from '@/components/plotter/plotter'
import Camera from '@/components/camera/camera'
import Sensor from '@/components/sensor/sensor'
import GoogleMap from '@/components/map/map'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    appMenu: Menu,
    appEngine: Engine,
    appPlotter: Plotter,
    appCamera: Camera,
    appSensor: Sensor,
    appMap: GoogleMap
  }
}
</script>

<style lang="scss">
.smoothie-chart-tooltip {
    background: #444;
    padding: 1em;
    margin-top: 20px;
    font-family: 'Roboto';
    color: white;
    font-size: 10px;
    pointer-events: none;
}

.main__root {
    width: 100vw;
    height: 100vh;

    .panel {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto 1fr;
        grid-template-areas: "controls map terminal" "line line line";
        grid-gap: 3vh;
        padding: calc(6rem + 3vh) 3vh 3vh;

        @include respond(tab-lan) {
            display: block;
        }

        .box {
            margin-bottom: 0;

            &__conrols {
                grid-area: controls;
            }

            &__map {
                grid-area: map;

                @include respond(tab-lan) {
                  min-height: 50rem;
                }

            }

            &__terminal {
                grid-area: terminal;

            }

            &__plotter {
                grid-area: line;
            }

            & > * {
                &:not(:last-child) {
                    margin-bottom: 2vh;
                }
            }

            @include respond(tab-lan) {
                margin-bottom: 3vh;
            }

        }
    }
}
</style>
