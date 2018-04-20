<template>
<div class="engine">
  <div class="labels">
    <div class="content">
      <p class="label">{{ motor }}</p>
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
  name: 'enfine',
  props: ['motor'],
  data () {
    return {
      running: false
    }
  },
  methods: {
    toggle () {
      this.running = !this.running
      this.$socket.emit(this.motor, this.running)
    }
  },
  components: {
    appToggle: Toggle
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
