import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId: string = '';
  queryParam: string = '';
  fragment: string = '';

  queryParamSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*
     * Fetching data from query params and fragments and
     */
    this.serverId = this.route.snapshot.params['id'];
    this.queryParam = this.route.snapshot.queryParams['requestType'];
    this.fragment = this.route.snapshot.fragment;

    this.queryParamSubscription = this.route.params.subscribe((param: any) => {
      this.serverId = param['id'];
    });

    this.queryParamSubscription = this.route.queryParams.subscribe(
      (param: any) => {
        this.queryParam = param['requestType'];
      }
    );
  }
}
