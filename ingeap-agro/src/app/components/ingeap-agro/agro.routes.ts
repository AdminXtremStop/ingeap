import { Routes } from '@angular/router';
import { AgroComponent } from './agro.component';

export const AGRO_ROUTES: Routes = [
    { path: '', component: AgroComponent },
    { path: 'contacto', loadComponent: () => import('./contacto-ingeap-agro/contacto-ingeap-agro.component').then(m => m.ContactoIngeapAgroComponent) },
    { path: 'gestion-riego', loadComponent: () => import('./menu-servicio-1/menu-servicio-1.component').then(m => m.MenuServicio1Component) },
    { path: 'paneles-fotovoltaicos', loadComponent: () => import('./menu-servicio-2/menu-servicio-2.component').then(m => m.MenuServicio2Component) },
    { path: 'monitoreo-extraccion-agua', loadComponent: () => import('./menu-servicio-3/menu-servicio-3.component').then(m => m.MenuServicio3Component) },
    { path: 'monitoreo-riego', loadComponent: () => import('./menu-servicio-4/menu-servicio-4.component').then(m => m.MenuServicio4Component) },
    { path: 'aranet', loadComponent: () => import('./menu-servicio-5/menu-servicio-5.component').then(m => m.MenuServicio5Component) },
    { path: 'telemetria', loadComponent: () => import('./menu-servicio-6/menu-servicio-6.component').then(m => m.MenuServicio6Component) },
    { path: 'control-heladas', loadComponent: () => import('./menu-servicio-7/menu-servicio-7.component').then(m => m.MenuServicio7Component) },
];
