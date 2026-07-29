import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-ingeap',
  templateUrl: './ingeap.component.html',
  styleUrl: './ingeap.component.scss'
})
export class IngeapComponent implements OnInit {

  carouselImages = [
    { src: 'assets/ingeap/carrusel/1.jpeg', alt: 'Soluciones Eléctricas Industriales' },
    { src: 'assets/ingeap/carrusel/2.JPG', alt: 'Montaje y Construcción Eléctrica' },
    { src: 'assets/ingeap/carrusel/3.jpeg', alt: 'Ingeniería y Proyectos de Control' },
    { src: 'assets/ingeap/carrusel/4.jpeg', alt: 'Salas Eléctricas en Faena' },
    { src: 'assets/ingeap/carrusel/5.jpeg', alt: 'Tecnología para Agricultura Inteligente' }
  ];

  teamImages = [
    { src: 'assets/ingeap/ganador.png', alt: 'Trayectoria Ingeap' },
    { src: 'assets/ingeap/menu-ingeap/55.JPG', alt: 'Equipo Ingeap Trabajo 1' },
    { src: 'assets/ingeap/menu-ingeap/54.jpeg', alt: 'Equipo Ingeap Trabajo 2' },
    { src: 'assets/ingeap/menu-ingeap/52.JPG', alt: 'Equipo Ingeap Trabajo 3' },
    { src: 'assets/ingeap/menu-ingeap/56.jpeg', alt: 'Equipo Ingeap Trabajo 4' }
  ];

  constructor(public router: Router, private viewportScroller: ViewportScroller) { }

    ngOnInit(): void {
        this.viewportScroller.scrollToPosition([0, 0]);
    }

    navigateToFragment(fragment: string) {
        this.router.navigate(['/home'], { fragment });
    }

    navegarIngeapAgro(){
        this.router.navigate(['/agro']);
    }

    navegarIngeap(){
        this.router.navigate(['/home']);
    }

    navegarSalas(){
        this.router.navigate(['/salas_electricas']);
    }

}
