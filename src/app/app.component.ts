import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MessageService } from './message.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private messageService: MessageService){
  }

  public title = 'HSG Chat Team 6';

  public userId:any = '';

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || '';
  }

  public onUserIdCreated($event): void {
    this.userId = localStorage.setItem('userId', $event)
  }
  public onAddNewPost($event): void {
    let message = $event.message;
    let author = $event.author;
    let date = $event.date;
    let userId = $event.userId;
    let color = $event.color;

    this.messageService.send({message: message, author: author, date: date, userId: userId, color: color});
  }
}
