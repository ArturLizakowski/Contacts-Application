import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AddContactComponent,
    EditContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
