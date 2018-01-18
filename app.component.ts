import { Component, Injector, NgModuleFactory, SystemJsNgModuleLoader } from '@angular/core';

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
    // Using native import expressions. With this route I think we'd basically need roll our own
    // NgModuleLoader similar to the SystemJS one
    // 1) To get at the NgModule, and
    // 2) To compile if necessary if we want to support JIT during dev

    // await this.loadWithSystemJS();
    let moduleFactory = await this.loadNgFactoryWithSystemJS();
    // let moduleFactory = await this.loadWithDynamicImportExpression();


    // Using the SystemJsNgModuleLoader would be ok, this already has code to reference the 
    // NgModule itself (with #... syntax) and supports both AOT and JIT.
    // let moduleFactory = await this.loadWithSystemJsNgModuleLoader();

    let moduleRef = moduleFactory.create(this.injector);

    // TODO: how to get references to the components?
    // moduleRef.componentFactoryResolver.resolveComponentFactory, etc.
  }

  private async loadWithSystemJS(): Promise<any> {
    // Webpack correctly produces a different chunk for this, but it does not include NgFactories.
    // NGC does not follow these paths, requires lazy.module.ts to be in the tsconfig explicitly.
    
    // TODO: not sure if this even makes sense, we may need to get the NgModuleFactory
    // let module = await System.import('./lazy.module');
    // return module;
  }

  private async loadWithDynamicImportExpression(): Promise<any> {
    // Webpack correctly produces a different chunk for this, if the module type is set to "esnext", but it does not include NgFactories.
    // NGC correctly follows this import and creates ngfactory files (lazy.module.ts is not required explicitly in the tsconfig).
   
    // TODO: this probably also does not make sense, we'd want the .ngfactory module
    // let module = await import('./lazy.module');
  }

  private async loadNgFactoryWithSystemJS(): Promise<NgModuleFactory<any>> {
    // Webpack correctly produces a different chunk for this, but it only includes the NgFactory for the NgModule
    // NGC does not follow these paths, requires lazy.module.ts to be in the tsconfig explicitly.

    let m = await System.import('./lazy.module.ngfactory');
    let moduleFactory: NgModuleFactory<any> = m["LazyModuleNgFactory"];
    return moduleFactory;
  }

  private async loadWithSystemJsNgModuleLoader(): Promise<NgModuleFactory<any>> {
    // Neither Webpack nor NGC understands this natively.

    return this.loader.load('lazy.module#LazyModule');
  }
}
