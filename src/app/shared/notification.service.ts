
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private messages: any[] = [];

  sendMessage(sender: string, receiver: string, text: string) {
    this.messages.push({ sender, receiver, text, time: new Date() });
  }

  getMessages(forRole: string) {
    return this.messages.filter(m => m.receiver === forRole);
  }
}