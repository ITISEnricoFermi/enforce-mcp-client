<template>
<div class="sensor">
  <div class="labels">
    <div class="content">
      <p class="label">{{ sensor }}</p>
    </div>
  </div>
  <div class="controls">
    <div class="content">
      <app-toggle @toggle="toggle"></app-toggle>
    </div>
  </div>
</div>
</template>

<script>
import Toggle from '@/components/toggle/toggle'

export default {
  name: 'sensor',
  props: ['sensor'],
  data: () => {
    return {
      running: false
    }
  },
  methods: {
    toggle () {
      this.running = !this.running
      this.$socket.emit(this.sensor, this.running)
    }
  },
  components: {
    appToggle: Toggle
  }
}
</script>

<style scoped lang="scss">
.sensor {
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

            .label {
                float: left;
            }

            .state {
                display: block;
                padding: 0.1rem 0.45rem;
                border-radius: 0.25rem;
                background-color: $color-button-red;
                color: $color-white;
                float: left;
                margin-left: 0.5rem;

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
            button {
                display: block;
                padding: 0.8rem 0.9rem;
                border-radius: 0.25rem;
                border: none;
                color: $color-white;
                background-color: $color-button-blue;
                cursor: pointer;
                width: 7rem;

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
