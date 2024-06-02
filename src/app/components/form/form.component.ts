import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../interfaces/location.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  providers: [GetUnitsService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  results: Location[] = [];
  filteredResults: Location[] = [];

  filterForms!: FormGroup;

  constructor(private unitService: GetUnitsService) {
    this.filterForms = new FormGroup({
      hour: new FormControl('', Validators.required),
      showClosed: new FormControl(true, Validators.required),
    });

    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = this.results;
    });
  }

  onSubmit() {
    if (!this.filterForms.value.showClosed) {
      this.filteredResults = this.results.filter(
        (location) => location.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
    // console.log(this.filterForms.value);
  }

  onClean() {
    this.filterForms.reset();
  }
}
