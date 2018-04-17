<template>
<div class="map">
  <GmapMap :center="center" :zoom="7" map-type-id="terrain">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
  </GmapMap>
</div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data: () => {
    return {
      center: {
        lat: 41,
        lng: 12
      }
    }
  }
}
</script>

<style scoped lang="scss">
.map {
    width: 100%;
    height: 100%;
    display: table;

    @include respond(tab-lan) {
      min-height: 50rem;
    }

    .vue-map-container {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }

}
</style>
