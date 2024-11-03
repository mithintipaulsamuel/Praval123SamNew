import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryServicesComponent } from './country-services.component';

describe('CountryServicesComponent', () => {
  let component: CountryServicesComponent;
  let fixture: ComponentFixture<CountryServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryServicesComponent]
    });
    fixture = TestBed.createComponent(CountryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
