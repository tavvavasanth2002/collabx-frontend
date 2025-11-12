
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup;
  messages: any[] = [];
  username: string = '';

  constructor(private fb: FormBuilder, private notify: NotificationService) {
    this.issueForm = this.fb.group({
      receiver: ['vendor', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    this.username = user.username || 'MNC';
    this.messages = this.notify.getMessages('company');
  }

  sendMessage() {
    const text = this.issueForm.value.message;
    const receiver = this.issueForm.value.receiver;

    if (this.issueForm.invalid) {
      alert('Please enter your message before sending.');
      return;
    }

    this.notify.sendMessage(this.username, receiver, text);
    alert('Message sent successfully!');
    this.issueForm.reset({ receiver: 'vendor', message: '' });
  }
}