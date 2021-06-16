import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {CarousalComponent} from './components/carousal/carousal.component';
import {CardSampleComponent} from './components/card-sample/card-sample.component';
import {TableSampleComponent} from './components/table-sample/table-sample.component';
import {CarouselSampleComponent} from './components/carousel-sample/carousel-sample.component';
import {FormSampleComponent} from './components/form-sample/form-sample.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {path: '', component: CarouselSampleComponent},
      { path: 'carousel-component', component: CarouselSampleComponent},
      { path: 'card-example', component: CardSampleComponent},
      { path: 'table-example', component: TableSampleComponent},
      { path: 'form-example', component: FormSampleComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
