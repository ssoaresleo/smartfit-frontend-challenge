import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
