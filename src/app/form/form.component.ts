import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgePipe } from '../age.pipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(
    private route: Router,
    private dataService: DataService,
    private agePipe: AgePipe
  ) {}
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[\u0E00-\u0E7F]+'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[\u0E00-\u0E7F]+'),
    ]),
    dateOfbirth: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),

    tel: new FormControl('', [Validators.minLength(10)]),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.dataService.setData({
      ...this.form.getRawValue(),
      age: this.agePipe.transform(this.form.controls.dateOfbirth.value),
    });
    this.route.navigate(['summary']);
  }
}
