import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10,15}$/)
      ]],

      website: [''],

      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all required fields correctly!',
      });
      return;
    }

    console.log(this.contactForm.value);

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us.',
      confirmButtonColor: '#0d6efd'
    });

    this.contactForm.reset();
  }
}
