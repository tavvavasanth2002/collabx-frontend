
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-issues-feedback',
  templateUrl: './issues-feedback.component.html',
  styleUrls: ['./issues-feedback.component.css']
})
export class IssuesFeedbackComponent {
  issueForm: FormGroup;
  sentIssues: any[] = [];

  constructor(private fb: FormBuilder, private notify: NotificationService) {
    this.issueForm = this.fb.group({
      message: ['']
    });
  }

  sendIssue() {
    const user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    const text = this.issueForm.value.message;
    this.notify.sendMessage(user.role, 'vendor', text);
    this.sentIssues.push({ text });
    alert('Issue sent to MNC!');
    this.issueForm.reset();
  }
}