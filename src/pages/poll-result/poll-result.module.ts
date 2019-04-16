import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PollResultPage } from './poll-result';

@NgModule({
  declarations: [
    PollResultPage,
  ],
  imports: [
    IonicPageModule.forChild(PollResultPage),
  ],
})
export class PollResultPageModule {}
