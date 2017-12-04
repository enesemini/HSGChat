import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(private http: HttpClient){
  }
  public title = 'HSG Chat';

  public posts:any = [];

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://hsg-chat.herokuapp.com/posts').subscribe(data => {
      // Read the result field from the JSON response.
      console.log('HTTP GET REQUEST');
      this.posts.push(data[0]);
    });
  }

  public onAddNewPost($event): void {
    //alert('Hey!');
    this.posts.push($event);

    this.http.post('https://hsg-chat.herokuapp.com/posts', $event).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data['message']);
    });
  }
}
