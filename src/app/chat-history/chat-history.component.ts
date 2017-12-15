import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Message } from '../message.service';
import { MessageService } from '../message.service';

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
    ) {
        this.messages = [];
    }

    ngOnInit() {
    this.messageService.messagesStream
        .subscribe(this.newMessageEventHandler.bind(this));
    }

    private newMessageEventHandler(event: Message): void {
        this.messages.push(event);
    }
}
