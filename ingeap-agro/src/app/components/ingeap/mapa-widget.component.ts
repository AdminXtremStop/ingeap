import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-widget',
  templateUrl: './mapa-widget.component.html',
  styleUrls: ['./mapa-widget.component.scss']
})
export class MapaWidgetComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    const mapContainer = document.getElementById('agro-map');
    if (!mapContainer) return;

    // Inicializamos el mapa centrado en una coordenada (ej: Zona Central de Chile)
    this.map = L.map('agro-map').setView([-33.86, -70.73], 14);

    // Capa de mapa satelital realista (World Imagery)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(this.map);

    // Creamos íconos HTML personalizados para que combinen con el diseño (Turquesa y Amarillo)
    const iconSensor = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width: 16px; height: 16px; background-color: #31a5b3; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px #31a5b3;"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8] // Centra el punto exacto en la coordenada
    });

    const iconValvula = L.divIcon({
      className: 'custom-marker',
      html: '<div style="width: 16px; height: 16px; background-color: #f7c92c; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px #f7c92c;"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    // Marcador de ejemplo 1: Sensor
    const sensorHumedad = L.marker([-33.855, -70.725], { icon: iconSensor }).addTo(this.map);
    sensorHumedad.bindPopup('<strong style="color: #31a5b3;">Sensor S-127</strong><br>Humedad: 34.2%<br>Estado: Óptimo');

    // Marcador de ejemplo 2: Válvula
    const valvula = L.marker([-33.865, -70.735], { icon: iconValvula }).addTo(this.map);
    valvula.bindPopup('<strong style="color: #f7c92c;">Válvula V-04</strong><br>Caudal: 15 L/s<br>Estado: Activa');
  }
}
