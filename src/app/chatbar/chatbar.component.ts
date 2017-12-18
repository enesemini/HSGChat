import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { PusherService } from '../pusher.service';

import { Please } from 'pleasejs';
import { randomColor } from 'randomcolor';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.scss']
})
export class ChatbarComponent implements OnInit {
    @Input() message: string;
    @Input() username: string;
    @Input() userIdLocal: string;
    @Output() addNewPost: EventEmitter<string> = new EventEmitter();
    @Output() userIdCreated: EventEmitter<string> = new EventEmitter();

    constructor(private pusherService: PusherService){}

    ngOnInit() {
      function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      }
      this.username = localStorage.getItem('username') || '';
      this.userIdLocal = localStorage.getItem('userId') || randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    public isTyping(username): void{
      console.log(username);
      this.pusherService.isTypingChannel.trigger('new-isTyping', username);
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
    localStorage.setItem('username', this.username);
    if(!localStorage.getItem('userId')){
      localStorage.setItem('userId', this.userIdLocal);
    }
    if(!localStorage.getItem('userColor')){
      localStorage.setItem('userColor', randomColor({
        luminosity: 'light',
      }));
    }

    function hashCode(str) { // java String#hashCode
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
         hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    }

    function string_to_color(a){"use strict";var b:any = 20,c=function(a){for(var b=0,c=0;c<a.length;c++)b=a.charCodeAt(c)+((b<<5)-b);return b},d=function(a,b){var c=parseInt(a,16),d=Math.round(2.55*b),e=(c>>16)+d,f=(255&c>>8)+d,g=(255&c)+d;return(16777216+65536*(255>e?1>e?0:e:255)+256*(255>f?1>f?0:f:255)+(255>g?1>g?0:g:255)).toString(16).slice(1)},e=function(a){var b=(255&a>>24).toString(16)+(255&a>>16).toString(16)+(255&a>>8).toString(16)+(255&a).toString(16);return b};return d(e(c(a)),b)}


    if(!this.userIdLocal){
      this.userIdCreated.emit(this.userIdLocal);
      console.log(localStorage.getItem('username'), localStorage.getItem('userId'));
    }

    var newPost: any = {};
    // Erstelle ein Object mit allen Werten
    newPost = {
      author: this.username,
      userId: this.userIdLocal,
      message: this.message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
      date: new Date(),
      color: localStorage.getItem('userColor')
    };

    // Sende das Object mit dem EventEmitter zu der höheren Instanz.
    this.addNewPost.emit(newPost);

    // Leere den Input für neue Nachrichten.
    this.message = '';
  }

}
