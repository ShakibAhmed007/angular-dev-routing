import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  queryParam: string = '';
  fragment: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*
     * Fetching data from query params and fragments
     */

    this.queryParam = this.route.snapshot.queryParams['requestType'];
    this.fragment = this.route.snapshot.fragment;
  }
}
