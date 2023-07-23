import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { API_URL } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class IPService {
  private apiKey = '3ef6de2f08688b2e51aa0354f8061591'; // Replace with your ipstack API key
  private apiUrl = 'http://api.ipstack.com/';

  constructor(private http: HttpClient) {}

  getCountryByIP(): Observable<any> {
    // First, get the client's IP address from your server
    return this.http.get<{ ip: string }>(`${API_URL}/getIP`).pipe(
      // Then, fetch the country information based on the IP address
      switchMap((response) => {
        const ipAddress = response.ip;
        return this.http.get(
          `${this.apiUrl}/${ipAddress}?access_key=${this.apiKey}`
        );
      })
    );
  }
}
