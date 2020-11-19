import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailMessage} from '../../models/email-message';
import {EmailService} from '../../services/email.service';
import swal from 'sweetalert2';

@Component({
  selector: 'pw-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  @ViewChild("form")
  private contactForm: NgForm;

  public emailMessage: EmailMessage = new EmailMessage();

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  public sendEmail(): void {
    const onSuccess = () => {
      swal.fire("Thant you!", "Thank you for your message, I will try to answer it as soon as possible.", "success");
      this.resetForm();
    }
    const onError = () => swal.fire(
      "Sorry!",
      "Something went wrong. Refresh the page and try again. <br><br> If you have any problems, please contact me at <a href='mailto:work.marius.shiman@gmail.com'>this</a> email address.",
      "error"
    );

    this.emailService.sendEmail(this.emailMessage).subscribe(onSuccess, onError);
  }

  private resetForm(): void {
    this.emailMessage = new EmailMessage();

    this.contactForm.form.markAsPristine();
    this.contactForm.form.markAsUntouched();
    this.contactForm.form.updateValueAndValidity();
  }
}
