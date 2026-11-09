import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Layout global
import { HeaderComponent } from '../ingeap/header/header.component';
import { FooterComponent } from './footer/footer.component';

// Secciones modulares
import { AgroHeroComponent } from './agro-hero/agro-hero.component';
import { AgroFeaturesComponent } from './agro-features/agro-features.component';
import { AgroMetricsComponent } from './agro-metrics/agro-metrics.component';
import { AgroMapComponent } from './agro-map/agro-map.component';
import { AgroCtaComponent } from './agro-cta/agro-cta.component';
import { AgroServiciosComponent } from './agro-servicios/agro-servicios.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';

@Component({
  selector: 'app-agro',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AgroHeroComponent,
    AgroFeaturesComponent,
    AgroMetricsComponent,
    AgroMapComponent,
    AgroCtaComponent,
    AgroServiciosComponent,
    RedesSocialesComponent
  ],
  templateUrl: './agro.component.html',
  styleUrls: ['./agro.component.scss']
})
export class AgroComponent {
  // Imágenes originales, incluyendo el cuarto reconocimiento que agregaste.
  readonly premios = [
    { src: 'assets/ingeap-agro/servicios/corfo.webp', alt: 'Corfo' },
    { src: 'assets/ingeap-agro/servicios/ganador.webp', alt: 'Ganador' },
    { src: 'assets/ingeap-agro/servicios/2dolugar.webp', alt: 'Segundo lugar' },
    { src: 'assets/ingeap-agro/aranet/logo.webp', alt: 'Logo Aranet' }
  ];

  // Cuatro grupos iguales para replicar el carrusel infinito de Nuestros Clientes.
  readonly gruposPremios = [0, 1, 2, 3];
}