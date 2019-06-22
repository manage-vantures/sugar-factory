import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatCardModule,MatIconModule,MatExpansionModule, MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';

const routes: Routes = [
  { path: '',component:AdminComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatCardModule,MatIconModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule
  ],
  exports:[MatSidenavModule,MatCardModule,MatIconModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
