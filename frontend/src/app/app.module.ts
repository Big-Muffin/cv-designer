import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { facades, reducers } from './state';

const modules = [
  ReactiveFormsModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  SharedModule,
  FeaturesModule,
  StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
  }),
  StoreDevtoolsModule.instrument(),
];

@NgModule({
  declarations: [AppComponent],
  imports: [...modules],
  providers: [...facades],
  bootstrap: [AppComponent],
})
export class AppModule {}
