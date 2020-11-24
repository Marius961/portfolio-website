import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmailMessage} from '../models/email-message';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public readonly formspreeUrl = environment.formspreeUrl;

  constructor(private http: HttpClient) { }

  public sendEmail(data: EmailMessage): Observable<any> {
    return this.http.post(this.formspreeUrl, data);
  }
}
