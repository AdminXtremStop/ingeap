import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroCtaComponent } from './agro-cta.component';

describe('AgroCtaComponent', () => {
  let component: AgroCtaComponent;
  let fixture: ComponentFixture<AgroCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgroCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgroCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
