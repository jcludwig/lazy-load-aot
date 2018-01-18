import { Component, Injector, SystemJsNgModuleLoader } from '@angular/core';

declare var System: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  constructor(
    private readonly loader: SystemJsNgModuleLoader,
    private readonly injector: Injector) {
  }

  public async loadLazyModule(): Promise<any> {
    // -- Webpack correctly produces a different chunk for this, but it does not include NgFactories.
    // -- NGC does not follow these paths, no .ngfactory files are produced.
    let moduleFactory = await System.import('./lazy.module.ngfactory');
    return moduleFactory;

    // -- Webpack correctly produces a different chunk for this, but it does not include NgFactories.
    // -- NGC correctly follows this import and creates ngfactory files
    // let module = await import('./lazy.module');
    // return module;

    // this.loader.load('lazy.module#LazyModule')
    //   .then((moduleFactory) => {
    //     const moduleRef = moduleFactory.create(this.injector);
    //   });
  }
}
