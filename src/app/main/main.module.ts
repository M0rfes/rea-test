import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page/front-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, FrontPageComponent, ThankYouComponent],

  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
