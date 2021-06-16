import { NgModule } from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarousalComponent } from './components/carousal/carousal.component';
import {MyHammerConfig} from './config/swipe.config';
import { TableSampleComponent } from './components/table-sample/table-sample.component';
import {SharedModule} from './shared/shared.module';
import { CardSampleComponent } from './components/card-sample/card-sample.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AppRoutingModule} from './app-routing.module';
import { CarouselSampleComponent } from './components/carousel-sample/carousel-sample.component';
import { FormSampleComponent } from './components/form-sample/form-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
    TableSampleComponent,
    CardSampleComponent,
    LandingPageComponent,
    CarouselSampleComponent,
    FormSampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
