import { CountryDataService } from './../service/country-data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css'],
})
export class CountryCardComponent {
  @Input() countryData: any;
  selectedMode: string = '';

  constructor(private countryDataService: CountryDataService) {}

  async ngOnInit(): Promise<void> {
    await this.countryDataService.getSelectedMode
      .pipe()
      .subscribe((selectedMode: string) => {
        this.selectedMode = selectedMode;
      });
  }

  setSelectedCountry() {
    this.countryDataService.setSelectedCountries('name', this.countryData.name);
    this.countryDataService.setIndividualView(true);
  }
}
