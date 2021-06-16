import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.css']
})
export class FormSampleComponent implements OnInit {
  productInputForm: FormGroup;
  imageURL: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.productInputForm = new FormGroup({
        productName: new FormControl(null,  { validators: [Validators.required] }),
        productId: new FormControl(null,  { validators: [Validators.required] }),
        price: new FormControl(null,  { validators: [Validators.required] }),
        images: new FormControl(null,  { validators: [Validators.required] }),
      fileSource: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void{
    console.log(this.productInputForm.value);
  }

  showPreview($event): void{
    if ($event.target.files && $event.target.files[0]) {
      for (const image of $event.target.files){
        const reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.imageURL.push(event.target.result);

          this.productInputForm.patchValue({
            fileSource: this.imageURL
          });
        };

        reader.readAsDataURL(image);
      }
    }
  }
}
