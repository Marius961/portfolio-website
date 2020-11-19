import { Component, OnInit } from '@angular/core';
import {EmailMessage} from '../../models/email-message';
import {EmailService} from '../../services/email.service';

@Component({
  selector: 'pw-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  public emailMessage: EmailMessage = new EmailMessage();

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendEmail(): void {
    const onSuccess = () => {alert("Success!")};
    const onError = () => alert("Error!");

    this.emailService.sendEmail(this.emailMessage).subscribe(onSuccess, onError);
  }
}
