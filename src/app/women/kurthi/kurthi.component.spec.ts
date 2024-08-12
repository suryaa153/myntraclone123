import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurthiComponent } from './kurthi.component';

describe('KurthiComponent', () => {
  let component: KurthiComponent;
  let fixture: ComponentFixture<KurthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurthiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
