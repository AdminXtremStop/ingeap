import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface HotspotDetail {
  icon: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-agro-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agro-hero.component.html',
  styleUrls: ['./agro-hero.component.scss']
})
export class AgroHeroComponent {
  activeHotspot: string | null = null;

  // Los tooltips originales se conservan en escritorio.
  // Estos datos se muestran en una tarjeta legible en celulares.
  readonly hotspotDetails: Record<string, HotspotDetail> = {
    riego: {
      icon: '💧', category: '01 · Riego', title: 'Riego inteligente',
      description: 'Pivotes, goteo y aspersores con gestión automatizada. Monitoreo de caudal, presión y humedad de suelo en tiempo real.'
    },
    solar: {
      icon: '☀️', category: '02 · Sistema', title: 'Sistema fotovoltaico',
      description: 'Paneles solares diseñados a medida para bombas, riego y operaciones. Ahorro energético hasta un 50%.'
    },
    aranet: {
      icon: '📡', category: '03 · Sensores', title: 'Sensores Aranet',
      description: 'Partners oficiales en Chile. Humedad de suelo, tensión, T°/HR, CO₂, radiación PAR. Cumplimiento DGA.'
    },
    satelite: {
      icon: '🛰️', category: '04 · Mapas', title: 'Imágenes satelitales',
      description: 'Mapeo periódico del predio con imágenes satelitales: NDVI, estrés hídrico y zonas de manejo diferenciado.'
    },
    energia: {
      icon: '⚡', category: '05 · Medición', title: 'Medición de energía',
      description: 'Medidor inteligente en la caseta eléctrica del predio. Consumo por bomba, factor de potencia y reportes.'
    },
    auto: {
      icon: '⚙️', category: '06 · Control', title: 'Automatización',
      description: 'Tablero eléctrico con control de heladas, cooling, bombas y válvulas. Operación remota 24/7 con alarmas.'
    }
  };

  get activeHotspotDetail(): HotspotDetail | null {
    return this.activeHotspot ? this.hotspotDetails[this.activeHotspot] ?? null : null;
  }
}