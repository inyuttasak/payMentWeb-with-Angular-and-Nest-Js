import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CardModule } from 'ngx-card/ngx-card';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from '../app/shared/Matrial.module';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { cardApiService } from './card/card.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule
  ],
  providers: [cardApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
