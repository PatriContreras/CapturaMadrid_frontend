import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public archivos: any = []
  form: FormGroup;
  base64: any;

  constructor(private sanitizer: DomSanitizer) {
    this.form = new FormGroup({
      title: new FormControl(),
      image: new FormControl(),
      place: new FormControl(),
      model: new FormControl(),
      makeup: new FormControl(),
      price: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      description: new FormControl(),
      complete: new FormControl(),

    })
  }

  ngOnInit(): void {
  }

  getFile($event) {
    const file = $event.target.files[0]
    this.getBase64(file).then(image => {
      this.base64 = image;
    })

  }


  getBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve(
          reader.result.toString()
        );
      };
      reader.onerror = error => {
        resolve(
          null);
      };

    } catch (e) {
      return null;
    }
  })

  onSubmit() {
    try {
      this.form.value.image = this.base64;
      console.log(this.form.value);

    } catch (e) {
      console.log('ERROR', e);

    }
  }

}




