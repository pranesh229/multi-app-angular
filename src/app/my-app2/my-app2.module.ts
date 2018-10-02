import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApp2Component } from './my-app2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyApp2Component],
  providers: [
    { provide: 'components', useValue: [MyApp2Component], multi: true }
  ],
  bootstrap: [MyApp2Component]
})
export class MyApp2Module {}
