import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Message } from '../message.service';
import { MessageService } from '../message.service';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent implements OnInit {
    @Input() userId: any;
    messages: Array<Message>;

    constructor(
        private messageService: MessageService,
        private pusherService: PusherService
    ) {
        this.messages = [];
    }

    ngOnInit() {
        this.messageService.messagesStream.subscribe(this.newMessageEventHandler.bind(this));

        this.pusherService.isTypingChannel.bind('new-isTyping', (username) => {
            console.log(username + ' is typing...');
        });
    }

    private newMessageEventHandler(event: Message): void {
        this.messages.push(event);
    }
}
