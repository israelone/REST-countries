import { CountryDataService } from './../service/country-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  selectedMode: string = 'dark';
  constructor(private countryDataService: CountryDataService) {}

  async ngOnInit(): Promise<void> {
    await this.countryDataService.getSelectedMode
      .pipe()
      .subscribe((selectedMode: string) => {
        this.selectedMode = selectedMode;
      });
  }

  setThemeMode() {
    this.countryDataService.setSelectedMode(
      this.selectedMode === 'dark' ? 'light' : 'dark'
    );
  }
}
