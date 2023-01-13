import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCountryViewComponent } from './multiple-country-view.component';

describe('MultipleCountryViewComponent', () => {
  let component: MultipleCountryViewComponent;
  let fixture: ComponentFixture<MultipleCountryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCountryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleCountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
