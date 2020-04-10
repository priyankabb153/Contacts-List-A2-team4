import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
 import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {ReactiveFormsModule} from '@angular/forms'
import {ContactService} from './contact.service';


@NgModule({
  declarations:[
    AppComponent,
    ContactsComponent
   
  ],
  imports:[
    BrowserModule,
   // AppRoutingModule
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
