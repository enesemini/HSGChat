import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatbarComponent } from './chatbar/chatbar.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';

// import { registerLocaleData } from '@angular/common';
// import localeDe from '@angular/common/locales/de';
// registerLocaleData(localeDe);

// Import HttpClientModule from @angular/common/http
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatbarComponent,
    ChatHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
