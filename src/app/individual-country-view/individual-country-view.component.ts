import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../service/country-data.service';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-individual-country-view',
  templateUrl: './individual-country-view.component.html',
  styleUrls: ['./individual-country-view.component.css'],
})
export class IndividualCountryViewComponent implements OnInit {
  countryData: any;
  selectedMode: string = '';
  leftArrowIcon = faArrowLeftLong as IconProp;
  constructor(private countryDataService: CountryDataService) {}

  async ngOnInit(): Promise<void> {
    await this.countryDataService.getSelectedCountries
      .pipe()
      .subscribe((country: any) => {
        this.countryData = country[0];
      });
    await this.countryDataService.getSelectedMode
      .pipe()
      .subscribe((selectedMode: string) => {
        this.selectedMode = selectedMode;
      });
  }

  separateValuesByComma(values: Array<any>) {
    if (values.length > 1) {
      return values
        .map((value) => {
          return value.name;
        })
        .join(', ');
    }

    return values[0].name;
  }

  backToMultipleView() {
    this.countryDataService.setIndividualView(false);
  }
}
