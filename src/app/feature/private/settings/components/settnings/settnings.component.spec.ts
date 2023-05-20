import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettningsComponent } from './settnings.component';

describe('SettningsComponent', () => {
  let component: SettningsComponent;
  let fixture: ComponentFixture<SettningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
