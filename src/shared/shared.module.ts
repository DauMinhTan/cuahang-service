import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiDialogModule, TuiRootModule,TuiButtonModule} from '@taiga-ui/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TuiDialogModule,
    TuiRootModule,
    TuiButtonModule
  ],
  exports:[
  TuiRootModule,
  TuiDialogModule,
    TuiButtonModule
  ],
})
export class SharedModule { }
