import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from "./components/notfound/notfound.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección por defecto
            { path: 'home', loadChildren: () => import('./components/ingeap/ingeap.module').then(m => m.IngeapLandingModule) },
            { path: 'agro', loadChildren: () => import('./components/ingeap-agro/agro.routes').then(m => m.AGRO_ROUTES) },
            { path: 'salas_electricas', loadChildren: () => import('./components/salas_electricas/salas_electricas.module').then(m => m.SalasElectricasModule) },

            // Redirecciones de rutas antiguas/duplicadas a sus rutas canónicas bajo /agro/
            { path: 'menu-servicio-1', redirectTo: 'agro/gestion-riego', pathMatch: 'full' },
            { path: 'menu-servicio-2', redirectTo: 'agro/paneles-fotovoltaicos', pathMatch: 'full' },
            { path: 'menu-servicio-3', redirectTo: 'agro/monitoreo-extraccion-agua', pathMatch: 'full' },
            { path: 'menu-servicio-4', redirectTo: 'agro/monitoreo-riego', pathMatch: 'full' },
            { path: 'menu-servicio-5', redirectTo: 'agro/aranet', pathMatch: 'full' },
            { path: 'menu-servicio-6', redirectTo: 'agro/telemetria', pathMatch: 'full' },
            { path: 'menu-servicio-7', redirectTo: 'agro/control-heladas', pathMatch: 'full' },

            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
