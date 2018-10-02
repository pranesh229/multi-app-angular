import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApp2Component } from './my-app2.component';

describe('MyApp2Component', () => {
  let component: MyApp2Component;
  let fixture: ComponentFixture<MyApp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
