class Radar {
  constructor (P5, divId, data) {
    this.p = new P5(this._sketch, divId)
    this.p.radar = this

    this.data = data

    this.animationAngle = 0
    this.animationSpeed = 5
    this.range = 2000
    this.targetRange = 2000
  }

  draw () {
    this.data.targetAngle += Math.random()
    if (this.data.targetAngle >= 360) this.data.targetAngle = 0

    this.data.targetDistance += Math.random() * 50 - 25

    if (this.targetRange !== this.range) { this.range += this.targetRange > this.range ? 1 : -1 }

    const p = this.p
    const size = p.width
    p.background(0, 0, 0, 5)

    // Scan line
    p.strokeWeight(5)
    p.stroke(0, 100, 0)
    p.fill(0, 100, 0)
    p.triangle(
      Math.cos(p.radians(this.animationAngle)) * size,
      Math.sin(p.radians(this.animationAngle)) * size,
      Math.cos(p.radians(this.animationAngle + this.animationSpeed + 1)) * size,
      Math.sin(p.radians(this.animationAngle + this.animationSpeed + 1)) * size,
      0, 0
    )

    // Circles
    p.stroke(0, 255, 0)
    p.strokeWeight(1)
    p.noFill()
    for (let i = 1; i <= Math.floor(this.range / 100); i++) {
      p.ellipse(0, 0, size / (this.range / 100) * i)
    }

    // Crosshair
    p.line(-p.width / 2, 0, p.width / 2, 0)
    p.line(0, -p.height / 2, 0, p.height / 2)

    // Target
    p.strokeWeight(0)
    p.stroke(0)
    p.fill(0, 255, 0)
    const tempTargetAngle = ((a) => {
      if (a < 90) return 360 - 90 + a
      return a - 90
    })(this.data.targetAngle)
    if (Math.abs(tempTargetAngle - this.animationAngle) < 10) {
      // console.log(tempTargetAngle)
      // console.log(this.animationAngle)
      p.ellipse(
        Math.cos(p.radians(tempTargetAngle)) * (size / 2) * (this.data.targetDistance / this.range),
        Math.sin(p.radians(tempTargetAngle)) * (size / 2) * (this.data.targetDistance / this.range),
        20)
    }

    this.animationAngle += this.animationSpeed
    if (this.animationAngle >= 360) this.animationAngle = 0
  }

  setRange (r) {
    this.targetRange = r
  }

  updateSize () {
    this.p.resizeCanvas(
      this.p.canvas.parentElement.offsetWidth,
      this.p.canvas.parentElement.offsetHeight)
  }

  setTargetData (data) {
    this.data = data
    this.setRange(2 * data.targetDistance)
  }

  _sketch (p) {
    p.setup = () => {
      p.radar.updateSize()
    }
    p.draw = () => {
      p.angleMode(p.DEGREES)
      p.translate(p.width / 2, p.height / 2)
      p.radar.draw()
    }
  }
}

export default Radar
