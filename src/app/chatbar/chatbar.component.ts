import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.scss']
})
export class ChatbarComponent implements OnInit {
    @Input() message: string;
    @Input() username: string;
    @Output() addNewPost: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

  public onSubmit(message: string, username: string): void{
    console.log(message);
    if( !/\S/.test(this.message) ){
      alert('Keine Nachricht im Eingabefeld!');
      return;
    }
    if(!this.username){
      alert('Keine Benutzername im Eingabefeld!');
      return;
    }

    var newPost: any = {};
    // Erstelle ein Object mit allen Werten
    newPost = {
      author: this.username,
      message: this.message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
      date: new Date()
    };

    // Sende das Object mit dem EventEmitter zu der höheren Instanz.
    this.addNewPost.emit(newPost);

    // Leere den Input für neue Nachrichten.
    this.message = '';
  }

}
