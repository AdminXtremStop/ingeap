import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasElectricasRoutingModule } from './salas_electricas-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SalasElectricasComponent } from './salas_electricas.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ContactoComponent } from './contacto/contacto.component';
import { AccordionModule } from 'primeng/accordion';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from '../ingeap/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        SalasElectricasRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CarouselModule,
        InputTextModule,
        InputTextareaModule,
        AccordionModule,
        HeaderComponent,
        SharedModule,
        ContactoComponent,
        FooterComponent
    ],
    declarations: [
        SalasElectricasComponent
    ]
})
export class SalasElectricasModule { }
