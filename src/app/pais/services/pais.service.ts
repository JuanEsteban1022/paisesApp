import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisesRestResponse } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,ccn3,population');
  }

  buscarPais(termino: string): Observable<PaisesRestResponse[]> {
    // https://restcountries.com/v3.1/name/{name}
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<PaisesRestResponse[]>(url, {
      params: this.httpParams,
    });
  }

  buscarCapital(termino: string): Observable<PaisesRestResponse[]> {
    // https://restcountries.com/v3.1/capital/{capital}
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<PaisesRestResponse[]>(url, {
      params: this.httpParams,
    });
  }

  obtenerIdPais(id: string): Observable<PaisesRestResponse> {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<PaisesRestResponse>(url);
  }

  buscarRegion(region: string): Observable<PaisesRestResponse[]> {
    // https://restcountries.com/v3.1/regionalbloc/{code}
    const url = `${this.apiUrl}/region/${region}`;
    console.log(url);
    return this.http.get<PaisesRestResponse[]>(url, {
      params: this.httpParams,
    });
  }
}
