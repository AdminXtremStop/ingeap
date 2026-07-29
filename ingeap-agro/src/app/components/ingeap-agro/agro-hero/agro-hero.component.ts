import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agro-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agro-hero.component.html',
  styleUrls: ['./agro-hero.component.scss']
})
export class AgroHeroComponent {
  activeHotspot: string | null = null;
}
