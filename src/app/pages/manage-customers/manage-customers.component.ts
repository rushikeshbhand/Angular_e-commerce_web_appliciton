// manage-customers.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit{
  customerToDelete: string = '';
  allCustomers: any[] = [];
  customersWithEmail: any[] = [];

  constructor(private userService: UserService) {}

  // Delete customer
  deleteCustomer(): void {
    if (!this.customerToDelete) {
      console.error('Please enter a customer email to delete');
      return;
    }

    this.userService.deleteCustomerByEmail(this.customerToDelete).subscribe(
      (response) => {
        console.log(response);
        this.getAllCustomersWithEmail();
      },
      (error) => {
        console.error('Error deleting customer', error);
      }
    );
  }


  ngOnInit(): void {
    this.getAllCustomersWithEmail();
  }

  getAllCustomersWithEmail(): void {
    this.userService.getAllCustomersWithEmail().subscribe(
      (response) => {
        console.log('All customers with email:', response);
        this.customersWithEmail = response;
      },
      (error) => {
        console.error('Error fetching customers with email', error);
      }
    );
  }

  // // Get all customers
  // getAllCustomers(): void {
  //   this.userService.getAllCustomers().subscribe(
  //     (response) => {
  //       console.log('All customers:', response);
  //       this.allCustomers = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching customers', error);
  //     }
  //   );
  // }
}
