import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApp1Component } from './my-app1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyApp1Component],
  providers: [
    { provide: 'components', useValue: [MyApp1Component], multi: true }
  ],
  bootstrap: [MyApp1Component]
})
export class MyApp1Module {}
