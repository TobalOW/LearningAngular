import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { CapitalizaPipe } from './pipes/capitaliza.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue :"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
