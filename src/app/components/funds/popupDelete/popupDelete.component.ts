import { Component, OnInit } from '@angular/core';
import {FundsService} from "../service/funds.service";

@Component({
  selector: 'app-funds',
  templateUrl: './popupDelete.component.html',
  styleUrls: ['./popupDelete.component.scss']
})
export class popupDeleteFundsComponent implements OnInit {

  constructor(private fundService:FundsService) { }

  ngOnInit() {
  }
  deleteFund() {
    const fundId = 0; // Provide the ID of the fund to be deleted

    this.fundService.deleteFund(fundId).subscribe(
      () => {
        console.log('Fund deleted');
      },
      (error) => {
        console.error('Failed to delete fund:', error);
      }
    );
  }
}
