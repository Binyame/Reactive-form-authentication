import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbOperationsService } from '../db-operations.service';
//import { FormEntry } from '../models/form-entry';


@Component({
  selector: 'app-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.scss']
})
export class SubmitSuccessComponent implements OnInit {
  skuArr: any;
  lastRecord: any;
  data: any;

  constructor(private dbOps: DbOperationsService) { }

  ngOnInit() {
    this.dbOps.getSku().subscribe((data) => {
      this.skuArr = data;
      console.log('data ', this.skuArr);
      let lastRecord = data[data.length - 1];
      console.log('Last record only ', lastRecord);
    });
  }

  /*customRecord(index:any, item: any) {
    return this.data[this.data.length - 1];
  }*/

}
