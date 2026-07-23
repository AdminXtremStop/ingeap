import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CarouselModule } from 'primeng/carousel';
import { InstagramService, InstagramPost } from 'src/app/services/instagram.service';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule, CarouselModule, FormsModule],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.scss'
})
export class RedesSocialesComponent implements OnInit {

  instagramPosts: InstagramPost[] = [];
  isLoading: boolean = true;
  private destroyRef = inject(DestroyRef);

  responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  fallbackPosts: InstagramPost[] = [
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/1.jpg',
      caption: 'Instalación de sensores de humedad de suelo Aranet en huerto de paltos. Monitoreo constante a diferentes profundidades para optimizar el riego.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/2.jpg',
      caption: 'Gateway LoRaWAN instalado en torre a 12 metros de altura, asegurando cobertura inalámbrica robusta para más de 500 hectáreas en Quillota.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/3.jpg',
      caption: 'Estación meteorológica integrada con sensores de temperatura, humedad relativa y velocidad de viento para la alerta temprana de heladas.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap-agro/carrusel/5.png',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/5.png',
      caption: 'Panel de control del sistema de teleteledetección de riego en tiempo real. Configuración y supervisión remota autónoma.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/11.jpg',
      caption: 'Calibración e integración de caudalímetros ultrasónicos para el cumplimiento de normativas DGA. Transmisión continua y reportes automatizados.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/12.JPG',
      caption: 'Monitoreo de pozo profundo y calidad de agua en predio agrícola. Sensor de nivel hidrostático conectado de forma inalámbrica.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/13.jpg',
      caption: 'Inspección técnica de sistemas de riego automatizados en viñedos. Asegurando la máxima eficiencia hídrica por sector.'
    },
    {
      permalink: 'https://www.instagram.com/ingeap.agro/',
      media_type: 'IMAGE',
      media_url: 'assets/ingeap-agro/carrusel/14.jpg',
      caption: 'Capacitación a operarios y agrónomos en el uso de la plataforma móvil de Ingeap Agro. Decisiones precisas directamente en la palma de tu mano.'
    }
  ];

  constructor(private instagramService: InstagramService) {}

  ngOnInit(): void {
    this.instagramService.getRecentPosts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data && data.length > 0) {
            this.instagramPosts = data;
          } else {
            this.instagramPosts = this.fallbackPosts;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al obtener los posts de Instagram, cargando locales', error);
          this.instagramPosts = this.fallbackPosts;
          this.isLoading = false;
        }
      });
  }
}
