import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  url = 'https://restcountries.com/';
  individualView = new BehaviorSubject(false);
  currentCountries = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  public get getSelectedCountries(): Observable<any> {
    return this.currentCountries.asObservable();
  }

  public get getIndividualView(): Observable<any> {
    return this.individualView.asObservable();
  }

  public setIndividualView(isIndivualView: boolean) {
    this.individualView.next(isIndivualView);
  }

  public setSelectedCountries(type: 'all' | 'region' | 'name', query?: string) {
    let base;
    if (type === 'all') {
      base = this.http.get(
        `${this.url}/v2/${type}?fields=name,capital,region,population,flags`
      );
    } else {
      base = this.http.get(`${this.url}v2/${type}/${query}`);
    }
    base.subscribe((resp) => this.currentCountries.next(resp));
  }
}
