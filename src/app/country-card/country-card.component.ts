import { CountryDataService } from './../service/country-data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent {
  @Input() countryData: any;

  constructor(private countryDataService: CountryDataService) {}

  setSelectedCountry() {
    this.countryDataService.setSelectedCountries('name', this.countryData.name);
    this.countryDataService.setIndividualView(true);
  }
}
