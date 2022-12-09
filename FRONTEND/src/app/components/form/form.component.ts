import { Component, OnInit } from '@angular/core';
import { Client } from '../../core/model/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  formSubscription: Subscription;
  clientVerified: Client = new Client();
  client: Client = new Client();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstname: ['', Validators.required],
      address: ['', Validators.required],
      zip: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('[0-9]*'),
        ],
      ],
      city: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ],
      ],
      gender: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [
        '',
        [Validators.required, Validators.pattern(this.client.password)],
      ],
    });
    this.formSubscription = this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
      this.client = value;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  zipKeyPressed(event: KeyboardEvent) {
    if (!event.key.match(/\d/) || this.client.zip.length >= 5) {
      event.preventDefault();
    }
  }

  phoneKeyPressed(event: KeyboardEvent) {
    if (!event.key.match(/\d/)) {
      event.preventDefault();
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      if (this.client.password !== this.client.confirmPassword) {
        alert(
          "le mot de passe n'est pas identique à la confirmation de mot de passe"
        );
        return;
      }
      this.clientVerified = { ...this.client };
    }
  }
}
