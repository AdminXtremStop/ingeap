import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


type Division = 'salas_electricas' | 'home' | 'agro';

interface MenuItem {
  label: string;
  fragment?: string;
  route?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  mobileMenuActive: boolean = false;
  logoSrc: string = 'assets/ingeap/logo1.webp';
  logoAlt: string = 'Ingeap Servicios';
  activeColor: string = '#31a5b3';

  private destroyRef = inject(DestroyRef);

  
  divisionActiva: Division = 'home';

  readonly menus: Record<Division, MenuItem[]> = {
    salas_electricas: [
      { label: 'Historia', fragment: 'historia' },
      { label: 'Servicios', fragment: 'salas' },
      { label: 'Beneficios', fragment: 'beneficios' },
      { label: 'Visualización', fragment: 'modelacion' }
    ],

    home: [
      { label: 'Historia', fragment: 'historia' },
      { label: 'Propósito', fragment: 'proposito' },
      { label: 'Crecimiento', fragment: 'expansion' },
      { label: 'Servicios', fragment: 'negocios' }
    ],

    agro: [
      { label: 'Historia', fragment: 'historia' },
      { label: 'Plataforma', fragment: 'la-plataforma' },
      { label: 'Servicios', fragment: 'areas-servicios' },
      { label: 'Producto', route: '/agro/gestion-riego' }
    ]
  };

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.updateHeaderState(this.router.url);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event: any) => {
      this.updateHeaderState(event.urlAfterRedirects || event.url);
    });
  }

  get menuActual(): MenuItem[] {
    return this.menus[this.divisionActiva];
  }

  
  private updateHeaderState(url: string): void {
    if (url.startsWith('/salas_electricas')) {
      this.divisionActiva = 'salas_electricas';
      this.logoSrc = 'assets/salas_electricas/logo1.webp';
      this.logoAlt = 'Salas Eléctricas';
      this.activeColor = '#f26522';

    } else if (url.startsWith('/agro')) {
      this.divisionActiva = 'agro';
      this.logoSrc = 'assets/ingeap/logo2.webp';
      this.logoAlt = 'Ingeap Agro';
      this.activeColor = '#8db331';

    } else {
      this.divisionActiva = 'home';
      this.logoSrc = 'assets/ingeap/logo1.webp';
      this.logoAlt = 'Ingeap Servicios';
      this.activeColor = '#31a5b3';
    }
  }


  getActiveTabColor(division: string): string {
    if (division === 'salas_electricas') return '#f26522';
    if (division === 'agro') return '#8db331';
    return '#31a5b3';
  }

  toggleMobileMenu(): void {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

 
  navigateToFragment(fragment: string): void {
    this.mobileMenuActive = false;

    const rutas: Record<Division, string> = {
      salas_electricas: '/salas_electricas',
      home: '/home',
      agro: '/agro'
    };

    this.router.navigate(
      [rutas[this.divisionActiva]],
      { fragment }
    );
  }

  
  navigateToMenuItem(item: MenuItem): void {
    this.mobileMenuActive = false;

    // Navegación hacia otra página
    if (item.route) {
      this.router.navigateByUrl(item.route);
      return;
    }

    // Navegación hacia una sección
    if (item.fragment) {
      this.navigateToFragment(item.fragment);
    }
  }


  navegarIngeapAgro(): void {
    this.mobileMenuActive = false;
    this.router.navigate(['/agro']);
  }

  navegarIngeap(): void {
    this.mobileMenuActive = false;
    this.router.navigate(['/home']);
  }

  navegarSalas(): void {
    this.mobileMenuActive = false;
    this.router.navigate(['/salas_electricas']);
  }

  navegarContacto(): void {
    this.mobileMenuActive = false;
    if (this.router.url.includes('salas_electricas')) {
      this.router.navigate(['/salas_electricas/contacto']);
    } else if (this.router.url.includes('agro')) {
      this.router.navigate(['/agro/contacto']);
    } else {
      this.router.navigate(['/home/contacto']);
    }
  }

  navegarLogo(): void {
    this.mobileMenuActive = false;
    if (this.router.url.includes('salas_electricas')) {
      this.router.navigate(['/salas_electricas']);
    } else if (this.router.url.includes('agro')) {
      this.router.navigate(['/agro']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
