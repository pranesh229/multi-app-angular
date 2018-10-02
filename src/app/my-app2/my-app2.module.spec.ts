import { MyApp2Module } from './my-app2.module';

describe('MyApp2Module', () => {
  let myApp2Module: MyApp2Module;

  beforeEach(() => {
    myApp2Module = new MyApp2Module();
  });

  it('should create an instance', () => {
    expect(myApp2Module).toBeTruthy();
  });
});
