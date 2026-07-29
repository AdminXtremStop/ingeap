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
}
