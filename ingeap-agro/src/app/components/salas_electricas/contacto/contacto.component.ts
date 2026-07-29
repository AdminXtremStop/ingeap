import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../ingeap/header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactoSharedComponent } from 'src/app/shared/components/contacto/contacto-shared.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ContactoSharedComponent
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  env = environment;
}

