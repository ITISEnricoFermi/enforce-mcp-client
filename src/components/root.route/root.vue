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
    <div class="box module box__radar">
      <app-radar></app-radar>
    </div>
    <div class="box module box__temperature">
      <app-plotter :data="'temperature'" :max="'50'" :min="'-10'" :color="green"></app-plotter>
    </div>
    <div class="box module box__humidity">
      <app-plotter :data="'humidity'" :max="'100'" :min="'0'" :color="yellow"></app-plotter>
    </div>
    <div class="box module box__pressure">
      <app-plotter :data="'pressure'" :max="'1500'" :min="'500'" :color="blue"></app-plotter>
    </div>
    <div class="box module box__model">
      <app-model></app-model>
    </div>
  </section>
</main>
</template>

<script>
import {
  eventBus
} from '@/main'

import Menu from '@/components/menu/menu'
import Engine from '@/components/engine/engine'
import Plotter from '@/components/plotter/plotter'
import Camera from '@/components/camera/camera'
import Sensor from '@/components/sensor/sensor'
import GoogleMap from '@/components/map/map'
import Radar from '@/components/radar/radar'
import Model from '@/components/model/model'

export default {
  name: 'Home',
  data: () => {
    return {
      red: '255, 68, 71',
      green: '0, 255, 0',
      blue: '56, 151, 240',
      yellow: '243, 163, 42'
    }
  },
  created () {
    this.$socket.emit('status')
  },
  sockets: {
    temperature (temp) {
      eventBus.temperature(temp)
    },
    humidity (humi) {
      eventBus.humidity(humi)
    },
    pressure (press) {
      eventBus.pressure(press)
    },
    orientation (ori) {
      eventBus.orientation(ori)
    },
    position (pos) {
      eventBus.position(pos)
    }
  },
  components: {
    appMenu: Menu,
    appEngine: Engine,
    appPlotter: Plotter,
    appCamera: Camera,
    appSensor: Sensor,
    appMap: GoogleMap,
    appRadar: Radar,
    appModel: Model
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
        grid-template-rows: auto 1fr 1fr;
        grid-template-areas: "controls map radar" "temperature humidity pressure" "model . .";
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

            &__radar {
                grid-area: radar;
            }

            &__temperature {
                grid-area: temperature;
            }

            &__humidity {
                grid-area: humidity;
            }

            &__pressure {
                grid-area: pressure;
            }

            &__model {
              grid-area: model;
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
