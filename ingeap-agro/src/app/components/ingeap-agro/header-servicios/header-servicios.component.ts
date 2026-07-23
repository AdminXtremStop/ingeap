import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importa RouterModule
  templateUrl: './header-servicios.component.html',
  styleUrls: ['./header-servicios.component.scss']
})
export class HeaderServiciosComponent {
  @Input() highlightId: number | null = null;

  images = [
    { id: 1, src: 'assets/ingeap-agro/menu/2.jpg', alt: 'Imagen 1', caption: 'Sistema de Gestión de Riego', routerLink: '/agro/gestion-riego' },
    { id: 2, src: 'assets/ingeap-agro/menu/3.jpg', alt: 'Imagen 2', caption: 'Sistema Fotovoltaico', routerLink: '/agro/paneles-fotovoltaicos' },
    // { id: 3, src: 'assets/ingeap-agro/menu/7.png', alt: 'Imagen 3', caption: 'Cumplimiento Decreto #1238', routerLink: '/agro/monitoreo-extraccion-agua' },
    // { id: 4, src: 'assets/ingeap-agro/menu/4.jpeg', alt: 'Imagen 4', caption: 'Automatización de Riego', routerLink: '/agro/monitoreo-riego' },
    // { id: 5, src: 'assets/ingeap-agro/menu/5.png', alt: 'Imagen 5', caption: 'Telemetría', routerLink: '/agro/telemetria' },
    { id: 6, src: 'assets/ingeap-agro/menu/11.jpg', alt: 'Imagen 6', caption: 'Automatización control de heladas', routerLink: '/agro/control-heladas' },
    { id: 7, src: 'assets/ingeap-agro/menu/9.png', alt: 'Imagen 7', caption: 'Sensores Aranet', routerLink: '/agro/aranet' },
    // { id: 8, src: 'assets/ingeap-agro/menu/10.png', alt: 'Imagen 8', caption: 'Bombas de riego', routerLink: '**' }
  ];

  trackById(index: number, image: any): any {
    return image.id;
  }
}
