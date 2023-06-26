import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { effects, facades, reducers } from './state';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const modules = [
	ReactiveFormsModule,
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
  HttpClientModule,
	SharedModule,
	FeaturesModule,
  EffectsModule.forRoot(effects),
	StoreModule.forRoot(reducers, {
		runtimeChecks: {
			strictStateImmutability: true,
			strictActionImmutability: true,
		},
	}),
	StoreDevtoolsModule.instrument(),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
];

@NgModule({
	declarations: [AppComponent],
	imports: [...modules],
	providers: [...facades],
	bootstrap: [AppComponent],
})
export class AppModule {}
