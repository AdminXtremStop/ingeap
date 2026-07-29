import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapsible-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible-panel.component.html',
  styleUrl: './collapsible-panel.component.scss'
})
export class CollapsiblePanelComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() items: string[] = [];

  isExpanded = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
}
