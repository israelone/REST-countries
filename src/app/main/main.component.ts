import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { CountryDataService } from './../service/country-data.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  countriesSelected: any;
  showOptions: boolean = false;
  regionSelection: string = '';
  searchByNameInput: string = '';
  individualView: boolean = false;
  faCoffee = faCoffee;
  selectedMode: string = '';
  constructor(private countryDataService: CountryDataService) {}

  async ngOnInit(): Promise<void> {
    this.countryDataService.setSelectedCountries('all');
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((countries) => {
        this.countriesSelected = countries;
      });

    this.countryDataService.setSelectedCountries('all');
    await this.countryDataService.getIndividualView
      .pipe()
      .subscribe((isIndivualView) => {
        this.individualView = isIndivualView;
      });

    await this.countryDataService.getSelectedMode
      .pipe()
      .subscribe((selectedMode: string) => {
        this.selectedMode = selectedMode;
      });
  }

  showOptionsToggle() {
    this.showOptions = !this.showOptions;
  }

  selectOption(event: any) {
    this.regionSelection = event.innerText.toLowerCase();
    this.showOptionsToggle();
    this.getCountriesByRegion();
  }

  goBackToMultipleView() {
    this.countryDataService.setIndividualView(false);
    this.getCountriesByRegion();
  }

  async getCountriesByRegion() {
    this.countryDataService.setSelectedCountries(
      'region',
      this.regionSelection
    );
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((countries) => {
        console.log(countries);
        this.countriesSelected = countries;
      });
  }

  async getCountriesByName(event: any) {
    this.countryDataService.setSelectedCountries('name', event.value);
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((countries) => {
        console.log(countries);
        this.countriesSelected = countries;
      });
  }
}
