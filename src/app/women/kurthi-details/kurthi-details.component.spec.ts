import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurthiDetailsComponent } from './kurthi-details.component';

describe('KurthiDetailsComponent', () => {
  let component: KurthiDetailsComponent;
  let fixture: ComponentFixture<KurthiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurthiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurthiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
