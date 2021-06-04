import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver-data',
  templateUrl: './resolver-data.component.html',
  styleUrls: ['./resolver-data.component.css']
})
export class ResolverDataComponent implements OnInit {
  serverData: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.serverData = this.route.snapshot.data['serverData'];
  }
}
