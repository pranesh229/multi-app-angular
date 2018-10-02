import { MyApp1Module } from './my-app1.module';

describe('MyApp1Module', () => {
  let myApp1Module: MyApp1Module;

  beforeEach(() => {
    myApp1Module = new MyApp1Module();
  });

  it('should create an instance', () => {
    expect(myApp1Module).toBeTruthy();
  });
});
