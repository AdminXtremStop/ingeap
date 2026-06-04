import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('600ms ease-in', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('600ms ease-out', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class LandingIngeapAgroComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('parentDiv') parentDiv!: ElementRef;

    // --- LÓGICA DE ANIMACIÓN DEL MAPA HERO ---
    sceneKeys = ['riego', 'solar', 'aranet', 'satelite', 'energia', 'auto'];
    currentSceneKey = 'solar';
    sceneInterval: any;

    sceneData: any = {
        riego:    { num: '01', color: 'var(--turquoise)',      soft: 'var(--turquoise-soft)', icon: '💧', title: 'Riego inteligente',   desc: 'Pivotes, goteo y aspersores con gestión automatizada. Monitoreo de caudal, presión y humedad de suelo en tiempo real.', tags: ['Eficiencia hídrica','Monitoreo 24/7'], link: '/servicios' },
        solar:    { num: '02', color: 'var(--yellow-deep)',    soft: 'var(--yellow-soft)',    icon: '☀',  title: 'Sistema fotovoltaico', desc: 'Paneles solares diseñados a medida para bombas, riego y operaciones. Ahorro energético hasta un 50%.', tags: ['Energía solar','Ahorro'], link: '/servicios' },
        aranet:   { num: '03', color: 'var(--blue)',           soft: 'var(--blue-soft)',      icon: '📡', title: 'Sensores Aranet',      desc: 'Partners oficiales en Chile. Humedad de suelo, tensión, T°/HR, CO₂, radiación PAR. Cumplimiento DGA.', tags: ['IoT','Telemetría','DGA'], link: '/servicios' },
        satelite: { num: '04', color: 'var(--turquoise-deep)', soft: 'var(--turquoise-soft)', icon: '🛰', title: 'Imágenes satelitales',  desc: 'Mapeo periódico del predio con imágenes satelitales: NDVI, estrés hídrico y zonas de manejo diferenciado por cuartel.', tags: ['NDVI','Mapas','Cuarteles'], link: '/servicios' },
        energia:  { num: '05', color: 'var(--green-deep)',     soft: 'var(--green-soft)',     icon: '⚡', title: 'Medición de energía',  desc: 'Medidor inteligente en la caseta eléctrica del predio. Consumo por bomba, factor de potencia, horas-punta y reportes para cumplir con la norma.', tags: ['Consumo','Factor pot.','Reportes'], link: '/servicios' },
        auto:     { num: '06', color: 'var(--green)',          soft: 'var(--green-soft)',     icon: '⚙', title: 'Automatización',       desc: 'Tablero eléctrico con control de heladas, cooling, bombas y válvulas. Operación remota 24/7 con alarmas inteligentes.', tags: ['Control remoto','Alarmas','24/7'], link: '/servicios' }
    };

    setScene(key: string) {
        this.currentSceneKey = key;
        // Si el usuario hace clic, detenemos el cambio automático
        if (this.sceneInterval) clearInterval(this.sceneInterval);
    }

    ngAfterViewInit() {
        this.adjustHeight();
    }

    adjustHeight() {
        const childHeight = this.parentDiv.nativeElement.scrollHeight;
        this.parentDiv.nativeElement.style.height = `${childHeight - 100}px`;
    }

    // Imágenes para el carrusel "Sobre nosotros"
    sobreNosotrosImages = [
        { src: 'assets/ingeap/ganador.png' },
        { src: 'assets/ingeap/foto_ingeap_agro.jpeg' }
    ];

    sobreNosotrosResponsive = [
        { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
        { breakpoint: '767px',  numVisible: 1, numScroll: 1 }
    ];

    // ... resto de tu código sin cambios ...
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
        { name: 'Tecnología en el agro', detalle: 'A través de sensores IOT, sistemas PV, automatización, telemetría, etc.', image: 'assets/ingeap-agro/carrusel/12.JPG' },
        { name: 'Eficiencia hídrica y energética', detalle: 'Servicios orientados a eficiencia que permiten un rápido retorno de la inversión.', image: 'assets/ingeap-agro/carrusel/14.jpg' },
        { name: 'Partners oficiales Aranet', detalle: 'Medición de parámetros relevantes, todo en una misma plataforma.', image: 'assets/ingeap-agro/carrusel/13.jpg' },
        { name: 'Equipo multidisciplinario', detalle: 'Nos permite realizar proyectos de mayor complejidad que abarcan más de una especialidad.', image: 'assets/ingeap-agro/carrusel/11.jpg' },
    ];

    topBarData = { direccion: 'Ariztia 1050 Quillota', correo: 'Info.agro@ingeap.cl', numeroContacto: '+569 7380 1447' };

    responsiveOptions: any[] = [
        { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
        { breakpoint: '991px',  numVisible: 1, numScroll: 1 },
        { breakpoint: '767px',  numVisible: 1, numScroll: 1 }
    ];

    constructor(public layoutService: LayoutService, public router: Router) {}

    ngOnInit() {
        // Inicia el rotador automático cada 3.8 segundos
        let idx = this.sceneKeys.indexOf(this.currentSceneKey);
        this.sceneInterval = setInterval(() => {
            idx = (idx + 1) % this.sceneKeys.length;
            this.currentSceneKey = this.sceneKeys[idx];
        }, 3800);
    }

    ngOnDestroy() {
        if (this.sceneInterval) clearInterval(this.sceneInterval);
    }

    navigateToFragment(fragment: string) { this.router.navigate(['/agro'], { fragment }); }
    navegarIngeapAgro() { this.router.navigate(['/agro']); }
    navegarIngeap() { this.router.navigate(['/home']); }
    navegarSalas() { window.location.href = 'https://salaselectricaschile.cl'; }
}
