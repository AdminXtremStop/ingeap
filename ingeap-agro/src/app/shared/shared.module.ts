import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsiblePanelComponent } from '../components/collapsible-panel/collapsible-panel.component';

@NgModule({
  imports: [
    CommonModule,
    CollapsiblePanelComponent
  ], exports: [
    CollapsiblePanelComponent
  ]
})
export class SharedModule { }
