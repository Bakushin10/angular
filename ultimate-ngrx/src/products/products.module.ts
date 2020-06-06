import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store'


//components
import * from fromComponents from './components'

//components
import * from fromContainers from './containers'

//components
import * from fromServices from './services'

@NgModule({
  imports: [
    CommonModule,
    
  ],
  providers: [...fromServices.services],
  declarations: [
      ...fromContainers.containers, ...fromComponents.components, ...fromServices.services
  ],
  exports: [
      ...fromContainers.containers, ...fromComponents.components, ...fromServices.services
  ]
})
export class ProductsModule {}