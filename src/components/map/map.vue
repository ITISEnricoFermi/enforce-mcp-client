<template>
<div class="map">
  <GmapMap :center="center" :zoom="zoom" map-type-id="satellite" @rightclick="mapRclicked">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
  </GmapMap>
</div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data: () => {
    return {
      center: {
        lat: 44.647180,
        lng: 10.935057
      },
      markers: [],
      zoom: 16
    }
  },
  methods: {
    mapRclicked (mouseArgs) {
      this.markers = []
      const createdMarker = this.addMarker(mouseArgs.latLng.lat(), mouseArgs.latLng.lng())
      this.$socket.emit('xy', {
        latitude: createdMarker.position.lat,
        longitude: createdMarker.position.lng
      })
      console.log(createdMarker.position)
    },
    addMarker: function addMarker (latitude, longitude) {
      this.lastId++
      this.markers.push({
        id: this.lastId,
        position: {
          lat: latitude,
          lng: longitude
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
      return this.markers[this.markers.length - 1]
    }
  },
  sockets: {
    location (location) {
      location = JSON.parse(location)
      this.center.lat = location.latitude
      this.center.longitude = location.longitude
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
