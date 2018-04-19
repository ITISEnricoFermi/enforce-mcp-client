<template>
<header class="menu">
  <div class="menu__top">
    <div class="logo">
      <p class="label">E</p>
    </div>
  </div>
  <div class="menu__bottom">
    <div class="create">
      <div class="content">
        <input type="text" class="title" placeholder="Titolo" v-model="title">
        <button class="record" :disabled="!title" @click="stop" v-if="recording">
          <span><i class="fas fa-circle-notch"></i></span>
          <span>Cattura</span>
        </button>
        <button class="record" :disabled="!title" @click="record" v-else>
          <span><i class="fas fa-circle"></i></span>
          <span>Cattura</span>
        </button>
      </div>
    </div>
    <div class="read">
      <div class="content">
        <select class="select" v-model="mission">
          <option value="undefined" disabled>Missione</option>
          <option v-for="(m, index) in missions" :key="index" value="index">{{ m.title }}</option>
        </select>
        <button class="play" :disabled="!mission" @click="pause" v-if="playing">
          <span><i class="fas fa-pause"></i></span>
          <span>Riproduci</span>
        </button>
        <button class="play" :disabled="!mission" @click="play" v-else>
          <span><i class="fas fa-play"></i></span>
          <span>Riproduci</span>
        </button>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'menuPanel',
  data: () => {
    return {
      title: undefined,
      mission: undefined,
      missions: [],
      recording: false,
      playing: false
    }
  },
  created () {
    this.getMissions()
  },
  methods: {
    async record () {
      if (this.title) {
        try {
          let mission = await axios.put('/missions/', {
            mission: {
              title: this.title
            }
          })
          console.log(mission)
          this.recording = true
        } catch (e) {
          console.log(e)
        }
      }
    },
    async stop () {
      this.recording = false
    },
    async getMissions () {
      try {
        this.missions = (await axios.get('/missions/')).data
      } catch (e) {
        console.log(e)
      }
    },
    async play () {
      if (this.mission) {
        try {
          this.playing = true
        } catch (e) {
          console.log(e)
        }
      }
    },
    async pause () {
      this.playing = false
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
    height: 6rem;
    width: 100%;
    position: fixed;
    background-color: $color-tertiary;
    @include clearfix;
    z-index: 10000;

    &__bottom,
    &__top {
        @include clearfix;
        height: 100%;
    }

    &__top {
        background-color: green;
        float: left;

        @include respond(tab-lan) {
            display: none;
        }

        .logo {
            height: 6rem;
            width: 6rem;
            background-color: lighten($color-tertiary, 10%);
            float: left;

            .label {
                font-family: 'Bitter', sans-serif;
                color: $color-white;
                font-size: 5rem;
                display: block;
            }
        }
    }

    &__bottom {
        float: right;

        @include respond(tab-lan) {
            width: 100%;
        }

        .create,
        .read {
            float: right;
            height: 100%;
            display: table;
            padding: 0 2vh 0 0;
        }

        .create {

            .content {
                display: table-cell;
                vertical-align: middle;

                .title {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border-radius: 3px;
                    border: none;
                    font-weight: bold;
                    background-color: lighten($color-tertiary, 20%);
                    color: $color-white;
                    padding: 0.9rem 0.8rem;
                    font-size: $font-default-2;
                    outline: none;
                    @include respond(tab-lan) {
                        width: 13rem;
                    }
                }

                .record {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border-radius: 3px;
                    border: none;
                    font-weight: bold;
                    background-color: $color-button-red;
                    color: $color-white;
                    padding: 0.9rem 0.8rem;
                    font-size: $font-default-2;
                    cursor: pointer;
                    outline: none;
                    // z-index: 1000;
                    // position: relative;

                    // display: inline-block;
                    // height: 4.5rem;
                    // width: 4.5rem;
                    // border-radius: 100rem;
                    // background-color: $color-red-1;
                    // margin: 0.5rem 2rem;
                    //
                    // @include respond(phone) {
                    //   height: 4rem;
                    //   width: 4rem;
                    //   margin: 0rem 2rem 0.75rem 2rem;
                    // }

                    // &::before {
                    //     content: '';
                    //     padding: 0.9rem 0.8rem;
                    //     width: 8rem;
                    //     height: 4rem;
                    //     border-radius: 3px;
                    //     top: 50%;
                    //     left: 50%;
                    //     font-size: $font-default-2;
                    //     background-color: lighten($color-button-red, 5%);
                    //     z-index: -99;
                    //     position: absolute;
                    //     animation: 1s recording infinite;
                    //     @include absCenter;
                    //
                    // }

                    .fa-circle-notch {
                        animation: 1s recording infinite;
                    }

                    &:disabled {
                        background-color: lighten($color-tertiary, 40%);
                    }

                }

            }

        }

        .read {

            .content {
                display: table-cell;
                vertical-align: middle;

                .select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    background-image: url("/static/layout/arrow_down.svg");
                    background-size: 4rem;
                    background-repeat: no-repeat;
                    background-position: right;
                    border-radius: 3px;
                    color: $color-tertiary;
                    font-size: $font-default-2;
                    padding: 0.9rem 3rem 0.9rem 0.8rem;
                    outline: none;
                    cursor: pointer;
                }

                .play {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border-radius: 3px;
                    border: none;
                    font-weight: bold;
                    background-color: $color-button-green;
                    color: $color-white;
                    padding: 0.9rem 0.8rem;
                    font-size: $font-default-2;
                    cursor: pointer;
                    outline: none;

                    &:disabled {
                        background-color: lighten($color-tertiary, 40%);
                    }

                }

            }

        }

    }
}
</style>
