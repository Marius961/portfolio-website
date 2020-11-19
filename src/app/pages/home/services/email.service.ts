import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmailMessage} from '../models/email-message';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly formUrl: 'https://formspree.io/f/xoqplrnv';

  constructor(private http: HttpClient) { }

  public sendEmail(data: EmailMessage): Observable<any> {
    return this.http.post(`https://formspree.io/f/xoqplrnv`, data);
  }
}
