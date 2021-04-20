import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(),
      image: new FormControl(),
      place: new FormControl(),
      model: new FormControl(),
      makeup: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      complete: new FormControl(),

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);

  }

}
