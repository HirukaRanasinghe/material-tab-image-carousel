import { NgModule } from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CarousalComponent } from './components/carousal/carousal.component';
import {MatButtonModule} from '@angular/material/button';
import {MyHammerConfig} from './config/swipe.config';

@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
