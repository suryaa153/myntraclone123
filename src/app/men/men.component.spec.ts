import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MENComponent } from './men.component';

describe('MENComponent', () => {
  let component: MENComponent;
  let fixture: ComponentFixture<MENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
