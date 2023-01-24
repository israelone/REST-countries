import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryDataService } from '../service/country-data.service';
import {
  faAngleDown,
  faArrowLeftLong,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-multiple-country-view',
  templateUrl: './multiple-country-view.component.html',
  styleUrls: ['./multiple-country-view.component.css'],
})
export class MultipleCountryViewComponent implements OnInit {
  countriesSelected: any;
  showOptions: boolean = false;
  regionSelection: string = '';
  searchByNameInput: string = '';
  selectedMode: string = '';
  leftArrowIcon = faArrowLeftLong as IconProp;
  arrowDownIcon = faAngleDown as IconProp;
  magnifyingGlassIcon = faMagnifyingGlass as IconProp;
  @Output() changeView = new EventEmitter<string>();

  constructor(private countryDataService: CountryDataService) {}

  async ngOnInit(): Promise<void> {
    this.countryDataService.setSelectedCountries('all');
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((countries) => {
        this.countriesSelected = countries;
      });

    this.countryDataService.setSelectedCountries('all');

    await this.countryDataService.getSelectedMode
      .pipe()
      .subscribe((selectedMode: string) => {
        this.selectedMode = selectedMode;
      });
  }

  showOptionsToggle() {
    this.showOptions = !this.showOptions;
  }

  async getCountriesByName(event: any) {
    this.countryDataService.setSelectedCountries('name', event.value);
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((countries) => {
        this.countriesSelected = countries;
      });
  }

  selectOption(event: any) {
    this.regionSelection = event.innerText.toLowerCase();
    this.showOptionsToggle();
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
        this.countriesSelected = countries;
      });
  }
}
