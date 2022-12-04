import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCountryViewComponent } from './individual-country-view.component';

describe('IndividualCountryViewComponent', () => {
  let component: IndividualCountryViewComponent;
  let fixture: ComponentFixture<IndividualCountryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCountryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualCountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
