import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brewery } from './brewery.model';

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  constructor(private http: HttpClient) {}

  getBreweries(page: number): Observable<Brewery[]> {
    return this.http.get(
      `https://api.openbrewerydb.org/breweries?page=${page}&per_page=10`
    ) as Observable<Brewery[]>;
  }
}
