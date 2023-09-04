import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message: string = '';
  messages: string[] = [];

  sendMessage(): void {
    if (this.message.trim()) {
      // Emit the message to the server using a service (to be implemented)
      this.messages.push(this.message);
      this.message = '';
    }
  }
}
