import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../../ingeap/header/header.component';
import { AccordionModule } from 'primeng/accordion';
import { HeaderServiciosComponent } from '../header-servicios/header-servicios.component';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu-servicio-6',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AccordionModule,
    HeaderServiciosComponent
  ],
  templateUrl: './menu-servicio-6.component.html',
  styleUrl: './menu-servicio-6.component.scss'
})
export class MenuServicio6Component implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
