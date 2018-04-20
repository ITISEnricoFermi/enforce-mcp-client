<template>
<div class="map">
  <GmapMap :center="center" :zoom="zoom" map-type-id="satellite">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"  @rightclick="mapRclicked"/>
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
      },
      markers: [],
      zoom: 10,
      lastId: 1
    }
  },
  sockets: {
    location (location) {
      this.center.lat = location.latitude
      this.center.longitude = location.longitude
    }
  },
  methods: {
    mapRclicked (mouseArgs) {
      console.log('Ciao')
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
    },
    addMarker: function () {
      this.lastId++
      this.markers.push({
        id: this.lastId,
        position: {
          lat: 48.8538302,
          lng: 2.2982161
        },
        opacity: 1,
        draggable: true,
        enabled: true,
        clicked: 0,
        rightClicked: 0,
        dragended: 0,
        ifw: true,
        ifw2text: 'This text is bad please change me :( '
      })
      console.log(this.markers)
      return this.markers[this.markers.length - 1]
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
