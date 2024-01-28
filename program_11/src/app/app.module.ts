import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertToUpperPipe } from './convert-to-upper.pipe';

@NgModule({
  declarations: [AppComponent, ConvertToUpperPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
