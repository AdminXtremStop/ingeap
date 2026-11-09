import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../../ingeap/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { HeaderServiciosComponent } from '../header-servicios/header-servicios.component';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu-servicio-5',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CarouselModule,
    HeaderServiciosComponent
  ],
  templateUrl: './menu-servicio-5.component.html',
  styleUrl: './menu-servicio-5.component.scss'
})
export class MenuServicio5Component implements OnInit {
  imagesPluviometria: any[] = [];
  imagesLUX: any[] = [];
  imagesTemperatura: any[] = [];
  imagesDrenaje: any[] = [];
  imagesSensorTHR: any[] = [];
  imagesMovimientoSavia: any[] = [];
  imagesSuelo: any[] = [];
  imagesCO2: any[] = [];
  imagesPeso: any[] = [];
  imagesDGA: any[] = [];
  imagesPAR: any[] = [];
  imagesSensorDiametro: any[] = [];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);

    this.imagesPluviometria = [
      { source: 'assets/ingeap-agro/aranet/Pluviometro.webp', alt: 'Sensor de Pluviometría Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Pluviometro 2.webp', alt: 'Sensor de Pluviometría Aranet 2' }
    ];

    this.imagesLUX = [
      { source: 'assets/ingeap-agro/aranet/LUX.webp', alt: 'Sensor de LUX Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/LUX 2.webp', alt: 'Sensor de LUX Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/LUX 3.webp', alt: 'Sensor de LUX Aranet 3' }
    ];

    this.imagesTemperatura = [
      { source: 'assets/ingeap-agro/aranet/Temperatura.webp', alt: 'Sensor de Temperatura Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Temperatura 2.webp', alt: 'Sensor de Temperatura Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/Temperatura 3.webp', alt: 'Sensor de Temperatura Aranet 3' }
    ];

    this.imagesDrenaje = [
      { source: 'assets/ingeap-agro/aranet/Drenaje.webp', alt: 'Sensor de Drenaje Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Drenaje 2.webp', alt: 'Sensor de Drenaje Aranet 2' }
    ];

    this.imagesSensorTHR = [
      { source: 'assets/ingeap-agro/aranet/THR.webp', alt: 'Sensor de Temperatura y Humedad Relativa Aranet' }
    ];

    this.imagesMovimientoSavia = [
      { source: 'assets/ingeap-agro/aranet/Savia.webp', alt: 'Sensor de flujo de savia Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Savia 2.webp', alt: 'Sensor de flujo de savia Aranet 2' }
    ];

    this.imagesSuelo = [
      { source: 'assets/ingeap-agro/aranet/Suelo.webp', alt: 'Sensor de Suelo Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Suelo 2.webp', alt: 'Sensor de Suelo Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/Suelo 3.webp', alt: 'Sensor de Suelo Aranet 3' }
    ];

    this.imagesCO2 = [
      { source: 'assets/ingeap-agro/aranet/CO2.webp', alt: 'Sensor de CO2 Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/CO2 2.webp', alt: 'Sensor de CO2 Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/CO2 3.webp', alt: 'Sensor de CO2 Aranet 3' }
    ];

    this.imagesPeso = [
      { source: 'assets/ingeap-agro/aranet/Peso.webp', alt: 'Sensor de Peso Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Peso 2.webp', alt: 'Sensor de Peso Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/Peso 3.webp', alt: 'Sensor de Peso Aranet 3' }
    ];

    this.imagesDGA = [
      { source: 'assets/ingeap-agro/aranet/DGA.webp', alt: 'Transmisor DGA Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/DGA 2.webp', alt: 'Transmisor DGA Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/DGA 3.webp', alt: 'Transmisor DGA Aranet 3' }
    ];

    this.imagesPAR = [
      { source: 'assets/ingeap-agro/aranet/PAR.webp', alt: 'Sensor de PAR Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/PAR 2.webp', alt: 'Sensor de PAR Aranet 2' }
    ];

    this.imagesSensorDiametro = [
      { source: 'assets/ingeap-agro/aranet/Diámetro.webp', alt: 'Sensor de Diámetro Aranet 1' },
      { source: 'assets/ingeap-agro/aranet/Diámetro 2.webp', alt: 'Sensor de Diámetro Aranet 2' },
      { source: 'assets/ingeap-agro/aranet/Diámetro 3.webp', alt: 'Sensor de Diámetro Aranet 3' }
    ];
  }
}
