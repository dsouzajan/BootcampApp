import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})

export class StatFiltersComponent implements OnInit {
  details: FormGroup;
  test : any;

  constructor(form: FormBuilder) {
    this.details = form.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.maxLength(500)]
    });
    this.test = "janice";
   }

  ngOnInit(): void {
  }

}
