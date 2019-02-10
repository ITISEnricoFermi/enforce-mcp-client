<template>
<div class="engine">
  <div class="labels">
    <div class="content">
      <p class="label">Engines</p>
    </div>
  </div>
  <div class="controls">
    <div class="content">
      <button class="direction" @click="left" :disabled="!autopilot"><i class="fas fa-arrow-left"></i></button>
      <button class="direction" @click="right" :disabled="!autopilot"><i class="fas fa-arrow-right"></i></button>
      <button class="auto auto--red" @click="auto" v-if="autopilot"><i class="fas fa-user"></i></button>
      <button class="auto auto--green" @click="auto" v-else><i class="fas fa-user"></i></button>
      <button class="state state--red" @click="toggle" v-if="running">Turn off</button>
      <button class="state state--green" @click="toggle" v-else>Turn on</button>
    </div>
  </div>
</div>
</template>

<script>

// import Toggle from '@/components/toggle/toggle'

export default {
  name: 'engines',
  data () {
    return {
      running: false,
      autopilot: false
    }
  },
  sockets: {
    status (status) {
      // if (this.motor === 'Motore destro') {
      //   this.running = status.rightMotor
      // } else {
      //   this.running = status.leftMotor
      // }
      // this.autopilot = status.autopilot
    }
  },
  methods: {
    auto () {
      this.autopilot = !this.autopilot
      if (this.autopilot) {
        return this.$socket.emit('p0')
      } else {
        return this.$socket.emit('p1')
      }
    },
    right () {
      return this.$socket.emit('mr1')
    },
    left () {
      return this.$socket.emit('ml1')
    },
    toggle () {
      // if (this.motor === 'Motore destro') {
      //   if (this.running) {
      //     this.running = !this.running
      //     return this.$socket.emit('mr0')
      //   }
      //   this.running = !this.running
      //   return this.$socket.emit('mr1')
      // } else if (this.motor === 'Motore sinistro') {
      //   if (this.running) {
      //     this.running = !this.running
      //     return this.$socket.emit('ml0')
      //   }
      //   this.running = !this.running
      //   return this.$socket.emit('ml1')
      // }
    }
  },
  components: {
    // appToggle: Toggle
  }
}
</script>

<style scoped lang="scss">
.engine {
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
                display: inline-block;
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

                &:hover {
                    background-color: darken($color-button-blue, 5%);
                }
            }

            .direction {
                display: inline-block;
                padding: 0.8rem 0.9rem;
                border-radius: 0.25rem;
                border: none;
                color: $color-white;
                background-color: $color-button-blue;
                cursor: pointer;

                &:disabled {
                  background-color: lighten($color-button-blue, 5%);
                }

                &:hover:not(:disabled) {
                    background-color: darken($color-button-blue, 5%);
                }
            }

            .auto {
                display: inline-block;
                padding: 0.8rem 0.9rem;
                border-radius: 0.25rem;
                border: none;
                color: $color-white;
                background-color: $color-button-blue;
                cursor: pointer;

                &--green {
                  background-color: $color-button-green;
                }

                &--red {
                  background-color: $color-button-red;
                }

                &:hover {
                    background-color: darken($color-button-blue, 5%);
                }
            }

        }

    }
}
</style>
