import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../dataShare.service';

@Component({
  selector: 'app-my-app1',
  templateUrl: './my-app1.component.html',
  styleUrls: ['./my-app1.component.css']
})
export class MyApp1Component implements OnInit {
  constructor(private dataShareService: DataShareService) {
    this.dataShareService.subscribedEvent.subscribe(obj => {
      // use the object that is sent from my-app2
    });
  }

  ngOnInit() {}
}
