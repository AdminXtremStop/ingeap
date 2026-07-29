import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngeapRoutingModule } from './ingeap-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { IngeapComponent } from './ingeap.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ContactoComponent } from './contacto/contacto.component';
import { AccordionModule } from 'primeng/accordion';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollapsiblePanelComponent } from '../collapsible-panel/collapsible-panel.component';

@NgModule({
    imports: [
        CommonModule,
        IngeapRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CarouselModule,
        InputTextModule,
        InputTextareaModule,
        ContactoComponent,
        AccordionModule,
        FooterComponent,
        HeaderComponent,
        SharedModule,
        CollapsiblePanelComponent
    ],
    declarations: [
        IngeapComponent
    ]
})
export class IngeapLandingModule { }
