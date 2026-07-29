import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-salas_electricas',
  templateUrl: './salas_electricas.component.html',
  styleUrl: './salas_electricas.component.scss'
})
export class SalasElectricasComponent implements OnInit {

    images: string[] = [];
    selectedImageIndex: number = 0;

    products = [
        {
            name: 'SALAS ELÉCTRICAS MODULARES',

            image: 'assets/salas_electricas/carrusel/1.jpg'
        },
        {
            name: 'AHORRO EN EL PROYECTO',

            image: 'assets/salas_electricas/carrusel/4.jpg'
        },
        {
            name: 'PERSONALIZACIÓN Y FLEXIBILIDAD',

            image: 'assets/salas_electricas/carrusel/2.jpg'
        },
        {
            name: 'GRAN VARIEDAD DE APLICACIONES',

            image: 'assets/salas_electricas/carrusel/3.jpg'
        },
    ];

    responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

  constructor(public router: Router, private viewportScroller: ViewportScroller) { }

    ngOnInit(): void {
        this.viewportScroller.scrollToPosition([0, 0]);

        this.images = [
            'assets/salas_electricas/modelamiento/1.jpg',
            'assets/salas_electricas/modelamiento/2.jpg',
            'assets/salas_electricas/modelamiento/3.jpg',
            'assets/salas_electricas/modelamiento/4.png',
            'assets/salas_electricas/modelamiento/5.png',
        ];
    }

    navigateToFragment(fragment: string) {
        this.router.navigate(['/salas_electricas'], { fragment });
    }

}
