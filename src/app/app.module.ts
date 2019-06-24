import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatCardModule,MatIconModule,MatExpansionModule,
        MatFormFieldModule,MatInputModule,MatButtonModule,MatStepperModule} from '@angular/material';
import { ContractorComponent } from './contractor/contractor.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';

const routes: Routes = [
  { path: '',component:AdminComponent},
  {path:'contractor',component:ContractorComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    ContractorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,[RouterModule.forRoot(routes)],MatStepperModule,FormsModule,ReactiveFormsModule,
    MatSidenavModule,MatCardModule,MatIconModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule
  ],
  exports:[MatSidenavModule,MatCardModule,MatIconModule,MatExpansionModule,MatFormFieldModule,MatStepperModule,
             MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
