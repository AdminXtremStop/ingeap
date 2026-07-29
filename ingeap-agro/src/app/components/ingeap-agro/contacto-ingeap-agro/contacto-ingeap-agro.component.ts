import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../../ingeap/header/header.component';
import { ContactoSharedComponent } from 'src/app/shared/components/contacto/contacto-shared.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto-ingeap-agro',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    ContactoSharedComponent
  ],
  templateUrl: './contacto-ingeap-agro.component.html',
  styleUrls: ['./contacto-ingeap-agro.component.scss']
})
export class ContactoIngeapAgroComponent {
  env = environment;
}

