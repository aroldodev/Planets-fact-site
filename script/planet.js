export class Planet {
  constructor(data) {
    Object.assign(this, data);
  }

  render() {
    const { images, name, overview, rotation, revolution, radius, temperature,} = this;

    document.getElementById("main-planet-image").src = this.images.planet;
    document.getElementById("planet-name").textContent = this.name.toUpperCase();
    document.getElementById("planet-overview").textContent = this.overview.content;
    document.getElementById("planet-source-link").href = this.overview.source;
    document.getElementById("data-rotation-time").innerText = this.rotation;
    document.getElementById("data-revolution-time").innerText = this.revolution;
    document.getElementById("data-radius").innerText = this.radius;
    document.getElementById("data-average-temp").innerText = this.temperature;
  }
}
