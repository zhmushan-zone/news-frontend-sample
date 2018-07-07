import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { IndexRoutingModule } from './index.routes';

@NgModule({
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
