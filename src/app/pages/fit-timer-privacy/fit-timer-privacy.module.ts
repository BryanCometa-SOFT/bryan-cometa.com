import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FitTimerPrivacyComponent } from './fit-timer-privacy.component';

const routes: Routes = [{ path: '', component: FitTimerPrivacyComponent }];

@NgModule({
  declarations: [FitTimerPrivacyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FitTimerPrivacyModule {}
