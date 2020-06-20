import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith, tap } from 'rxjs/operators';
import { of } from 'rxjs'

const CACHE_KEY = 'httpCache';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.sass']
})

export class CacheComponent implements OnInit {
  repos$;
  
  CACHE_KEY = 'httpCache';
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const url = 'https://api.github.com/search/repositories?q=angular';
    
    this.repos$ = this.http.get<any>(url).
    pipe(
      map(data => data.items),
      tap(data => console.log("fetched"))
    )

    this.repos$.subscribe(data =>{
      localStorage[CACHE_KEY] = JSON.stringify(data);
    })

    this.repos$ = this.repos$.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || ''))
    )
  }

}
