import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../types/constant';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = API_URL;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fruits`);
  }
}
