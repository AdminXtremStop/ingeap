import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-shared.component.html',
  styleUrl: './footer-shared.component.scss'
})
export class FooterSharedComponent {
  @Input() address: string = 'Ariztia 1050 Quillota';
  @Input() email: string = '';
  @Input() phone: string = '';
  
  // Enlaces de redes sociales (si son null, se ocultan de forma automática)
  @Input() facebookUrl: string | null = null;
  @Input() instagramUrl: string | null = null;
  @Input() linkedinUrl: string | null = null;
  @Input() whatsappUrl: string | null = null;

  // Personalización de estilos
  @Input() borderTop: string = '1px solid rgba(255,255,255,0.05)';
  @Input() iconColor: string = '#31a5b3';
  @Input() hoverBgColor: string = '#31a5b3';

  navegarA(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
