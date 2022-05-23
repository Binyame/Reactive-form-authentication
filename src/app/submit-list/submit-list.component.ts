import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-list',
  templateUrl: './submit-list.component.html',
  styleUrls: ['./submit-list.component.scss']
})
export class SubmitListComponent implements OnInit {
  @Input() id!: any;
  @Input() sku!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
