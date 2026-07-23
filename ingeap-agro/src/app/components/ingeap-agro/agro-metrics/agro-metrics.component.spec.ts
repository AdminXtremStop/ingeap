import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroMetricsComponent } from './agro-metrics.component';

describe('AgroMetricsComponent', () => {
  let component: AgroMetricsComponent;
  let fixture: ComponentFixture<AgroMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgroMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
