import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },

  {
    path: 'contactsList',
    component: ContactsListComponent
  },
  {
    path: 'contacts/add',
    component: AddContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts/edit/:id',
    component: EditContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
