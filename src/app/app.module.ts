import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';
import { RouterModule } from '@angular/router';
import { ContactsAppRoutes } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponent, ContactsDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService],
  
})
export class ContactsModule {

}
