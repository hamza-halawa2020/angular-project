import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadersComponent } from './loaders/loaders.component';



@NgModule({
  declarations: [
    LoadersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadersComponent
  ]
})
export class SharedModule {

}
