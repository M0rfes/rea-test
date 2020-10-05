import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrontPageComponent } from './front-page/front-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: FrontPageComponent,
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
