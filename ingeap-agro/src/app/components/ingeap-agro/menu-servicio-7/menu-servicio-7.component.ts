import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../../ingeap/header/header.component';
import { AccordionModule } from 'primeng/accordion';
import { HeaderServiciosComponent } from '../header-servicios/header-servicios.component';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-menu-servicio-7',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AccordionModule,
    HeaderServiciosComponent
  ],
  templateUrl: './menu-servicio-7.component.html',
  styleUrl: './menu-servicio-7.component.scss'
})
export class MenuServicio7Component implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
