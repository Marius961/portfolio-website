import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailMessage} from '../../models/email-message';
import {EmailService} from '../../services/email.service';
import swal from 'sweetalert2';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'pw-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  @ViewChild("form")
  private contactForm: NgForm;

  public loading: boolean = false;
  public contactEmail = environment.contactEmail;
  public emailMessage: EmailMessage = new EmailMessage();

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendEmail(): void {
    this.loading = true;

    const onSuccess = () => {
      swal.fire("Thant you!", "Thank you for your message, I will try to answer it as soon as possible.", "success");
      this.resetForm();
      this.loading = false;
    }
    const onError = () => {
      swal.fire(
        "Sorry!",
        `Something went wrong. Refresh the page and try again. <br><br> If you have any problems, please contact me at <a href='mailto:${this.contactEmail}'>this</a> email address.`,
        "error"
      );
      this.loading = false;
    }

    this.emailService.sendEmail(this.emailMessage).subscribe(onSuccess, onError);
  }

  private resetForm(): void {
    this.emailMessage = new EmailMessage();

    this.contactForm.form.markAsPristine();
    this.contactForm.form.markAsUntouched();
    this.contactForm.form.updateValueAndValidity();
  }
}
