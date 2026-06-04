import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-ingeap',
  templateUrl: './ingeap.component.html',
  styleUrl: './ingeap.component.scss'
})
export class IngeapComponent implements OnInit{

    @ViewChild('parentDiv') parentDiv!: ElementRef;

    mostrarPreloader: boolean = true;
    preloaderFadeOut: boolean = false;

    ngAfterViewInit() {
      this.adjustHeight();
    }

    adjustHeight() {
        const childHeight = this.parentDiv.nativeElement.scrollHeight;
        const offset = 100; // Cantidad en píxeles que deseas restar
        this.parentDiv.nativeElement.style.height = `${childHeight - offset}px`;
    }


    imagenSrc1 = 'assets/iconos-menu/1.png';

    cambiarImagen1(hover: boolean) {
        this.imagenSrc1 = hover ? 'assets/iconos-menu/2.png' : 'assets/iconos-menu/1.png';
    }

    imagenSrc2 = 'assets/iconos-menu/3.png';

    cambiarImagen2(hover: boolean) {
        this.imagenSrc2 = hover ? 'assets/iconos-menu/4.png' : 'assets/iconos-menu/3.png';
    }

    imagenSrc3 = 'assets/iconos-menu/6.png';

    cambiarImagen3(hover: boolean) {
        this.imagenSrc3 = hover ? 'assets/iconos-menu/5.png' : 'assets/iconos-menu/6.png';
    }

    products = [
        {
            name: 'Experiencia',
            detalle:'Más de 25 años de experiencia en proyectos de ingeniería y montaje eléctricos industriales.',
            image: 'assets/ingeap/carrusel/1.jpeg'
        },
        {
            name: 'Solución integral',
            detalle:'Ofrecemos una solución integral desde la ingeniería y diseño hasta el montaje. Áreas de especialización: Contamos con ingenieros y profesionales de las área eléctrica,  electrónica, mecánica y de automatización.',
            image: 'assets/ingeap/carrusel/2.JPG'
        },
        {
            name: 'Principales clientes',
            detalle:'Trabajamos para importantes actores del país en el área industrial y de minería con faenas permanentes en la primera y segunda región de Chile',
            image: 'assets/ingeap/carrusel/3.jpeg'
        },
        {
        name: 'Empresa en expansión',
        detalle:'Nos encontramos continuamente adaptando a las nuevas tecnologías y a los cambios  en el mercado. Actualmente contamos con el dominio de “Salas eléctricas Chile” y nos expandimos al área agrícola con Ingeap Agro.',
        image: 'assets/ingeap/carrusel/4.jpeg'
        },
        {
            name: 'Integradores oficiales de Schneider Electric',
            detalle:'Contamos con el apoyo de la fabrica para realizar proyectos de mayor envergadura.',
            image: 'assets/ingeap/carrusel/5.jpeg'
        }
    ];

    responsiveOptions: any[] = [
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


  constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit(): void {
        // Inicia el desvanecimiento después de 2.5 segundos
        setTimeout(() => {
            this.preloaderFadeOut = true;
            // Remueve el elemento del HTML tras terminar la transición CSS (0.5s)
            setTimeout(() => {
                this.mostrarPreloader = false;
            }, 500);
        }, 2500);
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
        window.location.href = 'https://salaselectricaschile.cl';
    }

}
