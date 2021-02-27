import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphqlComponent } from './graphql/graphql.component'

const routes: Routes = [
  {
    path: "graphql",
    component: GraphqlComponent
  },
  {
    path: "gql",
    component: GraphqlComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
