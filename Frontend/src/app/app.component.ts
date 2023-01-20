import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { concatMap, exhaustMap, filter, mergeMap, noop, switchMap } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public searchForm = this._fb.group({
    searchTerm: [''],
  });

  constructor(
    private _fb: FormBuilder,
    private _searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchForm
      .get('searchTerm')
      ?.valueChanges.pipe(
        filter((searchTerm: string) => !!searchTerm),
        switchMap((searchTerm: string) =>
          this._searchService.search(searchTerm)
        )
      )
      .subscribe(noop);
  }
}
