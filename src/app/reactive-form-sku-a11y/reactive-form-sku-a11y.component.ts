import { Component, OnInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DbOperationsService } from '../db-operations.service';

@Component({
  selector: 'app-reactive-form-sku-a11y',
  templateUrl: './reactive-form-sku-a11y.component.html',
  styleUrls: ['./reactive-form-sku-a11y.component.scss']
})
export class ReactiveFormSkuA11yComponent implements OnInit {

  title = 'reactive-form-sku';
  myForm: FormGroup;
  sku!: AbstractControl;
  newSku!: any;
  subscription: any;

  @ViewChild('formalert') readNextAlert!: ElementRef;
  @ViewChild('firstinputalert') readFirstAlert!: ElementRef;
  @ViewChild('secondinputalert') readSecondAlert!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef, private fb: FormBuilder, private router: Router, private dbOps: DbOperationsService) {
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

  ngOnInit(): void { }

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
    [key: string]: boolean
  } | null {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
    return null;
  }
  //touched = blurred, dirty = changed
  ngDoCheck() {
    this.sku = this.myForm.controls['sku'];
    if (this.sku.errors?.['required'] && (this.sku.touched || this.sku.dirty)) {
      this.renderer.setProperty(this.readFirstAlert.nativeElement, 'innerHTML', 'SKU is required. ');
    } else if (!this.sku.errors?.['required'] && (this.sku.touched || this.sku.dirty)) {
      this.renderer.setProperty(this.readFirstAlert.nativeElement, 'innerHTML', '');
    }
    if (this.sku.hasError('invalidSku') && (this.sku.touched || this.sku.dirty)) {
      this.renderer.setProperty(this.readSecondAlert.nativeElement, 'innerHTML', 'SKU must begin with <span><b>123</b></span>.');
    } else if (!this.sku.hasError('invalidSku') && (this.sku.touched || this.sku.dirty)) {
      this.renderer.setProperty(this.readSecondAlert.nativeElement, 'innerHTML', '');
    }
    if (!this.myForm.valid && (this.myForm.touched || this.myForm.dirty)) {
      this.renderer.setProperty(this.readNextAlert.nativeElement, 'innerHTML', 'This form entry is invalid');
    } else if (this.myForm.valid && (this.myForm.touched || this.myForm.dirty)) {
      this.renderer.setProperty(this.readNextAlert.nativeElement, 'innerHTML', 'This form entry is valid and can be submitted.');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
