import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  requestType: string = '';
  userId: string = '';
  paramsSubcription: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*
     * Fetching Data from router
     */
    this.requestType = this.route.snapshot.params['requestType'];
    this.userId = this.route.snapshot.params['id'];

    /*
     * If any component need to reload within its own (may be by link, button) click
     * then, to get the updated value from param need to subscribe
     */
    this.paramsSubcription = this.route.params.subscribe((params: Params) => {
      this.requestType = params['requestType'];
      this.userId = params['id'];
    });
  }

  ngOnDestroy() {
    /*
     * Its necessary to unsubscribe,
     * if not , the component will destroy but the Subscription wont.
     */
    this.paramsSubcription.unsubscribe();
  }
}
