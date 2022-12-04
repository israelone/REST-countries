import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CountryDataComponent } from './country-data/country-data.component';
import { IndividualCountryViewComponent } from './individual-country-view/individual-country-view.component';
import { MultipleCountryViewComponent } from './multiple-country-view/multiple-country-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    CountryViewComponent,
    CountryCardComponent,
    CountryDataComponent,
    IndividualCountryViewComponent,
    MultipleCountryViewComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
