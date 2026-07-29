import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  mobileMenuActive: boolean = false;
  logoSrc: string = 'assets/ingeap/logo1.png';
  logoAlt: string = 'Ingeap Servicios';
  activeColor: string = '#31a5b3';

  private destroyRef = inject(DestroyRef);

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

  private updateHeaderState(url: string): void {
    if (url.includes('salas_electricas')) {
      this.logoSrc = 'assets/salas_electricas/logo1.png';
      this.logoAlt = 'Salas Eléctricas';
      this.activeColor = '#f26522';
    } else if (url.includes('agro')) {
      this.logoSrc = 'assets/ingeap/logo2.png';
      this.logoAlt = 'Ingeap Agro';
      this.activeColor = '#8db331';
    } else {
      this.logoSrc = 'assets/ingeap/logo1.png';
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

    let basePath = '/home';
    if (this.router.url.includes('salas_electricas')) {
      basePath = '/salas_electricas';
    } else if (this.router.url.includes('agro')) {
      basePath = '/agro';
    }

    let targetFragment = fragment;
    if (basePath === '/agro') {
      if (fragment === 'historia') targetFragment = 'servicios';
      else if (fragment === 'negocios') targetFragment = 'areas-servicios';
      else if (fragment === 'clientes') targetFragment = 'comunidad';
    } else if (basePath === '/salas_electricas') {
      if (fragment === 'negocios') targetFragment = 'salas';
      else if (fragment === 'clientes') targetFragment = 'modelacion';
    }

    this.router.navigate([basePath], { fragment: targetFragment });
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
