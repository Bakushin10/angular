import { Component, OnInit } from '@angular/core';
import { GqlService } from '../services/gql-service.service'
import { Apollo } from 'apollo-angular'
import  gql  from 'graphql-tag'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


const GET_SNIPPETS = gql`
{
  allSnippets {
    title
    body
    created
  }
}
`;

const CREATE_SNIPPETS = gql`
  mutation createSnippets($title: String!, $body: String!){
      createSnippets(snippetInput: { title : $title, body : $body}){
        title
        body
      }
  }
`;

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.css']
})
export class GraphqlComponent implements OnInit {
  
  message: string;
  snippets: Observable<any>;
  numberOfItems: number;

  constructor(
    private djangoService: GqlService,
    private apollo: Apollo
    ) {}

  ngOnInit(): void {
    this.message = ""
    this.snippets = this.apollo.watchQuery({
      query : GET_SNIPPETS
    }).valueChanges.pipe(
      map((result:any) => {
        console.log("------ updated result ------")
        console.log(result.data.snippets)
      })
    )
  }

  create(title: string, body: string) {

    this.snippets = this.apollo.watchQuery({
      query : GET_SNIPPETS
    }).valueChanges.pipe(
      map((result:any) => {
        console.log("------ updated result ------")
        console.log(result.data.snippets)
      })
    )


    // this.apollo.mutate({
    //   mutation : CREATE_SNIPPETS,
    //   refetchQueries: [{query: GET_SNIPPETS}],
    //   variables: {
    //     title: title,
    //     body: body
    //   }
    // }).subscribe(() => {
    //   console.log("created")
    // })
  }

  delete(id:string){

  }

}
