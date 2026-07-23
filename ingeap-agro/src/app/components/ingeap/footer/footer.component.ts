import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSharedComponent } from 'src/app/shared/components/footer/footer-shared.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterSharedComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}

