import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { PusherService } from './pusher.service';

export interface Message {
  message: string;
  author: string;
  date: string;
  userId: string;
  color: string;
}

@Injectable()
export class MessageService {
  messagesStream = new ReplaySubject<Message>(1);

  constructor(
    private pusherService: PusherService
  ) {
    this.initialize();
  }

  initialize() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.emitNewMessage(message);
    });
  }

  send(message: Message) {
    console.log("MessageService,", message);
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.emitNewMessage(message);
  }

  emitNewMessage(message: Message) {
    this.messagesStream.next(message);
  }

}