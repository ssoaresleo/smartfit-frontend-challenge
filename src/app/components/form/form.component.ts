import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  results = [];

  filterForms!: FormGroup;

  constructor() {
    this.filterForms = new FormGroup({
      hour: new FormControl('', Validators.required),
      showClosed: new FormControl(true, Validators.required),
    });
  }
}
