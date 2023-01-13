import { CountryDataService } from './../service/country-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css'],
})
export class CountryDataComponent implements OnInit {
  countryData: any;
  constructor(private countryDataService: CountryDataService) {}

  async ngOnInit(): Promise<void> {
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((country: any) => {
        this.countryData = country;
      });
  }
}
