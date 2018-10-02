import { ModuleWithProviders, NgModule } from '@angular/core';
import { DataShareService } from './dataShare.service';

@NgModule()
export class DataShareModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataShareModule,
      providers: [DataShareService]
    };
  }
}
