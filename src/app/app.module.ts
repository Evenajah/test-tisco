import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SummaryComponent } from './summary/summary.component';
import { NumberInputDirective } from '../number-input.directive';
import { AgePipe } from './age.pipe';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    FormComponent,
    HelloComponent,
    SummaryComponent,
    NumberInputDirective,
    AgePipe,
  ],
  providers: [AgePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
