import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DbOperationsService } from '../db-operations.service';

@Component({
  selector: 'app-reative-form-sku',
  templateUrl: './reative-form-sku.component.html',
  styleUrls: ['./reative-form-sku.component.scss']
})
export class ReativeFormSkuComponent implements OnInit {

  title = 'reactive-form-sku';
  myForm: FormGroup;
  sku!: AbstractControl;
  newSku!: any;
  subscription: any;
  constructor(private fb: FormBuilder, private router: Router, private dbOps: DbOperationsService) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.invalidSku])],
    });
    this.sku = this.myForm.controls['sku'];
    //watch for changes to an input or to the form
    this.subscription = this.sku.valueChanges.subscribe((value: string) => {
      console.log('SKU changed to ', value);
    });
    this.subscription = this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form changed to ', form);
    });
    //END watch for changes
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('You submitted value: ', value);
    this.newSku = {
      "sku": this.sku.value
    };
    console.log('this.newSku ', this.newSku);
    this.dbOps.addSku(this.newSku).subscribe((data) => {
      this.newSku = data;
      console.log('this.newSku as data ', this.newSku);

    })
    this.router.navigate(['success']);
  }

  invalidSku(control: FormControl): {
    [ key: string ]: boolean
  } | null {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
    return null;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
