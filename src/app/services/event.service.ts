import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event: Event
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/events';
  }

  insertEvent(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }


}
