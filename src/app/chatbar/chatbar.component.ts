import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.scss']
})
export class ChatbarComponent implements OnInit {
    @Input() message: string;
    posts = [];

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(message: string): void{
    this.posts.push(this.message);
    this.message = '';
  }

}
