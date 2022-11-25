import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodeWarsApiService {
  private readonly URL = environment.CW_API_URL;
  constructor(private http: HttpClient) {}

  get_user_info(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.URL + environment.CW_USERNAME, {
      observe: 'response',
    });
  }
}
