import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agro-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agro-map.component.html',
  styleUrl: './agro-map.component.scss'
})
export class AgroMapComponent {
  mapView: 'cuarteles' | 'leaflet' = 'leaflet';

  // En móvil, permite ampliar el SVG sin ensanchar toda la página.
  mapExpanded = false;
}
