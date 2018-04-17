<template>
<header class="menu">
  <div class="logo">
    <p class="label">E</p>
  </div>

  <div class="create">
    <div class="content">
      <input type="text" class="title" placeholder="Titolo" v-model="title">
      <button class="record" :disabled="!title">
        <i class="fas fa-circle"></i>
        <span>Cattura</span>
      </button>
    </div>
  </div>
  <div class="read">
    <div class="content">
      <select class="select" v-model="mission">
        <option value="undefined" disabled>Missione</option>
        <option value="0">Lancio 17-04-18</option>
      </select>
      <button class="play" :disabled="!mission">
        <i class="fas fa-play"></i>
        <span>Riproduci</span>
      </button>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'menuPanel',
  data: () => {
    return {
      title: undefined,
      mission: undefined
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
</style>
