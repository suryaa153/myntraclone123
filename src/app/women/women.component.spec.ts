import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOMENComponent } from './women.component';

describe('WOMENComponent', () => {
  let component: WOMENComponent;
  let fixture: ComponentFixture<WOMENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WOMENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WOMENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
