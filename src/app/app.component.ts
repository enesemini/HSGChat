import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @Input() message: string;
  
  constructor(){}

  title = 'HSG Chat';
  posts = [];

  public onSubmit(message: string): void{
    this.posts.push(this.message);
    this.message = '';
  }
}
