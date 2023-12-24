import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLevelItemComponent } from './language-level-item.component';

describe('LanguageLevelItemComponent', () => {
  let component: LanguageLevelItemComponent;
  let fixture: ComponentFixture<LanguageLevelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageLevelItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageLevelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
