class ModelViewer {
  constructor (THREE, divId) {
    this.THREE = THREE
    this.parent = document.getElementById(divId)

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, this.parent.offsetWidth / this.parent.offsetHeight, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer()

    this.renderer.setClearColor(new THREE.Color(0x204020))
    this.parent.appendChild(this.renderer.domElement)

    this.updateSize()

    this.geometry = new THREE.CylinderGeometry(1, 1, 4, 16)
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.material.wireframe = true
    this.model = new THREE.Mesh(this.geometry, this.material)

    this.scene.add(this.model)

    this.camera.position.z = 5

    this.animate = () => {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
    this.animate()
  }

  setRotation (q) {
    this.model.setRotationFromQuaternion(new this.THREE.Quaternion(q.x, q.y, q.z, q.w))
  }

  updateSize () {
    this.renderer.setSize(this.parent.offsetWidth, this.parent.offsetHeight)
  }
}

export default ModelViewer
