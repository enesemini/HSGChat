import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}
  public title = 'HSG Chat';

  public posts = [];

  public onAddNewPost($event): void {
    //alert('Hey!');
    this.posts.push($event);
  }
}
