import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { StockPrice } from '../StockPrice'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:5000/StockPrice"

  constructor(private http: HttpClient) { }

  getData(): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.apiUrl)
  }
}
