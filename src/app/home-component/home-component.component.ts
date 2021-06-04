import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  /*
   * Navigate to user programmitically
   */
  navigateToUser() {
    this.router.navigate(['/user']);
  }

  navigateToSingleUser() {
    this.router.navigate(['/user/view/1']);
  }

  /*
   * Navigate to servers programmitically
   * and send query parameters and fragment
   */
  navigateToServer() {
    this.router.navigate(['/servers']);
  }

  navigateToSingleServer() {
    this.router.navigate(['/servers/1'], {
      queryParams: { requestType: 'view' },
      fragment: 'share'
    });
  }

  navigateToConfidentialData() {
    this.router.navigate(['/confidential-data']);
  }

  navigateToResolverData() {
    this.router.navigate(['/resolver-data']);
  }

  navigateToErrorPage() {
    this.router.navigate(['/not-found']);
  }
}
