// manage-sellers.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-manage-sellers',
  templateUrl: './manage-sellers.component.html',
  styleUrls: ['./manage-sellers.component.css']
})
export class ManageSellersComponent {
  sellerToDelete: string = '';
  sellers: any[] = [];

  constructor(private userService: UserService) {}

  deleteSeller() {
    this.userService.deleteSellerByEmail(this.sellerToDelete).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  showAllSellers() {
    this.userService.getAllSellersWithEmail().subscribe(
      (response: any) => {
        console.log(response);
        this.sellers = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
