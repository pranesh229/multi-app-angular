import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../dataShare.service';

@Component({
  selector: 'app-my-app2',
  templateUrl: './my-app2.component.html',
  styleUrls: ['./my-app2.component.css']
})
export class MyApp2Component implements OnInit {
  constructor(private datShareService: DataShareService) {}

  ngOnInit() {}
  buttonClickFunction() {
    this.datShareService.sendMessage('my-app2', 'my-app1', {
      message: 'Hello World'
    });
  }
}
