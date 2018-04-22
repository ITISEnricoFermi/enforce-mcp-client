<template>
<div class="camera">
  <div class="labels">
    <div class="content">
      <p class="label">{{ camera }}</p>
    </div>
  </div>
  <div class="controls">
    <div class="content">
      <button class="state state--red" @click="toggle" v-if="running">Disattiva</button>
      <button class="state state--green" @click="toggle" v-else>Attiva</button>
    </div>
  </div>
</div>
</template>

<script>
import Toggle from '@/components/toggle/toggle'

export default {
  name: 'camera',
  props: ['camera'],
  data: () => {
    return {
      running: false
    }
  },
  methods: {
    toggle () {
      if (this.running) {
        this.running = !this.running
        return this.$socket.emit('c0')
      }
      this.running = !this.running
      return this.$socket.emit('c1')
    }
  },
  components: {
    appToggle: Toggle
  }
}
</script>

<style scoped lang="scss">
.camera {
    width: 100%;
    text-align: left;
    box-shadow: 0 0 0.75rem rgba(0,0,0,0.5);
    @include clearfix;
    border-radius: 0.25rem;
    display: table;
    padding: 1vh;

    .controls,
    .labels {
        display: table-cell;
        vertical-align: middle;
    }

    .labels {
        .content {
            display: table-cell;
            vertical-align: middle;

            .label {
                float: left;
            }

            // .state {
            //     display: block;
            //     padding: 0.1rem 0.45rem;
            //     border-radius: 0.25rem;
            //     background-color: $color-button-red;
            //     color: $color-white;
            //     float: left;
            //     margin-left: 0.5rem;
            // }

            * {
                display: inline-block;
                &:not(:last-child) {
                    margin-bottom: 1vh;
                }
            }
        }

    }

    .controls {

        .content {
            display: table-cell;
            vertical-align: middle;
            float: right;

            .state {
                display: block;
                padding: 0.8rem 0.9rem;
                border-radius: 0.25rem;
                border: none;
                color: $color-white;
                background-color: $color-button-blue;
                cursor: pointer;
                width: 7rem;

                &--green {
                    background-color: $color-button-green;
                }

                &--red {
                    background-color: $color-button-red;
                }

                &:not(:last-child) {
                    margin-bottom: 1vh;
                }

                &:hover {
                    background-color: darken($color-button-blue, 5%);
                }
            }
        }

    }
}
</style>
