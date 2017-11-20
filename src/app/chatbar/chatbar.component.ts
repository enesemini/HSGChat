import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.scss']
})
export class ChatbarComponent implements OnInit {
    @Input() message: string;
    @Input() username: string;
    posts = [];

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(message: string, username: string): void{
    if(!this.message){
      alert('Keine Nachricht im Eingabefeld!');
      return;
    }
    if(!this.username){
      alert('Keine Benutzername im Eingabefeld!');
      return;
    }
    let newPost = {
      author: this.username,
      message: this.message,
      date: new Date()
    };
    console.log(newPost);
    this.posts.push(newPost);
    this.message = '';
  }

}
